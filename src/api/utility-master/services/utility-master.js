'use strict';
/**
 * utility-master service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::utility-master.utility-master');
