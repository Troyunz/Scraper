const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const storageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Storage = mongoose.model('Storage', storageSchema);
module.exports = Storage;