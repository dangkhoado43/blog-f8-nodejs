const mongoose = require('mongoose');

// Create slug
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        id: ObjectId,
        name: { type: String, required: true, minLength: 1, maxLength: 255 },
        description: { type: String, maxLength: 600 },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String },
        // createdAt: { type: Date, default: Date.now },
        // updatedAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Course', Course);
