# L-Rac · 小浣熊个人博客

这是为 **L-Rac** 完整重做的一套 Notion 驱动个人博客前端。项目继续使用原有 NotionNext 的数据层、文章 Block 渲染、ISR、RSS、Sitemap、评论与 Vercel 部署链路；旧主题的视觉结构已经全部弃用，前端重新设计。

## 设计方向

站内角色统一称为 **小浣熊**。视觉色阶来自项目内 `public/lrac/raccoon-reference.jpg`：锈红、炭黑、奶油白、树皮棕与偏灰的森林绿。

新的前端不是卡通吉祥物风，也没有动物矢量插画。整体更接近一本带摄影感的独立杂志 / field notes：大字号宋体标题、极细网格、真实照片、纸张留白、克制的色块和不抢正文的微动效。

### 完整页面

- 首页：摄影 Hero、站点统计、最新文章、编辑型文章网格、分类地图、标签流、博客宣言。
- 文章页：大标题、封面、发布时间 / 阅读时间 / 字数、标签、桌面粘性目录、移动端折叠目录、Notion 正文、分享、上一篇 / 下一篇、推荐阅读、评论。
- 归档：按月时间轴。
- 分类：杂志式分类卡。
- 标签：标签索引矩阵。
- 搜索：独立搜索页与搜索结果高亮。
- 密码文章：统一品牌样式。
- 404 / 500 / 通用错误页：已重做。
- 深色 / 浅色模式。
- 移动端底部快捷 Dock、Safe Area、触控尺寸和排版重新适配。
- `prefers-reduced-motion` 动效降级。

## Notion 数据层

没有改动原来的 Notion 数据模型。以下能力继续沿用：

- `Post / Page / Notice / Menu`
- `Published / Invisible`
- slug
- 分类、标签、摘要、日期、封面
- 密码文章
- Notion Block 正文
- ISR / Revalidate
- RSS / Sitemap / SEO
- 评论插件和统计插件

核心配置仍位于：

- `blog.config.js`
- `conf/notion.config.js`
- `conf/post.config.js`
- `conf/comment.config.js`
- `conf/analytics.config.js`

新前端只集中在 `themes/lrac/`，因此之后如果你更新 Notion API 或其他后端逻辑，不需要重写视觉层。

## Vercel 部署

项目可以直接导入 Vercel。

### 最低配置

```bash
NOTION_PAGE_ID=你的Notion页面ID
```

推荐同时配置：

```bash
NEXT_PUBLIC_AUTHOR=L-Rac
NEXT_PUBLIC_BIO=写代码、设计与生活的小浣熊。保持好奇，也保持自己的节奏。
NEXT_PUBLIC_LINK=https://你的正式域名
NEXT_PUBLIC_LANG=zh-CN
NEXT_PUBLIC_APPEARANCE=auto
NEXT_PUBLIC_REVALIDATE_SECOND=60
```

Vercel 使用：

```text
Framework Preset: Next.js
Node.js: 22.x
Build Command: yarn build
```

如果你的原项目已经在 Vercel 配好了 Notion / 评论 / Analytics 环境变量，直接用这套代码替换即可继续使用。

## 本地开发

```bash
cp .env.example .env.local
yarn install
yarn dev
```

访问 `http://localhost:3000`。

## 主题文件

```text
themes/lrac/
├── index.js                 # 全部页面布局
├── style.js                 # 完整视觉系统 + 响应式 + Notion 正文覆盖
├── config.js                # 品牌文案 / 主题开关
└── components/
    ├── BrandMark.js         # 抽象 LR 字标，不使用动物矢量插画
    ├── Header.js
    ├── HomeHero.js
    ├── BlogListPage.js
    ├── PostMeta.js
    ├── SideBar.js
    ├── Toc.js
    ├── SearchInput.js
    ├── Pagination.js
    ├── RecommendPosts.js
    ├── ArticleAround.js
    ├── PostLock.js
    ├── MobileDock.js
    └── Footer.js
```

## 品牌约定

- 昵称：**L-Rac**
- 站内角色称呼：**小浣熊**
- 不使用卡通动物头像作为核心视觉
- 图片色彩只作为自然配色与摄影气质参考

## License

项目继续保留原 NotionNext 的许可信息，详见 `LICENSE`。
