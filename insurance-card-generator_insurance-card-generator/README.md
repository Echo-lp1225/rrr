# 保险知识卡片生成器

纯前端保险产品知识卡片生成工具，支持多种模板一键导出。

## 功能特性

- ✨ 三种专业模板（专业信任风、亲和生活风、数据对比风）
- 🎨 实时预览卡片效果
- 📥 一键导出高清PNG图片
- 🚀 纯前端实现，无需服务器
- 📱 响应式设计，支持移动端

## 快速开始

### 安装依赖

```bash
cd insurance-card-generator
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 技术栈

- **React 18** - UI框架
- **Vite** - 构建工具
- **Fabric.js** - Canvas绘图库

## 项目结构

```
insurance-card-generator/
├── public/                 # 静态资源
├── src/
│   ├── components/         # React组件
│   │   ├── InputForm.jsx  # 输入表单
│   │   └── CardPreview.jsx # 卡片预览
│   ├── templates/          # 模板配置
│   │   └── index.js       # 三种模板实现
│   ├── App.jsx            # 主应用
│   ├── main.jsx           # 入口文件
│   └── index.css          # 全局样式
├── index.html              # HTML模板
├── package.json            # 依赖配置
└── vite.config.js          # Vite配置
```

## 使用说明

1. 选择卡片模板风格
2. 填写产品信息（产品名称、核心卖点、目标人群等）
3. 点击"生成卡片"按钮
4. 预览效果，满意后点击"下载卡片"

## 后续优化方向

- [ ] 接入真实AI API生成文案
- [ ] 支持自定义配色和字体
- [ ] 增加更多模板风格
- [ ] 支持批量生成
- [ ] 添加品牌Logo上传功能

## License

MIT
