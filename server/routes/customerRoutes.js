import express from 'express';
import Customer from '../models/customerModel.js'; // Adjust the path to your model if necessary

// Initialize the router
const router = express.Router();
router.post('/customer', async (req, res) => {
  try {
    const {
      name,
      whatsappNumber,
      deliveryAddress,
      billingAddress,
      companyName,
      gstinNumber, // Optional
      email,
      natureOfWork
    } = req.body;

    // Check for missing required fields
    if (!name || !whatsappNumber || !deliveryAddress || !billingAddress || !email || !natureOfWork) {
      return res.status(400).json({ 
        message: 'Missing required fields', 
        requiredFields: ['name', 'whatsappNumber', 'deliveryAddress', 'billingAddress', 'email', 'natureOfWork'] 
      });
    }

    // Create and save a new customer
    const customer = new Customer({
      name,
      whatsappNumber,
      deliveryAddress,
      billingAddress,
      companyName,
      gstinNumber,
      email,
      natureOfWork
    });

    await customer.save();

    res.status(201).json({ message: 'Customer information saved successfully', customer });
  } catch (error) {
    console.error(error);

    // Handle duplicate email error
    if (error.code === 11000 && error.keyValue.email) {
      return res.status(400).json({ message: 'Email already exists', field: 'email' });
    }

    res.status(500).json({ message: 'Failed to save customer information', error: error.message });
  }
});


// Export the router
export default router;
