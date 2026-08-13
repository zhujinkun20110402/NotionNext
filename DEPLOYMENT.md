# 部署检查清单

## 必须

- Vercel 环境变量存在 `NOTION_PAGE_ID`。
- 对应 Notion 页面/数据库已经允许公开访问，或你的现有 NotionNext API 方式可正常读取。
- 构建命令使用 `yarn build`。
- Node.js 22。

## 建议

- 配置 `NEXT_PUBLIC_LINK` 为正式域名；未配置时，Vercel Production URL 会作为服务端默认站点地址。
- 配置评论系统（Giscus / Waline / Twikoo 等）中的任意一种。
- 开启 Vercel Analytics 时设置 `NEXT_PUBLIC_ANALYTICS_VERCEL=true`。
- 自定义域名后重新部署一次，确保 Sitemap/RSS/SEO 使用最终域名。

## Notion 更新延迟

默认 ISR 缓存为 60 秒，可通过：

```bash
NEXT_PUBLIC_REVALIDATE_SECOND=60
```

调整。原项目的按需 Revalidation API 仍保留。
