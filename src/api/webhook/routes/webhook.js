module.exports=  {
  routes: [
    {
      method: "POST",
      path: "/webhook",
      handler: "webhook.updateOrder",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
  ],
};
