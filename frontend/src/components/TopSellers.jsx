import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { getTopSellers } from '../utils/mockData';

const TopSellers = () => {
  const sellers = getTopSellers();

  return (
    <div className="glass-effect rounded-xl border border-gray-200 dark:border-gray-700 p-6 animate-fade-in">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        销售人员业绩排行
      </h3>
      
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">排名</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">姓名</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">销售额</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">订单数</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">增长率</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, index) => (
              <tr
                key={seller.id}
                className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <td className="py-3 px-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === 0
                      ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white'
                      : index === 1
                      ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-700'
                      : index === 2
                      ? 'bg-gradient-to-br from-orange-300 to-orange-400 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                </td>
                <td className="py-3 px-4 font-medium text-gray-900 dark:text-gray-100">
                  {seller.name}
                </td>
                <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">
                  ¥{seller.sales.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">
                  {seller.orders.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-right">
                  <div className="flex items-center justify-end space-x-1">
                    {seller.growth > 0 ? (
                      <TrendingUp className="text-green-500" size={16} />
                    ) : (
                      <TrendingDown className="text-red-500" size={16} />
                    )}
                    <span className={seller.growth > 0 ? 'text-green-500' : 'text-red-500'}>
                      {seller.growth}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellers;
