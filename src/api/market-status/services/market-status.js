'use strict';

/**
 * market-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::market-status.market-status');
