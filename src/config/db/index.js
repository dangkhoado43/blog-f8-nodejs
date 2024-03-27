const mongoose = require('mongoose');

async function connect() {
    try {
        // mongoose
        //     .connect('mongodb://127.0.0.1:27017')
        //     .then(() => console.log('Connected!'));
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log('Connect successfully!');
    } catch (error) {
        console.log('Error connecting!');
    }
}

module.exports = { connect };
