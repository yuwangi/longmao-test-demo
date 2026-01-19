import React from 'react';

const MetricCard = ({ title, value, subtitle, icon: Icon, gradient, growth }) => {
  const isPositive = growth >= 0;
  
  return (
    <div className="relative overflow-hidden rounded-xl glass-effect border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`}></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${gradient}`}>
            <Icon className="text-white" size={24} />
          </div>
          {growth !== undefined && (
            <div className={`text-sm font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? '+' : ''}{growth}%
            </div>
          )}
        </div>
        
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{value}</p>
          {subtitle && (
            <p className="text-xs text-gray-500 dark:text-gray-500">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
