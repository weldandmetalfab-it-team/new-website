import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  billingAddress: { type: String, required: true },
  companyName: { type: String },
  gstinNumber: { type: String },
  email: { type: String, required: true, unique: true }, // Unique constraint
  natureOfWork: { type: String, required: true }
});

// Create the Customer model
const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
