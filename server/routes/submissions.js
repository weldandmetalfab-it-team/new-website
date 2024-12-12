import { Router } from "express";
import multer, { memoryStorage } from "multer";
import { uploadToMega } from "../utils/megaUpload.js";

import Submission from "../models/submissions.js";


const router = Router();

// Configure multer for file uploads
const storage = memoryStorage();
const upload = multer({ storage });

// POST: Create a new submission
router.post("/submissionRoutes", upload.single("stl_file"), async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      message,
      material_type,
      infill_percentage,
      estimated_cost,
      grams,
    } = req.body;

    // Validation
    if (!first_name || !last_name || !email || !phone_number || !req.file) {
      return res.status(400).json({ status: "error", message: "Missing fields" });
    }

    // Upload file to MEGA
    const stlFileBuffer = req.file.buffer;
    const stlFileName = `${Date.now()}_${req.file.originalname}`;
    const fileUrl = await uploadToMega(stlFileName, stlFileBuffer);

    // Save submission to database
    const submission = new Submission({
      first_name,
      last_name,
      email,
      phone_number,
      message,
      material_type,
      infill_percentage,
      estimated_cost,
      grams,
      file_url: fileUrl,
    });
    await submission.save();

    res.status(201).json({ status: "success", message: "Submission saved", file_url: fileUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// // GET: Retrieve a specific submission by ID
// router.get("/submissions/:id", async (req, res) => {
//   try {
//     const submission = await Submission.findById(req.params.id);
//     if (!submission) {
//       return res.status(404).json({ status: "error", message: "Submission not found" });
//     }
//     res.status(200).json(submission);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ status: "error", message: "Internal server error" });
//   }
// });

// // GET: List all submissions
// router.get("/submissions", async (req, res) => {
//   try {
//     const submissions = await Submission.find();
//     res.status(200).json({ submissions });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ status: "error", message: "Internal server error" });
//   }
// });

export default router;


// router.post('/submissionRoutes', (req, res) => {
//   res.send('POST request received!');
// });


// export default router;
