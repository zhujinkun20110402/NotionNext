import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

const PostMeta = ({ post }) => {
  return (
    <div className='lrac-title-block'>
      <div className='lrac-meta-line'>
        <span>{post.publishDay || post.lastEditedDay}</span>
        {post.category && <span className='lrac-category-pill'>{post.category}</span>}
      </div>
      <h1>{post.title}</h1>
      <p>{post.summary}</p>
      {post.tagItems?.length > 0 && (
        <div className='lrac-tags'>
          {post.tagItems.map(tag => (
            <SmartLink key={tag} href={`/tag/${encodeURIComponent(tag)}`} className='lrac-tag-pill'>
              #{tag}
            </SmartLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostMeta
