import SmartLink from '@/components/SmartLink'

const SideBar = ({ latestPosts = [], categoryOptions = [], tagOptions = [], rightAreaSlot, siteInfo }) => {
  return (
    <div className='lrac-sidebar'>
      <div className='lrac-sidebar-card'>
        <h3>About</h3>
        <p>{siteInfo?.description || 'L-Rac brings a warm glassmorphism experience to your blog.'}</p>
      </div>
      <div className='lrac-sidebar-card'>
        <h3>Latest</h3>
        <ul className='lrac-sidebar-list'>
          {latestPosts.slice(0, 5).map(post => (
            <li key={post.id || post.slug}>
              <SmartLink href={post.href}>{post.title}</SmartLink>
            </li>
          ))}
        </ul>
      </div>
      {categoryOptions.length > 0 && (
        <div className='lrac-sidebar-card'>
          <h3>Categories</h3>
          <div className='lrac-tags'>
            {categoryOptions.map(category => (
              <SmartLink
                key={category.value}
                href={`/category/${encodeURIComponent(category.value)}`}
                className='lrac-tag-pill-small'>
                {category.text || category.value}
              </SmartLink>
            ))}
          </div>
        </div>
      )}
      {tagOptions.length > 0 && (
        <div className='lrac-sidebar-card'>
          <h3>Tags</h3>
          <div className='lrac-tags'>
            {tagOptions.slice(0, 12).map(tag => (
              <SmartLink
                key={tag.value}
                href={`/tag/${encodeURIComponent(tag.value)}`}
                className='lrac-tag-pill-small'>
                {tag.text || tag.value}
              </SmartLink>
            ))}
          </div>
        </div>
      )}
      {rightAreaSlot && <div className='lrac-sidebar-card'>{rightAreaSlot}</div>}
    </div>
  )
}

export default SideBar
