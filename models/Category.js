const mongoose = require('mongoose');



const CategorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    },
    categoryImage: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('Categories', CategorySchema)