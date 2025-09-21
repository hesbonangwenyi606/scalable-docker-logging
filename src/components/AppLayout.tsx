import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import { ContainerCard } from './ContainerCard';
import { LogViewer } from './LogViewer';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { MetricsDashboard } from './MetricsDashboard';

export const AppLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const heroImage = 'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460827348_c1f149b8.webp';
  
  const serviceImages = [
    'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460830817_22bdfa86.webp',
    'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460832538_41407506.webp',
    'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460834340_6378e8f5.webp',
    'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460836094_f21d6f37.webp',
    'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460837827_76846b91.webp',
    'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460839529_8db3d4e5.webp',
    'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460841292_2ba7a40d.webp',
    'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460843261_a52de61a.webp'
  ];

  const containerImages = [
    'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460847313_63f24f34.webp',
    'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460849508_0cce0be9.webp',
    'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460851285_06458c56.webp',
    'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460853027_1e0dfd83.webp',
    'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460854805_549b164e.webp',
    'https://d64gsuwffb70l.cloudfront.net/68cffb74c460bb74e2ec4f5e_1758460856526_a0fbbb3b.webp'
  ];

  const services = [
    {
      title: 'API Gateway',
      description: 'Kong-powered request routing and rate limiting',
      status: 'healthy' as const,
      image: serviceImages[0],
      metrics: { requests: '2.4K', latency: '45ms', uptime: '99.9%' },
      endpoints: ['GET /api/v1/health', 'POST /api/v1/auth', 'GET /api/v1/users']
    },
    {
      title: 'User Service',
      description: 'User management and profile operations',
      status: 'healthy' as const,
      image: serviceImages[1],
      metrics: { requests: '1.2K', latency: '32ms', uptime: '99.8%' },
      endpoints: ['GET /users/:id', 'POST /users', 'PUT /users/:id']
    },
    {
      title: 'Auth Service',
      description: 'JWT authentication and authorization',
      status: 'warning' as const,
      image: serviceImages[2],
      metrics: { requests: '890', latency: '78ms', uptime: '98.5%' },
      endpoints: ['POST /auth/login', 'POST /auth/refresh', 'DELETE /auth/logout']
    },
    {
      title: 'Payment Service',
      description: 'Transaction processing and billing',
      status: 'healthy' as const,
      image: serviceImages[3],
      metrics: { requests: '456', latency: '125ms', uptime: '99.9%' },
      endpoints: ['POST /payments', 'GET /payments/:id', 'POST /refunds']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Microservices Architecture
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Scalable microservices platform with API Gateway, service discovery, and distributed logging.
            Built with Node.js, Docker, Kong, MongoDB, and ELK Stack.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Live Demo →
            </button>
            <button className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'services', label: 'Services' },
              { id: 'containers', label: 'Containers' },
              { id: 'logs', label: 'Logs' },
              { id: 'architecture', label: 'Architecture' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <MetricsDashboard />
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Service Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Microservices</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'containers' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Docker Containers</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {[
                { name: 'api-gateway', image: 'kong:latest', status: 'running' as const, cpu: '12%', memory: '256MB', ports: ['8000:8000', '8001:8001'] },
                { name: 'user-service', image: 'node:18-alpine', status: 'running' as const, cpu: '8%', memory: '128MB', ports: ['3001:3000'] },
                { name: 'auth-service', image: 'node:18-alpine', status: 'running' as const, cpu: '15%', memory: '192MB', ports: ['3002:3000'] },
                { name: 'payment-service', image: 'node:18-alpine', status: 'running' as const, cpu: '6%', memory: '96MB', ports: ['3003:3000'] },
                { name: 'mongodb', image: 'mongo:6.0', status: 'running' as const, cpu: '22%', memory: '512MB', ports: ['27017:27017'] },
                { name: 'redis', image: 'redis:7-alpine', status: 'running' as const, cpu: '3%', memory: '64MB', ports: ['6379:6379'] }
              ].map((container, index) => (
                <ContainerCard key={index} {...container} containerImage={containerImages[index]} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'logs' && <LogViewer />}
        {activeTab === 'architecture' && <ArchitectureDiagram />}
      </div>
    </div>
  );
};

export default AppLayout;