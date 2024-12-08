import React, { useState } from 'react'
import { Mail, Phone, Send, Users, CheckCircle,Instagram, Facebook, Linkedin  } from 'lucide-react'


export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const validateForm = () => {
        let newErrors = {}
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
        else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) newErrors.phone = 'Phone number is invalid'
        if (!formData.message.trim()) newErrors.message = 'Message is required'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            // Handle form submission here
            console.log('Form submitted:', formData)
            setIsSubmitted(true)
            // Reset form after submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }))
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-8 mt-24">
                    <h1 className="text-4xl font-bold text-blue-900  sm:text-5xl mb-4">
                        Feel free to reach out
                    </h1>
                </div>

                {/* Info Section */}
                <div className="text-center mb-16">
                    <p className="text-blue-600 text-xl">
                        We're always here to assist you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Info Cards */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Hiring Card */}
                        <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:scale-105">
                            <div className="inline-block p-4 bg-blue-100 rounded-lg mb-4">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">We are hiring!</h3>
                            <p className="text-gray-600 mb-4">
                                Happiness is a by-product of an effort to make someone else happy...
                            </p>
                            <div className="space-y-2">
                                <a
                                    href="mailto:h.r.atweldandmetalfabrications@gmail.com"
                                    className="flex items-center text-blue-600 hover:text-blue-700"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    <span className="text-sm">h.r.atweldandmetalfabrications@gmail.com</span>
                                </a>
                                <p className="flex items-center text-blue-600">
                                    <Phone className="w-4 h-4 mr-2" />
                                    <span className="text-sm">IN: +91-78458 73334</span>
                                </p>
                            </div>
                        </div>

                        {/* Message Card */}
                        <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:scale-105">
    <div className="inline-block p-4 bg-blue-100 rounded-lg mb-4">
        <Send className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">Send Us a Message</h3>
    <p className="text-gray-600">
        We'd love to hear from you! Send us a message and we'll respond as soon as possible.
    </p>
    
    <div className="mt-4">
        <h4 className="text-lg font-medium mb-2">Connect with Us:</h4>
        <div className="flex space-x-4">
            <a 
                href="https://www.instagram.com/your_instagram_handle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:scale-110 transition-transform"
            >
                <Instagram className="w-7 h-7" />
            </a>
            <a 
                href="https://www.facebook.com/your_facebook_page" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 hover:scale-110 transition-transform"
            >
                <Facebook className="w-7 h-7" />
            </a>
            <a 
                href="https://www.linkedin.com/company/your_linkedin_page" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:scale-110 transition-transform"
            >
                <Linkedin className="w-7 h-7" />
            </a>
        </div>
    </div>
</div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        {isSubmitted ? (
                            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                                <p className="text-gray-600">Your message has been successfully sent. We'll get back to you soon!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                                {/* Form Fields */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First name *
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                                            placeholder="Enter your first name"
                                        />
                                        {errors.firstName && <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last name *
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                                            placeholder="Enter your last name"
                                        />
                                        {errors.lastName && <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                                            placeholder="Enter your email"
                                        />
                                        {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                                            placeholder="Enter your phone number"
                                        />
                                        {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        required
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none`}
                                        placeholder="Enter your message"
                                    />
                                    {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                                >
                                    Submit
                                </button>

                                {/* Other Fields */}
                                {/* Submit Button */}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

