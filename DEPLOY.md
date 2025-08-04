# 部署指南 🚀

本指南将帮助您将 OHMNANON CP 应援站部署到各种平台。

## 📋 部署前准备

1. **检查文件完整性**

   ```
   OHMNANON-CP-Site/
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── config.js
   ├── README.md
   └── DEPLOY.md
   ```

2. **自定义配置**
   - 编辑 `config.js` 文件
   - 更新个人信息和链接
   - 替换占位图片为真实图片

## 🌐 免费托管平台

### 1. GitHub Pages

**步骤：**

1. 在 GitHub 创建新仓库
2. 上传所有文件到仓库
3. 进入仓库设置 → Pages
4. 选择分支（通常是 main）
5. 保存设置

**优点：**

- 完全免费
- 自动 HTTPS
- 自定义域名支持
- 版本控制

**访问地址：** `https://你的用户名.github.io/仓库名`

### 2. Netlify

**步骤：**

1. 注册 Netlify 账号
2. 点击"New site from Git"
3. 连接 GitHub 仓库
4. 选择仓库和分支
5. 部署设置保持默认
6. 点击"Deploy site"

**优点：**

- 免费计划功能丰富
- 自动部署
- 自定义域名
- CDN 加速

### 3. Vercel

**步骤：**

1. 注册 Vercel 账号
2. 点击"New Project"
3. 导入 GitHub 仓库
4. 选择框架（选择 Other）
5. 点击"Deploy"

**优点：**

- 极速部署
- 自动 HTTPS
- 全球 CDN
- 预览部署

### 4. Surge.sh

**步骤：**

1. 安装 Surge：`npm install --global surge`
2. 在项目目录运行：`surge`
3. 按提示设置域名

**优点：**

- 命令行部署
- 简单快速
- 免费 SSL 证书

## 💰 付费托管平台

### 1. 阿里云 OSS

**步骤：**

1. 购买 OSS 存储空间
2. 上传所有文件
3. 设置静态网站托管
4. 配置自定义域名

**优点：**

- 国内访问速度快
- 稳定可靠
- 支持 CDN

### 2. 腾讯云 COS

**步骤：**

1. 创建 COS 存储桶
2. 上传文件
3. 开启静态网站功能
4. 绑定自定义域名

**优点：**

- 国内优化
- 价格实惠
- 功能丰富

## 🔧 自定义域名设置

### 1. 购买域名

推荐域名注册商：

- 阿里云万网
- 腾讯云
- GoDaddy
- Namecheap

### 2. 域名解析

- 添加 CNAME 记录
- 指向托管平台提供的地址
- 等待解析生效（通常几分钟到几小时）

### 3. 平台配置

在托管平台设置中添加自定义域名并验证所有权。

## 📱 移动端优化

### 1. 测试响应式

- 使用浏览器开发者工具
- 测试不同屏幕尺寸
- 检查触摸交互

### 2. PWA 支持（可选）

添加 `manifest.json` 和 Service Worker 实现 PWA 功能。

## 🔍 SEO 优化

### 1. 元标签

确保 `index.html` 中的 meta 标签完整：

```html
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta name="author" content="..." />
```

### 2. 图片优化

- 使用 WebP 格式
- 添加 alt 属性
- 压缩图片大小

### 3. 结构化数据

添加 JSON-LD 结构化数据帮助搜索引擎理解内容。

## 📊 性能优化

### 1. 图片懒加载

```javascript
// 在script.js中添加
const images = document.querySelectorAll("img[data-src]");
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      observer.unobserve(img);
    }
  });
});

images.forEach((img) => imageObserver.observe(img));
```

### 2. 代码压缩

使用工具压缩 CSS 和 JavaScript 文件：

- CSS: `cssnano`
- JS: `terser`

### 3. 缓存策略

设置适当的缓存头：

```
Cache-Control: public, max-age=31536000
```

## 🔒 安全设置

### 1. HTTPS

确保托管平台提供 HTTPS 支持。

### 2. 内容安全策略

添加 CSP 头：

```
Content-Security-Policy: default-src 'self'
```

### 3. 防止点击劫持

```html
<meta http-equiv="X-Frame-Options" content="DENY" />
```

## 📈 监控和分析

### 1. Google Analytics

添加 GA4 跟踪代码：

```html
<!-- Google tag (gtag.js) -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

### 2. 性能监控

- 使用 Lighthouse 进行性能测试
- 监控 Core Web Vitals
- 设置性能预算

## 🚨 常见问题

### Q: 部署后图片不显示

**A:** 检查图片路径是否正确，确保使用相对路径。

### Q: 移动端显示异常

**A:** 检查 CSS 媒体查询，确保响应式设计正确。

### Q: 域名解析不生效

**A:** 等待 DNS 传播（最多 48 小时），检查解析记录是否正确。

### Q: HTTPS 证书问题

**A:** 大多数现代托管平台自动提供 SSL 证书，无需手动配置。

## 📞 技术支持

如果遇到部署问题，可以：

1. 查看托管平台的官方文档
2. 在 GitHub Issues 中提问
3. 联系技术支持

---

**祝您部署顺利！💕**
