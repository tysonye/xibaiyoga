# 希柏瑜伽 (Xibai Yoga)

一个现代化的瑜伽网站，使用 Next.js + TypeScript + Tailwind CSS 构建，具有响应式设计、流畅动画和优秀的用户体验。

## 项目介绍

希柏瑜伽网站是一个展示瑜伽课程、导师团队、学员评价和会员权益的现代化网站。网站采用响应式设计，适配各种设备屏幕，并通过精心设计的动画和交互效果提升用户体验。

## 技术栈

- **框架**: Next.js 16.1.4
- **语言**: TypeScript
- **样式**: Tailwind CSS 3.4.13
- **动画**: Framer Motion
- **图标**: React Icons
- **轮播**: Swiper
- **部署**: GitHub Pages + GitHub Actions

## 网站功能

### 1. 导航栏
- 响应式设计，支持桌面端和移动端
- 平滑滚动导航
- 移动端汉堡菜单
- 现代化玻璃态效果设计

### 2. 英雄区域
- 全屏背景图片
- 引人注目的标题和副标题
- 行动号召按钮
- 向下滚动箭头
- 流畅的入场动画

### 3. 关于瑜伽
- 瑜伽的起源与发展
- 瑜伽的益处（身体健康、心理健康、心灵成长）
- 希柏瑜伽的理念
- 滚动动画效果

### 4. 照片展示
- 12张瑜伽练习照片网格展示
- 图片懒加载优化
- 平滑的悬停效果

### 5. 视频展示
- 视频嵌入展示瑜伽教程
- 支持B站视频（适合中国大陆访问）

### 6. 课程介绍
- 线下课程卡片展示
- 包含哈他瑜伽、阿斯汤加瑜伽、阴瑜伽、孕妇瑜伽等
- 卡片悬停动画效果

### 7. 在线课程
- 在线课程卡片，包含价格、课时等信息
- 6种不同类型的在线课程
- 现代化卡片设计

### 8. 导师团队
- 导师简介卡片
- 包含导师姓名、头衔、资质证书等
- 平滑的展示动画

### 9. 学员评价
- 学员评价轮播展示
- 动态星级评分
- 自动轮播效果

### 10. 会员权益
- 三种会员计划（基础会员、高级会员、VIP会员）
- 推荐会员标记
- 清晰的权益对比

### 11. 联系我们
- 联系方式信息
- 在线留言表单
- 地图位置展示

### 12. 预约表单
- 在线课程预约功能
- 表单验证和提交反馈

### 13. 滚动动画
- 元素进入视口时的渐入动画
- 平滑的滚动体验

## 项目结构

```
xibaiyoga/
├── components/          # React组件
│   ├── ui/             # UI组件
│   │   ├── Card.tsx    # 卡片组件
│   │   ├── LazyImage.tsx # 图片懒加载组件
│   │   └── MouseGlow.tsx # 鼠标光晕效果组件
│   ├── About.tsx       # 关于瑜伽
│   ├── BookingForm.tsx # 预约表单
│   ├── Contact.tsx     # 联系我们
│   ├── Courses.tsx     # 课程介绍
│   ├── Gallery.tsx     # 照片展示
│   ├── Hero.tsx        # 英雄区域
│   ├── Membership.tsx  # 会员权益
│   ├── Navbar.tsx      # 导航栏
│   ├── OnlineCourses.tsx # 在线课程
│   ├── ScrollReveal.tsx # 滚动动画组件
│   ├── Teachers.tsx    # 导师团队
│   ├── Testimonials.tsx # 学员评价
│   └── Videos.tsx      # 视频展示
├── data/               # 网站数据
│   └── siteData.ts     # 所有网站内容数据（TypeScript接口定义）
├── public/             # 静态资源
│   └── CNAME           # 自定义域名配置
├── src/                # 源代码
│   ├── app/            # App Router
│   │   ├── globals.css # 全局样式
│   │   ├── layout.tsx  # 布局组件
│   │   └── page.tsx    # 主页面
│   └── types/          # 类型定义
├── .github/            # GitHub配置
│   └── workflows/      # GitHub Actions工作流
│       └── deploy.yml  # 自动部署配置
├── next.config.ts      # Next.js配置
├── tailwind.config.js  # Tailwind CSS配置
├── postcss.config.js   # PostCSS配置
├── tsconfig.json       # TypeScript配置
└── package.json        # 项目依赖
```

## 开发命令

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问：http://localhost:3000

### 构建静态文件

```bash
npm run build
```

静态文件将生成在 `out/` 目录（Next.js自动处理）

### 预览构建结果

```bash
npm run start
```

### 代码检查

```bash
npm run lint
```

## 部署说明

### GitHub Pages自动部署

本项目使用GitHub Actions实现自动部署，配置如下：

1. 在GitHub仓库中启用GitHub Pages
2. 配置`public/CNAME`文件，包含自定义域名：
   ```
   xibai.xin
   www.xibai.xin
   ```
3. 配置GitHub Actions工作流（`.github/workflows/deploy.yml`），实现：
   - 代码推送时自动构建
   - 静态文件生成到`out/`目录
   - 自动部署到GitHub Pages
   - 支持自定义域名和HTTPS

### 手动部署

如果需要手动部署，可以执行以下命令：

```bash
npm run build
git add .
git commit -m "构建静态文件"
git push origin main
```

## 内容管理

所有网站内容都集中在 `data/siteData.ts` 文件中，使用TypeScript接口定义，便于维护和扩展。您可以直接修改该文件来更新网站内容：

- **GalleryImage**: 照片展示数据
- **Video**: 视频展示数据
- **Course**: 线下课程数据
- **OnlineCourse**: 在线课程数据
- **Teacher**: 导师团队数据
- **Testimonial**: 学员评价数据
- **Membership**: 会员权益数据

## 自定义样式

网站使用 Tailwind CSS 进行样式设计，主题色配置如下：

- **primary**: #2D5A3D（主色调，深绿色）
- **secondary**: #4A7C5F（辅助色，中绿色）
- **accent**: #E8B4A6（强调色，淡粉色）
- **dark**: #1A2F23（深色，深绿色）
- **light**: #F5F8F6（浅色，浅绿色）

您可以通过以下方式自定义样式：

1. 修改 `tailwind.config.js` 配置主题颜色、字体等
2. 在组件中使用 Tailwind CSS 类名
3. 修改 `src/app/globals.css` 添加自定义样式

## 网站优化

本网站已经按照 `1.txt` 文件中的优化建议进行了全面优化：

### 视觉重构
- 建立统一的色彩系统
- 优化Hero区域设计
- 实现玻璃态卡片效果
- 优化字体层次和排版

### 交互增强
- 添加鼠标光晕效果
- 实现图片懒加载
- 优化学员评价轮播
- 添加滚动动画效果

### 功能扩展
- 实现在线预约系统
- 优化课程筛选功能
- 增强会员权益对比
- 优化联系表单

### 技术与性能优化
- 配置图片优化
- 添加SEO元数据
- 实现结构化数据
- 添加性能监控

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

## 联系方式

如有问题，请联系：
- 邮箱：info@xibaiyoga.com
- 电话：010-12345678
- 地址：北京市朝阳区建国路88号

## 访问地址

- 官方网站：https://xibai.xin
- GitHub仓库：https://github.com/tysonye/xibaiyoga.github.io

