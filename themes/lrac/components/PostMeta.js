import SmartLink from '@/components/SmartLink'

const PostMeta = ({ post }) => {
  const categories = Array.isArray(post.category) ? post.category : post.category ? [post.category] : []
  const tags = post.tagItems || post.tags || []
  const cover = post.pageCover || post.pageCoverThumbnail

  return (
    <header className={`lrac-article-head ${cover ? 'has-cover' : ''}`}>
      <div className='lrac-article-breadcrumb'>
        <SmartLink href='/'>L—RAC</SmartLink>
        <span>↘</span>
        {categories[0]
          ? <SmartLink href={`/category/${encodeURIComponent(categories[0])}`}>{categories[0]}</SmartLink>
          : <span>FIELD NOTE</span>}
      </div>

      <div className='lrac-article-title-row'>
        <div>
          <p className='lrac-overline'>WRITTEN BY L-RAC / 小浣熊</p>
          <h1>{post.title}</h1>
          {post.summary && <p className='lrac-article-deck'>{post.summary}</p>}
        </div>
        <div className='lrac-article-stamp' aria-hidden='true'>
          <strong>LR</strong><span>NOTE</span>
        </div>
      </div>

      <div className='lrac-article-info'>
        <div><small>PUBLISHED</small><strong>{post.publishDay || post.lastEditedDay || '—'}</strong></div>
        {post.readTime && <div><small>READING</small><strong>{post.readTime} MIN</strong></div>}
        {post.wordCount && <div><small>LENGTH</small><strong>{post.wordCount} 字</strong></div>}
        {post.lastEditedDay && post.publishDay && post.lastEditedDay !== post.publishDay && (
          <div><small>UPDATED</small><strong>{post.lastEditedDay}</strong></div>
        )}
      </div>

      {tags.length > 0 && (
        <div className='lrac-article-tags'>
          {tags.slice(0, 10).map(tag => {
            const name = typeof tag === 'string' ? tag : tag?.name
            return name ? <SmartLink key={name} href={`/tag/${encodeURIComponent(name)}`}>#{name}</SmartLink> : null
          })}
        </div>
      )}

      {cover && (
        <figure className='lrac-article-cover'>
          <img src={cover} alt='' />
          <figcaption><span>ARTICLE IMAGE</span><span>L—RAC ARCHIVE</span></figcaption>
        </figure>
      )}
    </header>
  )
}

export default PostMeta
