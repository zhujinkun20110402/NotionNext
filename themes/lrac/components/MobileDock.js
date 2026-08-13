import { useRouter } from 'next/router'
import SmartLink from '@/components/SmartLink'

const items = [
  { href: '/', icon: '⌂', label: '首页' },
  { href: '/archive', icon: '≡', label: '归档' },
  { href: '/search', icon: '⌕', label: '搜索' },
  { href: '/tag', icon: '#', label: '标签' }
]

const MobileDock = () => {
  const router = useRouter()
  return (
    <nav className='lrac-mobile-dock' aria-label='移动端快捷导航'>
      {items.map(item => {
        const active = item.href === '/' ? router.pathname === '/' : router.asPath.startsWith(item.href)
        return (
          <SmartLink key={item.href} href={item.href} className={active ? 'is-active' : ''}>
            <span aria-hidden='true'>{item.icon}</span>
            <small>{item.label}</small>
          </SmartLink>
        )
      })}
    </nav>
  )
}

export default MobileDock
