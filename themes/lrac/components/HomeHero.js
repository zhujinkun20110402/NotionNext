import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const HomeHero = ({ siteInfo, posts = [], latestPosts = [], postCount = 0, categoryOptions = [], tagOptions = [] }) => {
  const featured = posts?.[0] || latestPosts?.[0]
  const title = siteConfig('LRAC_HERO_TITLE', CONFIG.LRAC_HERO_TITLE, CONFIG)
  const desc = siteInfo?.description || siteConfig('LRAC_HERO_DESC', CONFIG.LRAC_HERO_DESC, CONFIG)

  return (
    <section className='lrac-hero'>
      <div className='lrac-hero-grid'>
        <div className='lrac-hero-copy'>
          <p className='lrac-overline'>{siteConfig('LRAC_BRAND_KICKER', CONFIG.LRAC_BRAND_KICKER, CONFIG)}</p>
          <h1>{String(title).split('\n').map((line, index) => <span key={index}>{line}</span>)}</h1>
          <p className='lrac-hero-desc'>{desc}</p>
          <div className='lrac-hero-actions'>
            <SmartLink href='#notes' className='lrac-button lrac-button-primary'>开始阅读 <span>↓</span></SmartLink>
            <SmartLink href='/archive' className='lrac-button lrac-button-ghost'>浏览归档 <span>↗</span></SmartLink>
          </div>
          <div className='lrac-hero-index'>
            <div><strong>{postCount || posts?.length || latestPosts?.length || 0}</strong><span>公开文章</span></div>
            <div><strong>{categoryOptions?.length || 0}</strong><span>主题分类</span></div>
            <div><strong>{tagOptions?.length || 0}</strong><span>自由标签</span></div>
          </div>
        </div>

        <div className='lrac-hero-photo-wrap'>
          <div className='lrac-hero-photo-stage'>
            <img src='/lrac/raccoon-reference.jpg' alt='小浣熊在树枝上的照片' className='lrac-hero-photo' />
            <div className='lrac-photo-shade' />
            <div className='lrac-photo-caption lrac-photo-caption-top'>
              <span>COLOR STUDY / 01</span>
              <strong>RUSSET · CHARCOAL · CREAM</strong>
            </div>
            <div className='lrac-photo-caption lrac-photo-caption-bottom'>
              <small>STAY CURIOUS</small>
              <strong>小浣熊</strong>
            </div>
          </div>
          <div className='lrac-photo-note'>
            <span>01</span>
            <p>这个颜色不是从品牌手册里调出来的。更像从秋叶、树皮、奶油色的毛尖和一团蓬松的锈红里，慢慢捡回来的。</p>
          </div>
        </div>
      </div>

      {featured && (
        <SmartLink href={featured.href || `/${featured.slug}`} className='lrac-hero-featured'>
          <span className='lrac-hero-featured-label'>LATEST NOTE</span>
          <span className='lrac-hero-featured-date'>{featured.publishDay || featured.lastEditedDay || 'NEW'}</span>
          <strong>{featured.title}</strong>
          <span className='lrac-hero-featured-arrow'>↗</span>
        </SmartLink>
      )}
    </section>
  )
}

export default HomeHero
