import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useGlobal } from '@/lib/global'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import BrandMark from './BrandMark'
import ScrollProgress from './ScrollProgress'

const defaultNav = [
  { name: '首页', url: '/' },
  { name: '文章', url: '/archive' },
  { name: '分类', url: '/category' },
  { name: '标签', url: '/tag' }
]

const Header = ({ customNav = [] }) => {
  const [open, setOpen] = useState(false)
  const { toggleDarkMode, isDarkMode } = useGlobal()
  const router = useRouter()

  useEffect(() => setOpen(false), [router.asPath])

  const nav = Array.isArray(customNav) && customNav.some(item => item?.name && item?.url)
    ? customNav.filter(item => item?.name && item?.url)
    : defaultNav

  const isActive = url => url === '/' ? router.pathname === '/' : router.asPath.startsWith(url)

  return (
    <header className='lrac-header'>
      {siteConfig('LRAC_SHOW_READING_PROGRESS', true, CONFIG) && <ScrollProgress />}
      <div className='lrac-header-frame'>
        <SmartLink href='/' className='lrac-brand' aria-label='L-Rac 首页'>
          <BrandMark compact />
          <span className='lrac-brand-text'>
            <strong>L—RAC</strong>
            <small>小浣熊的个人博客</small>
          </span>
        </SmartLink>

        <nav className='lrac-desktop-nav' aria-label='主导航'>
          {nav.map((item, index) => (
            <SmartLink
              key={`${item.name}-${item.url}`}
              href={item.url}
              target={item.newWindow ? '_blank' : '_self'}
              className={isActive(item.url) ? 'is-active' : ''}>
              <small>{String(index + 1).padStart(2, '0')}</small>
              <span>{item.name}</span>
            </SmartLink>
          ))}
        </nav>

        <div className='lrac-header-actions'>
          {siteConfig('LRAC_MENU_SEARCH', true, CONFIG) && (
            <SmartLink href='/search' className='lrac-round-action' aria-label='搜索'>
              <span aria-hidden='true'>⌕</span>
            </SmartLink>
          )}
          {siteConfig('LRAC_MENU_DARKMODE_BUTTON', true, CONFIG) && (
            <button
              type='button'
              className='lrac-round-action'
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? '切换浅色模式' : '切换深色模式'}>
              <span aria-hidden='true'>{isDarkMode ? '☼' : '◐'}</span>
            </button>
          )}
          <button
            type='button'
            className='lrac-menu-trigger'
            aria-expanded={open}
            aria-controls='lrac-mobile-menu'
            aria-label='打开菜单'
            onClick={() => setOpen(v => !v)}>
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id='lrac-mobile-menu' className={`lrac-mobile-menu ${open ? 'is-open' : ''}`}>
        <div className='lrac-mobile-menu-inner'>
          <div className='lrac-mobile-menu-label'>NAVIGATION / 导航</div>
          <nav>
            {nav.map((item, index) => (
              <SmartLink
                key={`mobile-${item.name}-${item.url}`}
                href={item.url}
                target={item.newWindow ? '_blank' : '_self'}>
                <small>{String(index + 1).padStart(2, '0')}</small>
                <strong>{item.name}</strong>
                <span>↗</span>
              </SmartLink>
            ))}
            <SmartLink href='/search'>
              <small>⌕</small><strong>搜索</strong><span>↗</span>
            </SmartLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
