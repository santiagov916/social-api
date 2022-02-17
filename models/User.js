const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    type: String,
    unique: true,
    required,
    Trimmed: true
})

const User = model('User', UserSchema);

module.exports = User;