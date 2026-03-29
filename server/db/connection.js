const mongoose = require('mongoose');

const url = "mongodb+srv://madihamehroj65_db_user:FpfjCkh9RZeAMwai@crowdmailer.ol2jdew.mongodb.net/ChatApp?retryWrites=true&w=majority";

mongoose.connect(url)
    .then(() => console.log('Connected to DB'))
    .catch((e) => console.log('Error', e));