// 生成模拟销售数据

// 月度销售趋势数据
export const getSalesTrendData = () => {
  const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const sales = [152000, 168000, 195000, 210000, 198000, 225000, 242000, 238000, 265000, 282000, 298000, 315000];
  const orders = [450, 520, 580, 630, 590, 680, 720, 710, 780, 850, 890, 950];
  
  return {
    months,
    sales,
    orders,
  };
};

// 产品分类销售占比
export const getCategoryData = () => {
  return [
    { name: '电子产品', value: 385000 },
    { name: '服装鞋帽', value: 268000 },
    { name: '食品饮料', value: 195000 },
    { name: '家居用品', value: 142000 },
    { name: '图书文具', value: 98000 },
    { name: '其他', value: 52000 },
  ];
};

// 地区销售分布
export const getRegionData = () => {
  return {
    regions: ['华东', '华北', '华南', '西南', '西北', '东北'],
    sales: [458000, 392000, 365000, 218000, 156000, 125000],
  };
};

// 销售人员业绩排名
export const getTopSellers = () => {
  return [
    { id: 1, name: '张三', sales: 485000, orders: 1250, growth: 15.8 },
    { id: 2, name: '李四', sales: 468000, orders: 1180, growth: 12.3 },
    { id: 3, name: '王五', sales: 442000, orders: 1120, growth: 18.5 },
    { id: 4, name: '赵六', sales: 398000, orders: 980, growth: 8.2 },
    { id: 5, name: '孙七', sales: 365000, orders: 890, growth: 10.6 },
  ];
};

// 关键指标数据
export const getKeyMetrics = () => {
  return {
    totalSales: 2840000,
    totalOrders: 8520,
    totalCustomers: 3650,
    conversionRate: 4.8,
    salesGrowth: 14.2,
    ordersGrowth: 11.5,
    customersGrowth: 9.8,
    conversionGrowth: 1.2,
  };
};
