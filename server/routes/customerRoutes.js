import express from 'express';
import validator from 'validator';
import Customer from '../models/customerModel.js';

const router = express.Router();

// Create customer route
router.post('/customer', async (req, res) => {
  try {
    const {
      name,
      whatsappNumber,
      deliveryAddress,
      billingAddress,
      companyName,
      gstinNumber,
      email,
      natureOfWork,
    } = req.body;

    // Check required fields
    const missingFields = [];
    ['name', 'whatsappNumber', 'deliveryAddress', 'billingAddress', 'email', 'natureOfWork'].forEach((field) => {
      if (!req.body[field]) missingFields.push(field);
    });

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: 'Missing required fields',
        missingFields,
      });
    }

    // Validate email and phone
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format', field: 'email' });
    }

    if (!validator.isMobilePhone(whatsappNumber, 'any')) {
      return res.status(400).json({ message: 'Invalid WhatsApp number format', field: 'whatsappNumber' });
    }

    // Create new customer
    const customer = new Customer({
      name,
      whatsappNumber,
      deliveryAddress,
      billingAddress,
      companyName,
      gstinNumber,
      email,
      natureOfWork,
    });

    await customer.save();

    res.status(201).json({ message: 'Customer information saved successfully', customer });
  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      return res.status(400).json({
        message: 'Duplicate value detected',
        field: Object.keys(error.keyValue)[0],
        value: error.keyValue[Object.keys(error.keyValue)[0]],
      });
    }

    res.status(500).json({ message: 'Failed to save customer information', error: error.message });
  }
});

export default router;
