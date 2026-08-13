import SmartLink from '@/components/SmartLink'

const normalizeTag = tag => typeof tag === 'string' ? tag : tag?.name

const PostCard = ({ post, index = 0, home = false }) => {
  const cover = post.pageCoverThumbnail || post.pageCover
  const href = post.href || `/${post.slug || post.id}`
  const tags = (post.tagItems || post.tags || []).map(normalizeTag).filter(Boolean)
  const category = Array.isArray(post.category) ? post.category[0] : post.category

  return (
    <article className={`lrac-note-card ${home ? 'is-home-card' : ''}`} data-index={index + 1}>
      <SmartLink href={href} className='lrac-note-media' aria-label={`阅读 ${post.title}`}>
        {cover ? (
          <img src={cover} alt='' loading={index > 1 ? 'lazy' : 'eager'} />
        ) : (
          <div className='lrac-note-placeholder' aria-hidden='true'>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{category || 'FIELD NOTE'}</strong>
            <small>L—RAC</small>
          </div>
        )}
        <span className='lrac-note-media-index'>{String(index + 1).padStart(2, '0')}</span>
      </SmartLink>

      <div className='lrac-note-content'>
        <div className='lrac-note-meta'>
          <span>{post.publishDay || post.lastEditedDay || '未标日期'}</span>
          {category && <><i /><span>{category}</span></>}
          {post.readTime && <><i /><span>{post.readTime} MIN</span></>}
        </div>
        <SmartLink href={href} className='lrac-note-title'>
          <h2>{post.title}</h2>
        </SmartLink>
        <p>{post.summary || '一篇来自 L-Rac 数字花园的记录。'}</p>
        <div className='lrac-note-bottom'>
          <div className='lrac-note-tags'>
            {tags.slice(0, 3).map(tag => <span key={tag}>#{tag}</span>)}
          </div>
          <SmartLink href={href} className='lrac-note-read'>阅读全文 <span>↗</span></SmartLink>
        </div>
      </div>
    </article>
  )
}

export const BlogListPage = ({ posts = [], home = false }) => {
  if (!posts?.length) {
    return (
      <div className='lrac-empty-state'>
        <span>NO NOTES / YET</span>
        <h2>这里暂时还很安静。</h2>
        <p>没有找到符合当前条件的文章。可以换个关键词，或者去归档页随便翻翻。</p>
        <SmartLink href='/archive'>打开归档 ↗</SmartLink>
      </div>
    )
  }

  return (
    <div id='posts-wrapper' className={`lrac-note-grid ${home ? 'is-home' : ''}`}>
      {posts.map((post, index) => (
        <PostCard key={post.id || post.slug || index} post={post} index={index} home={home} />
      ))}
    </div>
  )
}

export default BlogListPage
