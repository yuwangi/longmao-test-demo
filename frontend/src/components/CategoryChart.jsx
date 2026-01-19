import React, { useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '../hooks/useTheme';
import { getCategoryData } from '../utils/mockData';

const CategoryChart = () => {
  const { theme } = useTheme();
  const chartRef = useRef(null);
  const data = getCategoryData();

  const getOption = () => {
    const isDark = theme === 'dark';
    
    return {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        formatter: '{b}: ¥{c} ({d}%)',
        backgroundColor: isDark ? '#1f2937' : '#ffffff',
        borderColor: isDark ? '#374151' : '#e5e7eb',
        textStyle: {
          color: isDark ? '#f3f4f6' : '#111827'
        }
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 'center',
        textStyle: {
          color: isDark ? '#d1d5db' : '#374151'
        }
      },
      series: [
        {
          name: '销售额',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['40%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: isDark ? '#1f2937' : '#ffffff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
              color: isDark ? '#f3f4f6' : '#111827'
            }
          },
          labelLine: {
            show: false
          },
          data: data,
          color: [
            '#3b82f6', // Blue
            '#8b5cf6', // Purple
            '#ec4899', // Pink
            '#f59e0b', // Amber
            '#10b981', // Green
            '#6366f1'  // Indigo
          ]
        }
      ]
    };
  };

  return (
    <div className="glass-effect rounded-xl border border-gray-200 dark:border-gray-700 p-6 animate-fade-in">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        产品分类销售占比
      </h3>
      <ReactECharts
        ref={chartRef}
        option={getOption()}
        style={{ height: '350px' }}
        theme={theme}
        opts={{ renderer: 'svg' }}
      />
    </div>
  );
};

export default CategoryChart;
