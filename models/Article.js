const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    sum: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        default: false
    },
    note: {
        type: Schema.Types.ObjectID,
        ref: "Note"
    }
})

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema)

// Export the Article model
module.exports = Article;