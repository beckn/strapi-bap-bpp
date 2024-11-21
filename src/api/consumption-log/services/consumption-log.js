'use strict';


const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::consumption-log.consumption-log');
