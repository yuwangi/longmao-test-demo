import React, { useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '../hooks/useTheme';
import { getRegionData } from '../utils/mockData';

const RegionChart = () => {
  const { theme } = useTheme();
  const chartRef = useRef(null);
  const data = getRegionData();

  const getOption = () => {
    const isDark = theme === 'dark';
    
    return {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        backgroundColor: isDark ? '#1f2937' : '#ffffff',
        borderColor: isDark ? '#374151' : '#e5e7eb',
        textStyle: {
          color: isDark ? '#f3f4f6' : '#111827'
        },
        formatter: '{b}: ¥{c}'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: data.regions,
        axisLine: {
          lineStyle: {
            color: isDark ? '#4b5563' : '#d1d5db'
          }
        },
        axisLabel: {
          color: isDark ? '#9ca3af' : '#6b7280'
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: isDark ? '#4b5563' : '#d1d5db'
          }
        },
        axisLabel: {
          color: isDark ? '#9ca3af' : '#6b7280'
        },
        splitLine: {
          lineStyle: {
            color: isDark ? '#374151' : '#f3f4f6'
          }
        }
      },
      series: [
        {
          name: '销售额',
          type: 'bar',
          data: data.sales,
          itemStyle: {
            borderRadius: [8, 8, 0, 0],
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: '#3b82f6' },
                { offset: 1, color: '#8b5cf6' }
              ]
            }
          },
          barWidth: '50%',
          label: {
            show: true,
            position: 'top',
            color: isDark ? '#d1d5db' : '#374151',
            formatter: '{c}'
          }
        }
      ]
    };
  };

  return (
    <div className="glass-effect rounded-xl border border-gray-200 dark:border-gray-700 p-6 animate-fade-in">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        地区销售分布
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

export default RegionChart;
