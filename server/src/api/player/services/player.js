'use strict';

/**
 * player service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::player.player');
