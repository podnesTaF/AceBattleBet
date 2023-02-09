'use strict';

/**
 * coach service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::coach.coach');
