'use strict';

/**
 * c controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::production-log.production-log');
