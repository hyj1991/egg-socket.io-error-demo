'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },

  io: {
    enable: true,
    package: 'egg-socket.io',
  }
};
