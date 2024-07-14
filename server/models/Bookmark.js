const { Schema, model } = require('mongoose');

const bookmarkSchema = new Schema (
    {
        description: {
            type: String,
        },
        url: {
            type: String,
            },
        category: {
            type: String,
        },
        username:{
            type:Schema.Types.ObjectId,
            ref: 'User'
        },
    },
);

const Bookmark = model('Bookmark', bookmarkSchema)

module.exports = Bookmark;