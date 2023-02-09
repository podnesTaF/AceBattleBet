'use strict';

/**
 * competition service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::competition.competition');
