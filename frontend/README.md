# 销售数据看板 (Sales Dashboard)

一个现代化的销售数据可视化看板，支持 Light/Dark 主题切换，提供实时销售数据分析和可视化展示。

## 🎯 项目特性

- ✨ **现代化设计**：采用玻璃态效果和渐变色设计
- 🌓 **主题切换**：支持 Light/Dark 双主题无缝切换
- 📊 **数据可视化**：基于 ECharts 的多种图表展示
- 📱 **响应式布局**：完美适配各种屏幕尺寸
- 🚀 **高性能**：优化的构建配置和懒加载
- 🐳 **Docker 支持**：一键部署到生产环境

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18.3+ | 前端框架 |
| Vite | 6.0+ | 构建工具 |
| Tailwind CSS | 3.4+ | 样式框架 |
| ECharts | 5.5+ | 数据可视化 |
| Lucide React | 0.344+ | 图标库 |
| Nginx | alpine | 生产服务器 |

## 📦 快速开始

### 方式一：Docker 一键启动（推荐）

```bash
# 克隆项目
git clone <repository-url>
cd longmao-test-demo

# 启动服务
docker compose up

# 后台运行
docker compose up -d
```

启动成功后，访问 http://localhost:3000 即可查看看板。

### 方式二：本地开发

```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 📊 功能模块

### 1. 关键指标卡片
- 总销售额统计
- 订单总数统计
- 客户总数统计
- 转化率分析
- 增长率指标

### 2. 销售趋势分析
- 月度销售额趋势
- 订单数量趋势
- 双轴对比展示

### 3. 产品分类分析
- 各类产品销售占比
- 饼图可视化展示

### 4. 地区销售分布
- 各地区销售对比
- 柱状图展示

### 5. 销售人员排行
- 业绩排名
- 增长率对比
- 勋章系统

## 🎨 主题系统

应用支持 Light 和 Dark 两种主题模式：

- **自动检测**：首次访问时根据系统主题偏好自动设置
- **持久化**：主题选择保存在 localStorage
- **无缝切换**：所有组件和图表同步切换主题
- **流畅动画**：平滑的主题过渡效果

## 🐳 Docker 部署说明

### 镜像构建

项目采用多阶段构建策略：

1. **构建阶段**：使用 Node.js 18 Alpine 镜像构建应用
2. **生产阶段**：使用 Nginx Alpine 镜像提供静态文件服务

### 端口映射

- **宿主机端口**：3000
- **容器端口**：80

### 容器管理

```bash
# 查看运行状态
docker compose ps

# 查看日志
docker compose logs -f frontend

# 停止服务
docker compose down

# 重新构建
docker compose build --no-cache

# 重启服务
docker compose restart
```

## 📁 项目结构

```
frontend/
├── public/              # 静态资源
├── src/
│   ├── components/      # React 组件
│   │   ├── Header.jsx           # 顶部导航
│   │   ├── ThemeToggle.jsx      # 主题切换器
│   │   ├── MetricCard.jsx       # 指标卡片
│   │   ├── SalesTrendChart.jsx  # 销售趋势图
│   │   ├── CategoryChart.jsx    # 分类饼图
│   │   ├── RegionChart.jsx      # 地区柱状图
│   │   └── TopSellers.jsx       # 排行榜表格
│   ├── contexts/        # React Context
│   │   └── ThemeContext.jsx     # 主题上下文
│   ├── hooks/           # 自定义 Hooks
│   │   └── useTheme.js          # 主题 Hook
│   ├── utils/           # 工具函数
│   │   └── mockData.js          # 模拟数据
│   ├── App.jsx          # 主应用组件
│   ├── main.jsx         # 入口文件
│   └── index.css        # 全局样式
├── Dockerfile           # Docker 构建文件
├── nginx.conf           # Nginx 配置
├── vite.config.js       # Vite 配置
├── tailwind.config.js   # Tailwind 配置
└── package.json         # 依赖配置
```

## 🔧 配置说明

### Vite 配置

- 开发服务器端口：5173
- 开发服务器主机：0.0.0.0（支持网络访问）
- 构建输出目录：dist
- 代码压缩：terser

### Nginx 配置

- Gzip 压缩已启用
- SPA 路由支持
- 静态资源缓存（1年）
- 安全响应头
- 健康检查端点：/health

## 🎯 性能优化

1. **构建优化**
   - Tree-shaking 自动移除未使用代码
   - 代码分割和懒加载
   - CSS 提取和压缩
   - 图片资源优化

2. **运行时优化**
   - React.memo 防止不必要的重渲染
   - ECharts SVG 渲染模式
   - 自定义滚动条样式
   - Tailwind CSS JIT 模式

3. **网络优化**
   - Nginx Gzip 压缩
   - 静态资源长期缓存
   - HTTP/2 支持

## 🌐 浏览器支持

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90

## 📝 开发指南

### 添加新图表

1. 在 `src/utils/mockData.js` 添加数据生成函数
2. 创建新的图表组件在 `src/components/`
3. 确保支持主题切换（使用 `useTheme` Hook）
4. 在 `App.jsx` 中引入并布局

### 修改主题色

编辑 `tailwind.config.js` 中的颜色配置：

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        light: '#your-color',
        dark: '#your-color',
      },
    },
  },
}
```

### 自定义图表样式

在各图表组件的 `getOption()` 方法中修改 ECharts 配置。

## 📄 许可证

本项目仅用于技术演示和学习目的。

## 👨‍💻 作者

Longmao Test Demo

---

**提示**：如遇到问题，请检查：
1. Docker 是否正常运行
2. 端口 3000 是否被占用
3. Node.js 版本是否 >= 18
4. 网络连接是否正常
