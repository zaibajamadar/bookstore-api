'use strict'

const Book = require('../book');

module.exports = getAllBook;

async function getAllBook (event, context) {
    const books = await Book.find({});
    return {
      statusCode: 200,
      body: JSON.stringify(books),
    };
  }