import React, { useState, useEffect } from 'react';

interface LogEntry {
  timestamp: string;
  level: 'info' | 'warn' | 'error' | 'debug';
  service: string;
  message: string;
}

export const LogViewer: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    // Simulate real-time logs
    const mockLogs: LogEntry[] = [
      { timestamp: '2024-01-15 14:32:15', level: 'info', service: 'api-gateway', message: 'Request routed to user-service' },
      { timestamp: '2024-01-15 14:32:14', level: 'error', service: 'user-service', message: 'Database connection timeout' },
      { timestamp: '2024-01-15 14:32:13', level: 'warn', service: 'auth-service', message: 'High memory usage detected' },
      { timestamp: '2024-01-15 14:32:12', level: 'info', service: 'payment-service', message: 'Transaction processed successfully' },
      { timestamp: '2024-01-15 14:32:11', level: 'debug', service: 'notification-service', message: 'Email queue processed' },
      { timestamp: '2024-01-15 14:32:10', level: 'info', service: 'api-gateway', message: 'Health check completed' },
    ];
    setLogs(mockLogs);
  }, []);

  const levelColors = {
    info: 'text-blue-400',
    warn: 'text-yellow-400',
    error: 'text-red-400',
    debug: 'text-gray-400'
  };

  const filteredLogs = filter === 'all' ? logs : logs.filter(log => log.level === filter);

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Distributed Logs</h3>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1 text-sm"
        >
          <option value="all">All Levels</option>
          <option value="error">Errors</option>
          <option value="warn">Warnings</option>
          <option value="info">Info</option>
          <option value="debug">Debug</option>
        </select>
      </div>

      <div className="bg-black rounded-lg p-4 h-80 overflow-y-auto font-mono text-sm">
        {filteredLogs.map((log, index) => (
          <div key={index} className="mb-2 hover:bg-gray-800 p-2 rounded">
            <span className="text-gray-500">{log.timestamp}</span>
            <span className={`ml-3 font-bold ${levelColors[log.level]}`}>
              [{log.level.toUpperCase()}]
            </span>
            <span className="ml-3 text-green-400">{log.service}</span>
            <span className="ml-3 text-white">{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};