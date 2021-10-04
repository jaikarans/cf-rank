const mongoose = require('mongoose');
const env = require('../config/env');

const UniversitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const university = mongoose.model(`${env.UNIVERSITY_MODEL}`, UniversitySchema);

module.exports = university;
