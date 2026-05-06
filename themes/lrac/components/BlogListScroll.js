import SmartLink from '@/components/SmartLink'

export const BlogListScroll = ({ posts = [] }) => {
  return (
    <div id='posts-wrapper' className='lrac-post-grid'>
      {posts.map(post => (
        <SmartLink
          key={post.id || post.slug}
          href={post.href}
          className='lrac-post-card'>
          <div className='lrac-post-image' style={{ backgroundImage: `url(${post.pageCoverThumbnail || post.pageCover || ''})` }} />
          <div className='lrac-post-body'>
            <h3 className='lrac-post-title'>{post.title}</h3>
            <p className='lrac-post-summary'>{post.summary || post.title}</p>
            <div className='lrac-post-meta'>
              <span>{post.publishDay || post.lastEditedDay}</span>
              {post.category && <span className='lrac-post-pill'>{post.category}</span>}
            </div>
          </div>
        </SmartLink>
      ))}
    </div>
  )
}
