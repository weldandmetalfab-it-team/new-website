import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: String, required: true },
  message: { type: String },
  material_type: { type: String, required: true },
  infill_percentage: { type: Number, required: true },
  estimated_cost: { type: Number, required: true },
  grams: { type: Number, required: true },
  file_url: { type: String, required: true },
});

const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;
