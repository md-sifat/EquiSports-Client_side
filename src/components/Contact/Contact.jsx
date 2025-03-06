import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-gray-400 text-center mb-6">
          Have questions or need assistance? Reach out to us!
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
