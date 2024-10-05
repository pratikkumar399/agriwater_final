import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMail, IoLocation, IoCall, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl flex">
        {/* Contact Information Section */}
        <div className="w-full md:w-1/2 bg-teal-600 text-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Let's Get In Touch</h3>
          <div className="mb-4">
            <IoMail className="inline-block mr-2" /> lorem@gmail.com
          </div>
          <div className="mb-4">
            <IoLocation className="inline-block mr-2" /> Khulna, Bagerhat
          </div>
          <div className="mb-4">
            <IoCall className="inline-block mr-2" /> +8801231456708
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Connect with us:</h4>
            <div className="flex space-x-4">
              <IoLogoFacebook className="text-2xl" />
              <IoLogoInstagram className="text-2xl" />
              <IoLogoTwitter className="text-2xl" />
              <IoLogoYoutube className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 bg-teal-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-teal-700">Contact with Us</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="text-sm text-teal-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-teal-300 rounded-md focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-teal-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-teal-300 rounded-md focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm text-teal-700">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-teal-300 rounded-md focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-teal-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-teal-300 rounded-md focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your message"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
