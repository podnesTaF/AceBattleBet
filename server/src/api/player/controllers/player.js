'use strict';

/**
 * player controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::player.player');
