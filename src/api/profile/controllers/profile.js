'use strict';

/**
 * profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::profile.profile', ({ strapi: any }) => ({
    async find(ctx) {
        const profile = await strapi.db.query('api::profile.profile').findOne({ where: { 'user': ctx.state.user.id } });
        ctx.params.id = null;
        if (profile)
            ctx.params.id = profile.id;

        return super.findOne(ctx);
    },

    async create(ctx) {
        const extProfile = await strapi.db.query('api::profile.profile').findOne({ where: { 'user': ctx.state.user.id } });

        const data = JSON.parse(ctx.request.body.data);
        data.user = ctx.state.user.id;
        ctx.request.body.data = JSON.stringify(data);

        if (!extProfile) {
            return super.create(ctx);
        }

        ctx.params.id = extProfile.id;
        return super.update(ctx);
    }
}));
