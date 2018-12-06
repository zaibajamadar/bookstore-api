'use strict'

const Book = require('../book');

module.exports = createBook;

async function createBook(event, context, callback) {
    const data = JSON.parse(event.body);
    if (!data) {
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify({
                message: 'error!'
            })
        });
    }

    const book = await Book.create(data)
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(book)
    });
}