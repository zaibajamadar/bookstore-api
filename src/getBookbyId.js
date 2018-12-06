'use strict'

const Book = require('../book');

module.exports = getBookbyId;

async function getBookbyId (event, context) {
    const books = await Book.findOne({_id: event.pathParameters.bookId});
    return {
      statusCode: 200,
      body: JSON.stringify(books),
    };
  }
  