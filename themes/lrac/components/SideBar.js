import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import Toc from './Toc'

const SideBar = ({ post, latestPosts = [] }) => {
  const hasToc = siteConfig('LRAC_SHOW_TOC', true, CONFIG) && post?.toc?.length > 1
  if (!post) return null

  return (
    <aside className='lrac-reading-rail'>
      {hasToc && (
        <section className='lrac-reading-rail-block'>
          <div className='lrac-rail-label'><span>ON THIS PAGE</span><small>{post.toc.length} SECTIONS</small></div>
          <Toc toc={post.toc} />
        </section>
      )}

      <section className='lrac-reading-rail-block lrac-rail-back'>
        <span className='lrac-rail-number'>L—R</span>
        <p>读累了就去别处走走。文章不会跑，小浣熊也不会催。</p>
        <div>
          <SmartLink href='/archive'>全部文章 ↗</SmartLink>
          <SmartLink href='/search'>搜索 ⌕</SmartLink>
        </div>
      </section>

      {latestPosts?.length > 0 && (
        <section className='lrac-reading-rail-block lrac-rail-latest'>
          <div className='lrac-rail-label'><span>LATEST</span><small>最近更新</small></div>
          {latestPosts.slice(0, 3).map((item, index) => (
            <SmartLink key={item.id || item.slug} href={item.href || `/${item.slug}`}>
              <small>{String(index + 1).padStart(2, '0')}</small>
              <span>{item.title}</span>
            </SmartLink>
          ))}
        </section>
      )}
    </aside>
  )
}

export default SideBar
