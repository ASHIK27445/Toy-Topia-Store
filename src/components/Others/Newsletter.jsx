import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      toast(`Thank you for subscribing with: ${email}`, {
        autoClose: 1200
      });
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Newsletter</h1>
        <p className="text-gray-600 mb-8">
          Get 15% off your first purchase! Plus, be the first to know about sales,<br />
          new product launches, and exclusive offers!
        </p>
        
        <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Join
          </button>
        </div>
      </div>
    </div>
  )
}
export default Newsletter