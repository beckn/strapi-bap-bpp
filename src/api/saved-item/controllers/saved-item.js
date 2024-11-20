"use strict";

/**
 * saved-item router
 */
// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::saved-item.saved-item');

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::saved-item.saved-item",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query.filters = { ...ctx.query.filters, user: ctx.state.user.id };
      return super.find(ctx);
    },

    async findOne(ctx) {
      const savedItem = await strapi.db
        .query("api::saved-item.saved-item")
        .findOne({ where: { user: ctx.state.user.id, id: ctx.params.id } });
      if (!savedItem) ctx.params.id = null;

      return super.findOne(ctx);
    },

    async create(ctx) {
      ctx.request.body.data = {
        ...ctx.request.body.data,
        user: ctx.state.user.id,
      };
      return super.create(ctx);
    },

    async delete(ctx) {
      const savedItem = await strapi.db
        .query("api::saved-item.saved-item")
        .findOne({ where: { user: ctx.state.user.id, id: ctx.params.id } });
      if (!savedItem) ctx.params.id = null;

      return super.delete(ctx);
    },
  })
);
