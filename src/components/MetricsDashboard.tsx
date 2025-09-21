import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, trend, color }) => {
  const trendIcons = {
    up: '↗️',
    down: '↘️',
    stable: '→'
  };

  const trendColors = {
    up: 'text-green-400',
    down: 'text-red-400',
    stable: 'text-gray-400'
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>
        <span className={`text-2xl ${trendColors[trend]}`}>{trendIcons[trend]}</span>
      </div>
      <div className={`text-3xl font-bold ${color} mb-2`}>{value}</div>
      <div className={`text-sm ${trendColors[trend]}`}>{change} from last hour</div>
    </div>
  );
};

export const MetricsDashboard: React.FC = () => {
  const metrics = [
    { title: 'Total Requests', value: '2.4M', change: '+12%', trend: 'up' as const, color: 'text-blue-400' },
    { title: 'Avg Response Time', value: '45ms', change: '-8%', trend: 'down' as const, color: 'text-green-400' },
    { title: 'Error Rate', value: '0.02%', change: '+0.01%', trend: 'up' as const, color: 'text-red-400' },
    { title: 'Active Services', value: '12', change: 'No change', trend: 'stable' as const, color: 'text-purple-400' },
    { title: 'CPU Usage', value: '68%', change: '+5%', trend: 'up' as const, color: 'text-yellow-400' },
    { title: 'Memory Usage', value: '4.2GB', change: '+200MB', trend: 'up' as const, color: 'text-orange-400' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">System Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};