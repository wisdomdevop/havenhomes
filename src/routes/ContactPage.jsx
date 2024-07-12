import React from 'react';
import Footer from '../section/Footer';

const ContactPage = () => {
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-700">
              Email: <a href="mailto:contact@example.com" className="text-indigo-600">haven@homes.com</a>
            </p>
            <p className="text-sm font-medium text-gray-700">
              Phone: <a href="tel:+1234567890" className="text-indigo-600">+1 556 324 3457</a>
            </p>
            <p className="text-sm font-medium text-gray-700">
              Address: 1234 Elm Street, New York, NY 10001
            </p>
          </div>
          <div className="text-gray-600">
            <p className="text-sm">
              For any inquiries or assistance, feel free to reach out to us. We are here to help!
            </p>
          </div>
        </div>
      </div>
    </div>

    <section>
      <Footer/>
    </section>

    </>
  );
};

export default ContactPage;
