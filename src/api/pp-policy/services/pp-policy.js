'use strict';

/**
 * pp-policy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pp-policy.pp-policy');
