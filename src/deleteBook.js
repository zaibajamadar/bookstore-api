'use strict'

const Book = require('../book');

module.exports = deleteBook;


async function deleteBook (event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'deleteBook tada!',
        input: event,
      }),
    };
  }