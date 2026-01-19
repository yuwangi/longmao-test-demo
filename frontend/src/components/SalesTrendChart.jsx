import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '../hooks/useTheme';
import { getSalesTrendData } from '../utils/mockData';

const SalesTrendChart = () => {
  const { theme } = useTheme();
  const chartRef = useRef(null);
  const data = getSalesTrendData();

  const getOption = () => {
    const isDark = theme === 'dark';
    
    return {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: isDark ? '#374151' : '#6366f1'
          }
        },
        backgroundColor: isDark ? '#1f2937' : '#ffffff',
        borderColor: isDark ? '#374151' : '#e5e7eb',
        textStyle: {
          color: isDark ? '#f3f4f6' : '#111827'
        }
      },
      legend: {
        data: ['销售额', '订单数'],
        top: 10,
        textStyle: {
          color: isDark ? '#d1d5db' : '#374151'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.months,
        axisLine: {
          lineStyle: {
            color: isDark ? '#4b5563' : '#d1d5db'
          }
        },
        axisLabel: {
          color: isDark ? '#9ca3af' : '#6b7280'
        }
      },
      yAxis: [
        {
          type: 'value',
          name: '销售额 (元)',
          position: 'left',
          axisLine: {
            lineStyle: {
              color: isDark ? '#4b5563' : '#d1d5db'
            }
          },
          axisLabel: {
            color: isDark ? '#9ca3af' : '#6b7280',
            formatter: '{value}'
          },
          splitLine: {
            lineStyle: {
              color: isDark ? '#374151' : '#f3f4f6'
            }
          }
        },
        {
          type: 'value',
          name: '订单数',
          position: 'right',
          axisLine: {
            lineStyle: {
              color: isDark ? '#4b5563' : '#d1d5db'
            }
          },
          axisLabel: {
            color: isDark ? '#9ca3af' : '#6b7280'
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '销售额',
          type: 'line',
          smooth: true,
          yAxisIndex: 0,
          data: data.sales,
          itemStyle: {
            color: '#3b82f6'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(59, 130, 246, 0.3)' },
                { offset: 1, color: 'rgba(59, 130, 246, 0.05)' }
              ]
            }
          }
        },
        {
          name: '订单数',
          type: 'line',
          smooth: true,
          yAxisIndex: 1,
          data: data.orders,
          itemStyle: {
            color: '#8b5cf6'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(139, 92, 246, 0.3)' },
                { offset: 1, color: 'rgba(139, 92, 246, 0.05)' }
              ]
            }
          }
        }
      ]
    };
  };

  return (
    <div className="glass-effect rounded-xl border border-gray-200 dark:border-gray-700 p-6 animate-fade-in">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        销售趋势分析
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

export default SalesTrendChart;
