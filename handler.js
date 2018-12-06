'use strict';

const db = require('./db');

module.exports = {
  createBook: require('./src/createBook'),
  getAllBook: require('./src/getAllBook'),
  getBookbyId: require('./src/getBookbyId'),
  updateBook: require('./src/updateBook'),
  deleteBook: require('./src/deleteBook')
}
