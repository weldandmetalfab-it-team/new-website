import mega from "mega";

export async function uploadToMega(filename, buffer) {
  try {
    // Validate inputs
    if (!Buffer.isBuffer(buffer)) {
      throw new Error("Invalid buffer: Expected a Node.js Buffer object.");
    }

    if (typeof filename !== "string" || filename.trim() === "") {
      throw new Error("Invalid filename: Expected a non-empty string.");
    }

    // Initialize MEGA storage
    const storage = new mega.Storage({
      email: "weldandmetalfab.it.team01@gmail.com",
      password: "weldandmetal01",
    });

    // Wait for storage to be ready
    await new Promise((resolve, reject) => {
      storage.on("ready", resolve);
      storage.on("error", (err) => {
        console.error("Error connecting to MEGA storage:", err);
        reject(err);
      });
    });

    console.log("Connected to MEGA storage.");

    // Start file upload
    const upload = storage.upload(filename);
    upload.write(buffer);
    upload.end();

    // Wait for the upload to complete
    const file = await new Promise((resolve, reject) => {
      upload.on("complete", resolve);
      upload.on("error", (err) => {
        console.error("Upload error:", err);
        reject(err);
      });
      upload.on("progress", (bytesLoaded, bytesTotal) => {
        console.log(`Upload progress: ${bytesLoaded} / ${bytesTotal}`);
      });
    });

    // Return the file link
    console.log("Upload completed. File details:", file);
    return file.link;
  } catch (error) {
    console.error("MEGA upload failed:", error);
    throw error;
  }
}
