import SmartLink from '@/components/SmartLink'

const RecommendPosts = ({ posts = [] }) => {
  if (!posts?.length) return null
  return (
    <section className='lrac-recommend'>
      <div className='lrac-section-title'>
        <div><p>KEEP READING</p><h2>再往旁边翻几页</h2></div>
        <SmartLink href='/archive'>全部归档 ↗</SmartLink>
      </div>
      <div className='lrac-recommend-grid'>
        {posts.slice(0, 3).map((post, index) => (
          <SmartLink key={post.id || post.slug} href={post.href || `/${post.slug}`} className='lrac-recommend-card'>
            <small>{String(index + 1).padStart(2, '0')} / NOTE</small>
            <strong>{post.title}</strong>
            <span>{post.publishDay || post.lastEditedDay || '继续阅读'} ↗</span>
          </SmartLink>
        ))}
      </div>
    </section>
  )
}

export default RecommendPosts
