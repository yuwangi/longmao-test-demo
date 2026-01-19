import React from 'react';
import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import SalesTrendChart from './components/SalesTrendChart';
import CategoryChart from './components/CategoryChart';
import RegionChart from './components/RegionChart';
import TopSellers from './components/TopSellers';
import { getKeyMetrics } from './utils/mockData';

function App() {
  const metrics = getKeyMetrics();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="总销售额"
            value={`¥${(metrics.totalSales / 10000).toFixed(1)}万`}
            subtitle="本年度累计"
            icon={DollarSign}
            gradient="from-blue-500 to-blue-600"
            growth={metrics.salesGrowth}
          />
          <MetricCard
            title="订单总数"
            value={metrics.totalOrders.toLocaleString()}
            subtitle="本年度累计"
            icon={ShoppingCart}
            gradient="from-purple-500 to-purple-600"
            growth={metrics.ordersGrowth}
          />
          <MetricCard
            title="客户总数"
            value={metrics.totalCustomers.toLocaleString()}
            subtitle="活跃客户"
            icon={Users}
            gradient="from-pink-500 to-pink-600"
            growth={metrics.customersGrowth}
          />
          <MetricCard
            title="转化率"
            value={`${metrics.conversionRate}%`}
            subtitle="平均转化率"
            icon={TrendingUp}
            gradient="from-orange-500 to-orange-600"
            growth={metrics.conversionGrowth}
          />
        </div>

        {/* Sales Trend Chart */}
        <div className="mb-8">
          <SalesTrendChart />
        </div>

        {/* Category and Region Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <CategoryChart />
          <RegionChart />
        </div>

        {/* Top Sellers */}
        <div className="mb-8">
          <TopSellers />
        </div>
      </main>

      {/* Footer */}
      <footer className="glass-effect border-t border-gray-200 dark:border-gray-700 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 销售数据看板 | Powered by React + ECharts + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
