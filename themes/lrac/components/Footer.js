import SmartLink from '@/components/SmartLink'
import BrandMark from './BrandMark'

const Footer = ({ siteInfo, categoryOptions = [], tagOptions = [] }) => {
  const year = new Date().getFullYear()
  return (
    <footer className='lrac-footer'>
      <div className='lrac-footer-topline'>
        <span>END OF CURRENT PAGE</span>
        <span>L—RAC / 小浣熊</span>
      </div>

      <div className='lrac-footer-main'>
        <div className='lrac-footer-statement'>
          <BrandMark />
          <div>
            <p className='lrac-overline'>PERSONAL FIELD NOTES</p>
            <h2>把值得留下的东西，<br />写得慢一点。</h2>
            <p>{siteInfo?.description || '技术、设计与生活的长期记录。'}</p>
          </div>
        </div>

        <div className='lrac-footer-links'>
          <div>
            <small>EXPLORE</small>
            <SmartLink href='/archive'>文章归档</SmartLink>
            <SmartLink href='/category'>分类索引</SmartLink>
            <SmartLink href='/tag'>标签索引</SmartLink>
          </div>
          <div>
            <small>UTILITY</small>
            <SmartLink href='/search'>站内搜索</SmartLink>
            <SmartLink href='/rss/feed.xml'>RSS Feed</SmartLink>
            <SmartLink href='/sitemap.xml'>Sitemap</SmartLink>
          </div>
        </div>
      </div>

      <div className='lrac-footer-bottom'>
        <span>© {year} L-Rac</span>
        <span>{categoryOptions?.length || 0} CATEGORIES · {tagOptions?.length || 0} TAGS</span>
        <span>NOTION → NEXT.JS → VERCEL</span>
      </div>
    </footer>
  )
}

export default Footer
