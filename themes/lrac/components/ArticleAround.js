import SmartLink from '@/components/SmartLink'

const ArticleAround = ({ prev, next }) => {
  if (!prev && !next) return null
  return (
    <nav className='lrac-article-around' aria-label='上一篇和下一篇'>
      {prev ? (
        <SmartLink href={prev.href || `/${prev.slug}`} className='lrac-around-card'>
          <small>PREVIOUS / 上一篇</small>
          <strong>{prev.title}</strong>
          <span>←</span>
        </SmartLink>
      ) : <div />}
      {next ? (
        <SmartLink href={next.href || `/${next.slug}`} className='lrac-around-card is-next'>
          <small>NEXT / 下一篇</small>
          <strong>{next.title}</strong>
          <span>→</span>
        </SmartLink>
      ) : <div />}
    </nav>
  )
}

export default ArticleAround
