const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const registerRoutes = require('./routes/registerRoutes');

dotenv.config();

const app = express();

app.use(express.json()); 
app.use(cors());      

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB', error));

app.use('/api', registerRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
