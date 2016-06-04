'use strict';

let gingerbread = require('gingerbread');

module.exports = phrase => {
  return new Promise((resolve, reject) => {
    gingerbread(phrase, (error, _, result) => {
      if (error) return reject(error);
      resolve(result);
    });
  });
};
