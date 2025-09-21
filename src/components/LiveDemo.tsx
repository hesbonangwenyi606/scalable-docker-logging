import React from 'react';

export const LiveDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-8">Live Demo</h1>
      <p className="mb-6 text-center">
        Interact with the running microservices below:
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="http://localhost:3001/users"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
        >
          User Service
        </a>
        <a
          href="http://localhost:3002/auth"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
        >
          Auth Service
        </a>
        <a
          href="http://localhost:3003/payments"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold"
        >
          Payment Service
        </a>
      </div>
    </div>
  );
};
