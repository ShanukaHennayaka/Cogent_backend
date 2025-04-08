const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String },
  consent: { type: Boolean, required: true },
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
