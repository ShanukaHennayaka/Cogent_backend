const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (use environment variables)
mongoose.connect(process.env.MONGODB_URI);

// Your routes
app.post('/api/register', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving data' });
  }
});

// Export as a Vercel Serverless Function
module.exports = app;