import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import contactRoutes from './routes/contactRoutes.js';
import submissionRoutes from './routes/submissions.js';
import customerRoutes  from './routes/customerRoutes.js';
// import phonepeRoute from './routes/phonepeRoute.js';



// Load environment variables
dotenv.config();

const app = express();
// app.use(cors());
// const bodyParser = require('body-parser');

// MongoDB Atlas connection string
const uri = process.env.MONGO_URI;

// MongoDB connection
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('MongoDB connection error:', error.message));

// Middleware
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); 

// Routes
app.use('/api/contact', contactRoutes);
app.use("/api", submissionRoutes);
app.use('/api', customerRoutes);
// app.use("/api", phonepeRoute);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
