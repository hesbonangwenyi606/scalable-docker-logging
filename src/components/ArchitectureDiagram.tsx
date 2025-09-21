import React, { useState } from 'react';

interface Node {
  id: string;
  name: string;
  x: number;
  y: number;
  type: 'gateway' | 'service' | 'database' | 'cache';
  connections: string[];
}

export const ArchitectureDiagram: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const nodes: Node[] = [
    { id: 'gateway', name: 'API Gateway', x: 50, y: 20, type: 'gateway', connections: ['auth', 'user', 'payment'] },
    { id: 'auth', name: 'Auth Service', x: 20, y: 60, type: 'service', connections: ['redis'] },
    { id: 'user', name: 'User Service', x: 50, y: 60, type: 'service', connections: ['mongodb'] },
    { id: 'payment', name: 'Payment Service', x: 80, y: 60, type: 'service', connections: ['mongodb'] },
    { id: 'redis', name: 'Redis Cache', x: 20, y: 90, type: 'cache', connections: [] },
    { id: 'mongodb', name: 'MongoDB', x: 65, y: 90, type: 'database', connections: [] },
  ];

  const nodeColors = {
    gateway: 'bg-blue-500',
    service: 'bg-green-500',
    database: 'bg-purple-500',
    cache: 'bg-orange-500'
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">System Architecture</h3>
      
      <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden">
        <svg className="absolute inset-0 w-full h-full">
          {/* Render connections */}
          {nodes.map(node => 
            node.connections.map(connId => {
              const targetNode = nodes.find(n => n.id === connId);
              if (!targetNode) return null;
              
              return (
                <line
                  key={`${node.id}-${connId}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${targetNode.x}%`}
                  y2={`${targetNode.y}%`}
                  stroke="#00D4FF"
                  strokeWidth="2"
                  className="animate-pulse"
                />
              );
            })
          )}
        </svg>

        {/* Render nodes */}
        {nodes.map(node => (
          <div
            key={node.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
              selectedNode === node.id ? 'scale-125' : 'hover:scale-110'
            }`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
          >
            <div className={`w-16 h-16 rounded-full ${nodeColors[node.type]} flex items-center justify-center shadow-lg`}>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className={`w-4 h-4 ${nodeColors[node.type]} rounded-full`} />
              </div>
            </div>
            <div className="text-white text-xs text-center mt-2 font-semibold">
              {node.name}
            </div>
          </div>
        ))}
      </div>

      {selectedNode && (
        <div className="mt-4 bg-gray-800 rounded-lg p-4">
          <h4 className="text-lg font-bold text-white mb-2">
            {nodes.find(n => n.id === selectedNode)?.name}
          </h4>
          <p className="text-gray-400 text-sm">
            Click on connected nodes to explore the system architecture and data flow patterns.
          </p>
        </div>
      )}
    </div>
  );
};