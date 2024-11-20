'use strict';

/**
 * saved-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saved-item.saved-item');
