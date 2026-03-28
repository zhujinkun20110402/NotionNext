import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import TagItemMini from './TagItemMini'

/**
 * 琐记时间线列表
 * @param posts 所有笔记
 * @param archiveTitle 日期标题
 * @returns {JSX.Element}
 * @constructor
 */
const NoteTimeline = ({ posts = [], archiveTitle, siteInfo }) => {
  if (!posts || posts.length === 0) {
    return <></>
  } else {
    return (
      <div className='relative'>
        {/* 时间线竖线 */}
        <div className='absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600'></div>

        <div className='pb-4 dark:text-gray-300 flex items-center' id={archiveTitle}>
          {/* 时间线节点 */}
          <div className='w-8 h-8 bg-indigo-500 dark:bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 z-10'>
            {new Date(archiveTitle).getDate()}
          </div>
          <span className='text-lg font-semibold'>{archiveTitle}</span>
        </div>

        <ul className='ml-12'>
          {posts?.map(post => {
            const showPreview =
              siteConfig('HEO_POST_LIST_PREVIEW', null, CONFIG) && post.blockMap
            if (
              post &&
              !post.pageCoverThumbnail &&
              siteConfig('HEO_POST_LIST_COVER_DEFAULT', null, CONFIG)
            ) {
              post.pageCoverThumbnail = siteInfo?.pageCover
            }
            const showPageCover =
              siteConfig('HEO_POST_LIST_COVER', null, CONFIG) &&
              post?.pageCoverThumbnail &&
              !showPreview
            return (
              <li
                key={post.id}
                className='mb-6 relative'
              >
                {/* 时间线连接线 */}
                <div className='absolute -left-8 top-4 w-4 h-0.5 bg-gray-300 dark:bg-gray-600'></div>

                <div
                  className={
                    'cursor-pointer flex flex-row bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group w-full dark:border-gray-600 hover:border-indigo-600 dark:hover:border-yellow-600'
                  }>
                  {/* 图片封面 */}
                  {showPageCover && (
                    <div className='mr-4'>
                      <SmartLink href={post?.href} passHref legacyBehavior>
                        <LazyImage
                          className={'rounded-lg bg-center bg-cover w-24 h-16'}
                          src={post?.pageCoverThumbnail}
                        />
                      </SmartLink>
                    </div>
                  )}

                  {/* 文字区块 */}
                  <div className={'flex flex-col justify-between w-full'}>
                    <div>
                      {/* 标题 */}
                      <SmartLink
                        href={post?.href}
                        passHref
                        className={
                          'group-hover:text-indigo-700 group-hover:dark:text-indigo-400 text-black dark:text-gray-100 dark:group-hover:text-yellow-600 line-clamp-2 replace cursor-pointer text-lg font-semibold leading-tight'
                        }>
                        <span className='menu-link'>{post.title}</span>
                      </SmartLink>

                      {/* 时间 */}
                      <div className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
                        {new Date(post.publishDate).toLocaleTimeString('zh-CN', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>

                    {/* 摘要 */}
                    {post.summary && (
                      <p className="line-clamp-2 replace my-2 text-gray-700 dark:text-gray-300 text-sm font-light leading-tight">
                        {post.summary}
                      </p>
                    )}

                    {/* 标签 */}
                    <div className='md:flex-nowrap flex-wrap md:justify-start inline-block'>
                      {post.tagItems?.map(tag => (
                        <TagItemMini key={tag.name} tag={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default NoteTimeline