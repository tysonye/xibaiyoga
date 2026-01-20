# 希柏瑜伽 (Xibai Yoga)

一个现代化的瑜伽网站，使用 Next.js + TypeScript + Tailwind CSS 构建。

## 项目介绍

希柏瑜伽网站是一个展示瑜伽课程、导师团队、学员评价和会员权益的现代化网站。网站采用响应式设计，适配各种设备屏幕。

## 技术栈

- **框架**: Next.js 16.1.4
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **部署**: GitHub Pages

## 网站功能

### 1. 导航栏
- 响应式设计，支持桌面端和移动端
- 平滑滚动导航
- 移动端汉堡菜单

### 2. 英雄区域
- 全屏背景图片
- 引人注目的标题和副标题
- 行动号召按钮
- 向下滚动箭头

### 3. 关于瑜伽
- 瑜伽的起源与发展
- 瑜伽的益处（身体健康、心理健康、心灵成长）
- 希柏瑜伽的理念

### 4. 照片展示
- 12张瑜伽练习照片网格展示

### 5. 视频展示
- YouTube视频嵌入，展示瑜伽教程

### 6. 课程介绍
- 线下课程卡片
- 包含哈他瑜伽、阿斯汤加瑜伽、阴瑜伽、孕妇瑜伽等

### 7. 在线课程
- 在线课程卡片，包含价格、课时等信息
- 6种不同类型的在线课程

### 8. 导师团队
- 导师简介卡片
- 包含导师姓名、头衔、资质证书等

### 9. 学员评价
- 学员评价展示
- 动态星级评分

### 10. 会员权益
- 三种会员计划（基础会员、高级会员、VIP会员）
- 推荐会员标记

### 11. 联系我们
- 联系方式信息
- 在线留言表单

## 项目结构

```
xibaiyoga/
├── components/          # React组件
│   ├── About.tsx        # 关于瑜伽
│   ├── Contact.tsx      # 联系我们
│   ├── Courses.tsx      # 课程介绍
│   ├── Gallery.tsx      # 照片展示
│   ├── Hero.tsx         # 英雄区域
│   ├── Membership.tsx   # 会员权益
│   ├── Navbar.tsx       # 导航栏
│   ├── OnlineCourses.tsx # 在线课程
│   ├── Teachers.tsx     # 导师团队
│   ├── Testimonials.tsx # 学员评价
│   └── Videos.tsx       # 视频展示
├── data/               # 网站数据
│   └── siteData.ts      # 所有网站内容数据
├── public/             # 静态资源
│   └── CNAME           # 自定义域名配置
├── src/                # 源代码
│   └── app/            # App Router
│       ├── layout.tsx  # 布局组件
│       └── page.tsx    # 主页面
├── out/                # 静态导出目录
├── next.config.ts      # Next.js配置
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

静态文件将生成在 `out/` 目录

### 预览构建结果

```bash
npm run start
```

## 部署说明

### GitHub Pages部署

1. 确保已在 `next.config.ts` 中配置了静态导出：
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. 确保 `public/CNAME` 文件包含您的自定义域名：
   ```
   xibai.xin
   www.xibai.xin
   ```

3. 构建并推送代码到GitHub：
   ```bash
   npm run build
   git add .
   git commit -m "构建静态文件"
   git push origin master
   ```

4. 在GitHub仓库设置中配置GitHub Pages：
   - 访问：https://github.com/tysonye/xibaiyoga.github.io/settings/pages
   - 选择 `Deploy from a branch`
   - 分支：`master`，目录：`/out`
   - 保存设置

5. 等待部署完成，访问您的网站：https://xibai.xin

## 内容管理

所有网站内容都集中在 `data/siteData.ts` 文件中，您可以直接修改该文件来更新网站内容：

- **galleryImages**: 照片展示数据
- **videos**: 视频展示数据
- **courses**: 线下课程数据
- **onlineCourses**: 在线课程数据
- **teachers**: 导师团队数据
- **testimonials**: 学员评价数据
- **memberships**: 会员权益数据

## 自定义样式

网站使用 Tailwind CSS 进行样式设计，您可以通过以下方式自定义样式：

1. 修改 `src/app/globals.css` 添加自定义样式
2. 在组件中使用 Tailwind CSS 类名
3. 修改 `tailwind.config.js` 配置主题颜色、字体等

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

