'use strict';

/**
 * production-log service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::production-log.production-log');
