import React, { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  status: 'healthy' | 'warning' | 'error';
  image: string;
  metrics: {
    requests: string;
    latency: string;
    uptime: string;
  };
  endpoints?: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  status,
  image,
  metrics,
  endpoints = []
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColors = {
    healthy: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500'
  };

  return (
    <div 
      className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 cursor-pointer transform hover:scale-105"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between mb-4">
        <img src={image} alt={title} className="w-12 h-12 rounded-lg" />
        <div className={`w-3 h-3 rounded-full ${statusColors[status]} animate-pulse`} />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">{metrics.requests}</div>
          <div className="text-xs text-gray-500">Requests/min</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{metrics.latency}</div>
          <div className="text-xs text-gray-500">Latency</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{metrics.uptime}</div>
          <div className="text-xs text-gray-500">Uptime</div>
        </div>
      </div>

      {isExpanded && endpoints.length > 0 && (
        <div className="border-t border-gray-700 pt-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">API Endpoints:</h4>
          {endpoints.map((endpoint, index) => (
            <div key={index} className="text-xs text-gray-400 font-mono bg-gray-800 px-2 py-1 rounded mb-1">
              {endpoint}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};