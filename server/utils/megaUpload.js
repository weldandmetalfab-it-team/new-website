import { Storage } from "megajs";

/**
 * Uploads a file to MEGA storage and returns the download URL.
 * @param {string} filename - Name of the file to upload.
 * @param {Buffer} buffer - File data as a Node.js Buffer.
 * @returns {Promise<string>} - Download URL of the uploaded file.
 */
export async function uploadToMega(filename, buffer) {
  try {
    
    if (!Buffer.isBuffer(buffer)) {
      throw new Error("Invalid buffer: Expected a Node.js Buffer object.");
    }

    if (typeof filename !== "string" || filename.trim() === "") {
      throw new Error("Invalid filename: Expected a non-empty string.");
    }

    // Initialize MEGA storage
    const storage = new Storage({
      email: "weldandmetalfab.it.team01@gmail.com",
      password: "weldandmetal01",
    });

    // Wait for storage to be ready
    await new Promise((resolve, reject) => {
      storage.on("ready", resolve);
      storage.on("error", reject);
    });

    console.log("Connected to MEGA storage.");

    // Upload the file
    const file = storage.upload(filename, buffer);

    // Wait for upload completion
    await new Promise((resolve, reject) => {
      file.on("complete", resolve);
      file.on("error", reject);
    });

    console.log("File uploaded successfully:", filename);

    // Generate a download link
    const fileUrl = `https://mega.nz/file/${file.nodeId}#${storage.key}`;
    console.log("Generated file URL:", fileUrl);

    return fileUrl;
  } catch (error) {
    console.error("MEGA uploading file failed:", error);
    throw error;
  }
}
