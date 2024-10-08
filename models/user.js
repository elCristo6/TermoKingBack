// models/deviceData.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  userType: { type: String, required: true },
  password: { type: String, required: true },
  deviceId: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
