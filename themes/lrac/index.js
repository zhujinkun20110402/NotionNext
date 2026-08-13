'use client'

import Comment from '@/components/Comment'
import NotionPage from '@/components/NotionPage'
import ShareBar from '@/components/ShareBar'
import replaceSearchResult from '@/components/Mark'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isBrowser } from '@/lib/utils'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import SmartLink from '@/components/SmartLink'
import CONFIG from './config'
import { Style } from './style'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeHero from './components/HomeHero'
import { BlogListPage } from './components/BlogListPage'
import { BlogListScroll } from './components/BlogListScroll'
import PostMeta from './components/PostMeta'
import { PostLock } from './components/PostLock'
import SideBar from './components/SideBar'
import SearchInput from './components/SearchInput'
import MobileDock from './components/MobileDock'
import ArticleAround from './components/ArticleAround'
import RecommendPosts from './components/RecommendPosts'
import Pagination from './components/Pagination'
import Toc from './components/Toc'

const SectionTitle = ({ eyebrow, title, description, action }) => (
  <div className='lrac-section-title'>
    <div>
      {eyebrow && <p>{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <span>{description}</span>}
    </div>
    {action}
  </div>
)

const LayoutBase = props => {
  const { children, slotTop, post } = props
  const { fullWidth } = useGlobal()
  const showRail = Boolean(post) && !fullWidth

  return (
    <div id='theme-lrac' className={`${siteConfig('FONT_STYLE')} lrac-shell`}>
      <Style />
      <div className='lrac-atmosphere' aria-hidden='true'><span /><span /><span /></div>
      <Header {...props} />

      <main className={`lrac-main ${showRail ? 'has-reading-rail' : ''}`}>
        <div className='lrac-main-frame'>
          <div className='lrac-main-content'>
            {slotTop}
            {children}
          </div>
          {showRail && <SideBar {...props} />}
        </div>
      </main>

      <Footer {...props} />
      {siteConfig('LRAC_SHOW_MOBILE_DOCK', true, CONFIG) && <MobileDock />}
      <button
        className='lrac-back-top'
        type='button'
        aria-label='返回顶部'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
    </div>
  )
}

const TopicAtlas = ({ categoryOptions = [], tagOptions = [] }) => {
  if (!categoryOptions?.length && !tagOptions?.length) return null
  return (
    <section className='lrac-topic-atlas'>
      <div className='lrac-topic-atlas-head'>
        <p>INDEX OF INTERESTS</p>
        <h2>兴趣不是目录，<br />更像一张不断长大的地图。</h2>
      </div>
      <div className='lrac-topic-atlas-body'>
        <div className='lrac-category-chips'>
          {categoryOptions.slice(0, 7).map((item, index) => (
            <SmartLink key={item.name} href={`/category/${encodeURIComponent(item.name)}`}>
              <small>{String(index + 1).padStart(2, '0')}</small>
              <strong>{item.name}</strong>
              <span>{item.count || 0}</span>
            </SmartLink>
          ))}
        </div>
        <div className='lrac-tag-river'>
          {tagOptions.slice(0, 16).map(tag => (
            <SmartLink key={tag.name} href={`/tag/${encodeURIComponent(tag.name)}`}>#{tag.name}</SmartLink>
          ))}
        </div>
      </div>
    </section>
  )
}

const Manifesto = ({ notice }) => (
  <section className='lrac-manifesto'>
    <div className='lrac-manifesto-number'>03</div>
    <div className='lrac-manifesto-copy'>
      <p>ABOUT THIS PLACE</p>
      <h2>不是内容农场。<br />是一个人的长期手稿。</h2>
      <p>{siteConfig('LRAC_MANIFESTO', CONFIG.LRAC_MANIFESTO, CONFIG)}</p>
      <div className='lrac-manifesto-links'>
        <SmartLink href='/archive'>从第一篇开始翻 ↗</SmartLink>
        <SmartLink href='/rss/feed.xml'>订阅 RSS ↗</SmartLink>
      </div>
    </div>
    <div className='lrac-manifesto-card'>
      <small>{notice?.title ? 'NOTICE' : 'CURRENT MODE'}</small>
      <strong>{notice?.title || '慢一点，写清楚。'}</strong>
      <p>{notice?.summary || '不追热点，不凑数量。把注意力留给真正想保存的东西。'}</p>
      <span>L—RAC / 小浣熊</span>
    </div>
  </section>
)

const LayoutIndex = props => {
  const { posts = [], categoryOptions = [], tagOptions = [], notice } = props
  return (
    <>
      <HomeHero {...props} />

      <section id='notes' className='lrac-section lrac-home-notes'>
        <SectionTitle
          eyebrow='01 / RECENT FIELD NOTES'
          title='最近写下的东西'
          description='技术、设计、生活与一些尚未归类的念头。'
          action={<SmartLink href='/archive' className='lrac-inline-link'>全部文章 <span>↗</span></SmartLink>}
        />
        <PostListContent {...props} posts={posts} home />
      </section>

      <section className='lrac-section'>
        <div className='lrac-section-rule'><span>02</span><i /><strong>TOPICS & TAGS</strong></div>
        <TopicAtlas categoryOptions={categoryOptions} tagOptions={tagOptions} />
      </section>

      <section className='lrac-section'>
        <Manifesto notice={notice} />
      </section>
    </>
  )
}

const PageIntro = ({ eyebrow, title, description, marker }) => (
  <header className='lrac-page-intro'>
    <div>
      <p>{eyebrow}</p>
      <h1>{title}</h1>
      {description && <span>{description}</span>}
    </div>
    <strong aria-hidden='true'>{marker || 'LR'}</strong>
  </header>
)

const PostListContent = props => {
  const { posts, category, tag, keyword, postCount, page, NOTION_CONFIG, home = false } = props
  return (
    <>
      {siteConfig('POST_LIST_STYLE', 'page', NOTION_CONFIG) === 'scroll'
        ? <BlogListScroll posts={posts} home={home} />
        : <BlogListPage posts={posts} home={home} />}
      {!home && <Pagination postCount={postCount} page={page} category={category} tag={tag} keyword={keyword} NOTION_CONFIG={NOTION_CONFIG} />}
    </>
  )
}

const LayoutPostList = props => {
  const { category, tag, keyword, postCount = 0 } = props
  const title = keyword ? `“${keyword}”` : category || (tag ? `#${tag}` : '全部文章')
  const eyebrow = keyword ? 'SEARCH RESULT' : category ? 'CATEGORY' : tag ? 'TAG' : 'ALL FIELD NOTES'
  const description = `${postCount || props.posts?.length || 0} 篇公开记录，按时间排列。`
  return (
    <section className='lrac-section lrac-list-page'>
      <PageIntro eyebrow={eyebrow} title={title} description={description} marker={category ? 'C' : tag ? '#' : keyword ? '⌕' : 'A'} />
      <PostListContent {...props} />
    </section>
  )
}

const LayoutSearch = props => {
  const router = useRouter()
  const keyword = props.keyword || router.query?.keyword || router.query?.s || ''

  useEffect(() => {
    if (isBrowser && keyword) {
      replaceSearchResult({
        doms: document.getElementById('posts-wrapper'),
        search: keyword,
        target: { element: 'mark', className: 'lrac-search-mark' }
      })
    }
  }, [keyword])

  const searchProps = { ...props, keyword, postCount: props.postCount ?? props.posts?.length ?? 0 }
  return (
    <section className='lrac-section lrac-search-page'>
      <PageIntro eyebrow='SEARCH / ARCHIVE' title='在小浣熊的书房里找一找。' description='标题、摘要、分类和标签都可以搜。' marker='⌕' />
      <SearchInput keyword={keyword} />
      {keyword ? (
        <div className='lrac-search-results'>
          <SectionTitle eyebrow='RESULTS' title={`关于 “${keyword}”`} description={`共 ${searchProps.postCount} 条结果`} />
          <PostListContent {...searchProps} />
        </div>
      ) : (
        <div className='lrac-search-suggestions'>
          <small>OR BROWSE BY</small>
          <SmartLink href='/category'>分类 / Categories ↗</SmartLink>
          <SmartLink href='/tag'>标签 / Tags ↗</SmartLink>
          <SmartLink href='/archive'>时间 / Archive ↗</SmartLink>
        </div>
      )}
    </section>
  )
}

const LayoutArchive = ({ archivePosts = {} }) => {
  const groups = Object.entries(archivePosts)
  const total = groups.reduce((sum, [, list]) => sum + (list?.length || 0), 0)
  return (
    <section className='lrac-section'>
      <PageIntro eyebrow='ARCHIVE / BY TIME' title='时间归档' description={`${total} 篇文章。往回翻，就是这个博客长出来的过程。`} marker='A' />
      <div className='lrac-archive'>
        {groups.map(([month, entries]) => (
          <section key={month} className='lrac-archive-group' id={month}>
            <div className='lrac-archive-month'><strong>{month}</strong><span>{entries.length} NOTES</span></div>
            <div className='lrac-archive-list'>
              {entries.map((post, index) => (
                <SmartLink key={post.id || post.slug} href={post.href || `/${post.slug}`}>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                  <time>{post.publishDay || post.lastEditedDay || month}</time>
                  <strong>{post.title}</strong>
                  <span>{Array.isArray(post.category) ? post.category[0] : post.category || '文章'}</span>
                  <em>↗</em>
                </SmartLink>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

const LayoutCategoryIndex = ({ categoryOptions = [] }) => (
  <section className='lrac-section'>
    <PageIntro eyebrow='CATEGORIES / DRAWERS' title='文章分类' description='把长期关注的方向，放进几个有名字的抽屉。' marker='C' />
    <div className='lrac-taxonomy-grid'>
      {categoryOptions.map((item, index) => (
        <SmartLink key={item.name} href={`/category/${encodeURIComponent(item.name)}`} className='lrac-taxonomy-card'>
          <small>{String(index + 1).padStart(2, '0')}</small>
          <strong>{item.name}</strong>
          <span>{item.count || 0} NOTES</span>
          <em>↗</em>
        </SmartLink>
      ))}
    </div>
  </section>
)

const LayoutTagIndex = ({ tagOptions = [] }) => (
  <section className='lrac-section'>
    <PageIntro eyebrow='TAGS / LOOSE THREADS' title='标签索引' description='比分类更自由，也更像思路之间留下的线头。' marker='#' />
    <div className='lrac-tag-index'>
      {tagOptions.map((tag, index) => (
        <SmartLink key={tag.name} href={`/tag/${encodeURIComponent(tag.name)}`}>
          <small>{String(index + 1).padStart(2, '0')}</small>
          <strong>#{tag.name}</strong>
          <span>{tag.count || 0}</span>
        </SmartLink>
      ))}
    </div>
  </section>
)

const LayoutSlug = props => {
  const { post, lock, validPassword, prev, next, recommendPosts = [] } = props
  const router = useRouter()
  const waiting404 = Number(siteConfig('POST_WAITING_TIME_FOR_404', 4)) * 1000

  useEffect(() => {
    if (!post) {
      const timer = setTimeout(() => {
        if (isBrowser && !document.querySelector('#article-wrapper #notion-article')) {
          router.push('/404').catch(() => {})
        }
      }, waiting404)
      return () => clearTimeout(timer)
    }
  }, [post, router, waiting404])

  if (lock) return <PostLock validPassword={validPassword} />
  if (!post) return null

  return (
    <article className='lrac-article'>
      <PostMeta post={post} />

      {post.toc?.length > 1 && (
        <details className='lrac-mobile-toc'>
          <summary><span>文章目录</span><small>展开 / 收起</small></summary>
          <Toc toc={post.toc} mobile />
        </details>
      )}

      <div id='article-wrapper' className='lrac-notion-wrap'>
        <NotionPage post={post} />
      </div>

      <div className='lrac-after-article'>
        <div className='lrac-end-note'>
          <span>END / FIN</span>
          <strong>读到这里啦。</strong>
          <p>谢谢你把注意力留给这些文字。小浣熊在下一页等你。</p>
        </div>
        <div className='lrac-share-shell'><ShareBar post={post} /></div>
        {post.type === 'Post' && <ArticleAround prev={prev} next={next} />}
        {post.type === 'Post' && <RecommendPosts posts={recommendPosts} />}
        <section className='lrac-comments'>
          <SectionTitle eyebrow='COMMENTS / 留言' title='聊两句' description='欢迎留下想法，也可以只是打个招呼。' />
          <Comment frontMatter={post} />
        </section>
      </div>
    </article>
  )
}

const Layout404 = () => (
  <section className='lrac-not-found'>
    <div className='lrac-not-found-code'><span>4</span><img src='/lrac/raccoon-reference.jpg' alt='' /><span>4</span></div>
    <p>PAGE NOT FOUND / LOST IN THE WOODS</p>
    <h1>这页不在现在这条林间小路上。</h1>
    <span>链接可能移动、删除，或者只是拐去了别的地方。</span>
    <div>
      <SmartLink href='/' className='lrac-button lrac-button-primary'>回到首页</SmartLink>
      <SmartLink href='/search' className='lrac-button lrac-button-ghost'>搜索文章 ↗</SmartLink>
    </div>
  </section>
)

export {
  CONFIG as THEME_CONFIG,
  LayoutBase,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutArchive,
  LayoutTagIndex,
  LayoutCategoryIndex,
  LayoutSlug,
  Layout404
}
