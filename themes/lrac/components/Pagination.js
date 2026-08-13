import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

const pageHref = ({ page, category, tag, keyword }) => {
  const base = category
    ? `/category/${encodeURIComponent(category)}`
    : tag
      ? `/tag/${encodeURIComponent(tag)}`
      : keyword
        ? `/search/${encodeURIComponent(keyword)}`
        : ''
  if (page <= 1) return base || '/'
  return `${base}/page/${page}`
}

const Pagination = ({ postCount = 0, page = 1, category, tag, keyword, NOTION_CONFIG }) => {
  const size = Number(siteConfig('POSTS_PER_PAGE', 12, NOTION_CONFIG)) || 12
  const total = Math.ceil(Number(postCount || 0) / size)
  const current = Number(page || 1)
  if (total <= 1) return null

  const start = Math.max(1, current - 2)
  const end = Math.min(total, current + 2)
  const pages = []
  for (let i = start; i <= end; i++) pages.push(i)

  return (
    <nav className='lrac-pagination' aria-label='文章分页'>
      <span className='lrac-pagination-label'>PAGE {current} / {total}</span>
      <div>
        {current > 1 && <SmartLink href={pageHref({ page: current - 1, category, tag, keyword })} className='lrac-page-arrow'>←</SmartLink>}
        {start > 1 && <><SmartLink href={pageHref({ page: 1, category, tag, keyword })}>1</SmartLink>{start > 2 && <span>…</span>}</>}
        {pages.map(item => <SmartLink key={item} href={pageHref({ page: item, category, tag, keyword })} className={item === current ? 'is-active' : ''}>{item}</SmartLink>)}
        {end < total && <>{end < total - 1 && <span>…</span>}<SmartLink href={pageHref({ page: total, category, tag, keyword })}>{total}</SmartLink></>}
        {current < total && <SmartLink href={pageHref({ page: current + 1, category, tag, keyword })} className='lrac-page-arrow'>→</SmartLink>}
      </div>
    </nav>
  )
}

export default Pagination
