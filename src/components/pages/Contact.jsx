import React from "react";

const Contact = () => {
  return (
    <div className="p-10 text-center bg-secondary min-h-screen">
      <h2 className="text-4xl font-bold text-primary">Contact Us</h2>
      <p className="mt-4 text-lg">📧 Email: info@nimbuscoffee.com</p>
      <p className="text-lg">📞 Phone: +62 812 3456 7890</p>
      <form className="mt-6 max-w-lg mx-auto">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <textarea 
          placeholder="Your Message" 
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        ></textarea>
        <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-80 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
