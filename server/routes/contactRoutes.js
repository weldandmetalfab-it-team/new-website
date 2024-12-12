import express from 'express';
import Contact from '../models/contact.js';

const router = express.Router();


router.post('/contact', async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, message } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !email || !phoneNumber || !message) {
            return res.status(400).json({ error: 'All fields are required!' });
        }

        // Create a new contact
        const contact = new Contact({ firstName, lastName, email, phoneNumber, message });
        await contact.save();

        res.status(201).json({ message: 'Contact created successfully!', contact });
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({ error: 'Failed to create contact', details: error.message });
    }
});


export default router;