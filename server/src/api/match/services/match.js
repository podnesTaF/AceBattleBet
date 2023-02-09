'use strict';

/**
 * match service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::match.match');
