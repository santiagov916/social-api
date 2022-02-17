const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4840;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/social-api', {
    useNewParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`) )