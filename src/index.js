"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    // const io = require("socket.io")(strapi.server.httpServer, {
    //   cors: {
    //     origin: "*", // Adjust this according to your CORS policy
    //     methods: ["GET", "POST"],
    //   },
    // });
    // io.on("connection", (socket) => {
    //   console.log("a user connected");
    //   const agentId = socket.handshake.query.agentId;
    //   socket.on("disconnect", () => {
    //     console.log("user disconnected");
    //   });
    //   // Make the socket instance accessible globally
    //   strapi.io = io;
    //   strapi.agent = { agentId };
    // });
  },
};
