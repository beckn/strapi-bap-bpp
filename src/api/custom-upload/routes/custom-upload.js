module.exports = {
  routes: [
    {
      method: "POST",
      path: "/custom-upload",
      handler: "custom-upload.uploadFile",
      config: {
        auth: false, // Change to true if authentication is required
        policies: [],
      },
    },
  ],
};
