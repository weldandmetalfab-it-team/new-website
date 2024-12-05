import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

const app = express();

// MongoDB Atlas connection string
const uri = process.env.MONGO_URI;

mongoose.connect(uri, )
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('MongoDB connection error:', error.message));

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json('Hello, MongoDB!');
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
