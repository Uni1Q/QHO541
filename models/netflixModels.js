const mongoose = require('mongoose')

const netflixSchema = mongoose.Schema(
    {
        show_id: { 
            type: String, 
            required: true, 
            unique: true },
        type: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: false,
        },
        cast: {
            type: String,
            required: false
        },
        country: {
            type: String,
            required: false
        },
        date_added: {
            type: String,
            required: true
        },
        release_year: {
            type: Number,
            required: true
        },
        rating: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        listed_in: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
)

const netflixContent = mongoose.model('netflixContent', netflixSchema);

module.exports = netflixContent;