'use strict';

/**
 * deg-wallet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::deg-wallet.deg-wallet');
