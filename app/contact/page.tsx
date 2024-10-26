"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-600 p-6 flex flex-col justify-between">
      <h1 className="text-4xl font-bold text-white pt-6">Contact Us</h1>
      <p className="text-gray-300 mt-4">
        We would love to hear from you! If you have any questions or feedback,
        feel free to reach out to us.
      </p>

      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 w-full text-black rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 w-full text-black rounded-md"
          required
        />
        <textarea
          placeholder="Your Message"
          className="px-4 py-2 w-full text-black rounded-md"
          rows={4}
          required
        ></textarea>
        <button className="bg-blue-500 px-4 py-2 text-white rounded-md">
          Send Message
        </button>
      </form>

      <div className="mt-4">
        <h2 className="text-2xl font-bold text-white">Contact Information</h2>
        <p className="text-gray-300 mt-2">Email: info@example.com</p>
        <p className="text-gray-300">Phone: +1234567890</p>
        <p className="text-gray-300">Follow us on:</p>
        <ul className="flex space-x-4">
          <li>
            <a href="https://facebook.com" className="text-blue-500">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" className="text-blue-500">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com" className="text-blue-500">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;



