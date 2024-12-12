import { Schema, model } from 'mongoose';

// Schema
const contactSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Invalid email address'],
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    match: [/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'], // E.164 format
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the model
const Contact = model('Contact', contactSchema);
export default Contact;
