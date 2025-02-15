module.exports = {
  async uploadFile(ctx) {
    try {
      const { files } = ctx.request; // Get the uploaded file

      if (!files || !files.file) {
        return ctx.badRequest("No file provided");
      }

      // Use Strapi's Media Library Plugin for file upload
      const uploadedFiles = await strapi
        .plugin("upload")
        .service("upload")
        .upload({
          data: {}, // Optional metadata
          files: files.file, // The uploaded file
        });

      if (!uploadedFiles || uploadedFiles.length === 0) {
        return ctx.internalServerError("File upload failed");
      }

      return ctx.send({
        message: "File uploaded successfully",
        fileUrl: uploadedFiles[0].url, // File URL
      });
    } catch (error) {
      console.error("Upload error:", error);
      return ctx.internalServerError("File upload failed");
    }
  },
};
