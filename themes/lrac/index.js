'use client'

import Comment from '@/components/Comment'
import NotionPage from '@/components/NotionPage'
import ShareBar from '@/components/ShareBar'
import replaceSearchResult from '@/components/Mark'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isBrowser } from '@/lib/utils'
import { Transition } from '@headlessui/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import SmartLink from '@/components/SmartLink'
import CONFIG from './config'
import { Style } from './style'
import Header from './components/Header'
import TitleBar from './components/TitleBar'
import { BlogListPage } from './components/BlogListPage'
import { BlogListScroll } from './components/BlogListScroll'
import PostMeta from './components/PostMeta'
import { PostLock } from './components/PostLock'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import SearchInput from './components/SearchInput'

const LayoutBase = props => {
  const { children, slotTop, post } = props
  const { onLoading, fullWidth } = useGlobal()

  return (
    <div
      id='theme-lrac'
      className={`${siteConfig('FONT_STYLE')} relative min-h-screen text-white scroll-smooth`}>
      <Style />
      <Header {...props} />
      <main className='mx-auto w-full px-4 pb-16'>
        {!post && <TitleBar {...props} />}
        <div className='mx-auto flex w-full max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-start'>
          <div className={`w-full ${fullWidth ? '' : 'lg:max-w-[70%]'}`}>
            <Transition
              show={!onLoading}
              appear
              enter='transition ease-in-out duration-700 transform order-first'
              enterFrom='opacity-0 translate-y-12'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 -translate-y-12'
              unmount={false}>
              {slotTop}
              {children}
            </Transition>
          </div>
          {!fullWidth && (
            <aside className='hidden lg:block lg:w-[30%]'>
              <SideBar {...props} />
            </aside>
          )}
        </div>
      </main>
      <Footer {...props} />
      <div className='fixed right-4 bottom-4 z-40'>
        <button
          aria-label='Back to top'
          className='lrac-action-button'
          type='button'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      </div>
    </div>
  )
}

const LayoutIndex = props => {
  return <LayoutPostList {...props} />
}

const LayoutPostList = props => {
  const { category, tag, keyword, posts } = props
  const title = tag ? `Tag: #${tag}` : category ? `Category: ${category}` : keyword ? `Results for "${keyword}"` : null

  return (
    <>
      {title && <div className='lrac-category-banner'>{title}</div>}
      {siteConfig('LRAC_MENU_SEARCH', false, CONFIG) && <SearchInput {...props} />}
      {siteConfig('LRAC_POST_LIST_STYLE', 'page', CONFIG) === 'page' ? (
        <BlogListPage posts={posts} />
      ) : (
        <BlogListScroll posts={posts} />
      )}
    </>
  )
}

const LayoutSearch = props => {
  const { keyword } = props

  useEffect(() => {
    if (isBrowser && keyword) {
      replaceSearchResult({
        doms: document.getElementById('posts-wrapper'),
        search: keyword,
        target: {
          element: 'span',
          className: 'text-yellow-300 border-b border-dashed'
        }
      })
    }
  }, [keyword])

  return <LayoutPostList {...props} />
}

const LayoutArchive = props => {
  const { archivePosts } = props
  return (
    <div className='grid gap-8'>
      {Object.entries(archivePosts).map(([title, entries]) => (
        <section key={title} className='lrac-card p-6'>
          <h2 className='text-2xl font-semibold text-white mb-4'>{title}</h2>
          <div className='grid gap-3'>
            {entries.map(post => (
              <SmartLink key={post.id || post.slug} href={post.href} className='lrac-sidebar-list'>
                {post.title}
              </SmartLink>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

const LayoutTagIndex = props => <LayoutPostList {...props} />
const LayoutCategoryIndex = props => <LayoutPostList {...props} />

const LayoutSlug = props => {
  const { post, lock, validPassword } = props
  const router = useRouter()
  const waiting404 = siteConfig('POST_WAITING_TIME_FOR_404') * 1000

  useEffect(() => {
    if (!post) {
      setTimeout(() => {
        if (isBrowser) {
          const article = document.querySelector('#article-wrapper #notion-article')
          if (!article) {
            router.push('/404').then(() => {
              console.warn('找不到页面', router.asPath)
            })
          }
        }
      }, waiting404)
    }
  }, [post])

  return (
    <>
      {lock ? (
        <PostLock validPassword={validPassword} />
      ) : (
        post && (
          <div>
            <PostMeta post={post} />
            <div id='article-wrapper'>
              <NotionPage post={post} />
            </div>
            <ShareBar post={post} />
            <Comment frontMatter={post} />
          </div>
        )
      )}
    </>
  )
}

const Layout404 = props => (
  <div className='min-h-screen flex items-center justify-center px-4 py-20 text-center'>
    <div className='lrac-card p-12 max-w-2xl'>
      <h1 className='text-5xl font-black mb-4'>404</h1>
      <p className='text-lg text-white/80 mb-6'>页面丢失在红熊猫的迷雾里了。</p>
      <a href='/' className='lrac-action-button'>返回首页</a>
    </div>
  </div>
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
