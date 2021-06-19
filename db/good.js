const mongoose = require('mongoose');
const Scheme = mongoose.Schema
const curdate = new Date()

const goodsSchema = new Scheme({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Rating: {
        type: Number,
        required: true
    },
    Date: {
        type: Date
    }
})

goodsSchema.virtual('daysbefore').get(function() {
    let rowdate = new Date(this.Date)  
    return Math.ceil((curdate.getTime() - rowdate.getTime()) / (1000 * 3600 * 24))
})
goodsSchema.set('toJSON', { getters: true, virtuals: true });
const Good = mongoose.model('Good', goodsSchema)

module.exports = Good;