const Registration = require('../models/registraion');

const registerUser = async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving registration data' });
  }
};

module.exports = { registerUser };
