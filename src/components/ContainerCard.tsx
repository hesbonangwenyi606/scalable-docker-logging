import React from 'react';

interface ContainerCardProps {
  name: string;
  image: string;
  status: 'running' | 'stopped' | 'error';
  cpu: string;
  memory: string;
  ports: string[];
  containerImage: string;
}

export const ContainerCard: React.FC<ContainerCardProps> = ({
  name,
  image,
  status,
  cpu,
  memory,
  ports,
  containerImage
}) => {
  const statusColors = {
    running: 'text-green-400 bg-green-400/10',
    stopped: 'text-gray-400 bg-gray-400/10',
    error: 'text-red-400 bg-red-400/10'
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img src={containerImage} alt="Container" className="w-10 h-10 rounded" />
          <div>
            <h3 className="text-lg font-bold text-white">{name}</h3>
            <p className="text-sm text-gray-400">{image}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
          {status.toUpperCase()}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-800 rounded-lg p-3">
          <div className="text-sm text-gray-400">CPU Usage</div>
          <div className="text-xl font-bold text-blue-400">{cpu}</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3">
          <div className="text-sm text-gray-400">Memory</div>
          <div className="text-xl font-bold text-purple-400">{memory}</div>
        </div>
      </div>

      <div>
        <div className="text-sm text-gray-400 mb-2">Exposed Ports:</div>
        <div className="flex flex-wrap gap-2">
          {ports.map((port, index) => (
            <span key={index} className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs font-mono">
              {port}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};