'use strict';

/**
 * pp-action service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pp-action.pp-action');
