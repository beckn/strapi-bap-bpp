'use strict';

/**
 * production-log router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::production-log.production-log');
