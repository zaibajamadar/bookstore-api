'use strict'

const Book = require('../book');

module.exports = updateBook;

async function updateBook (event, context) {
    const books = await Book.updateOne({_id: event.pathParameters.bookId}, JSON.parse(event.body));
    return {
      statusCode: 200,
      body: JSON.stringify(books),
    };
  }
  