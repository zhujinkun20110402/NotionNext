import { useState } from 'react'
import { useGlobal } from '@/lib/global'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

const Header = props => {
  const { siteInfo, customNav } = props
  const navItems = customNav || siteInfo?.customNav || []
  const [open, setOpen] = useState(false)
  const { toggleDarkMode, isDarkMode } = useGlobal()

  return (
    <header className='lrac-header' id='lrac-header'>
      <div className='lrac-header-inner'>
        <div className='lrac-brand'>
          <SmartLink href='/' className='brand-title'>L-Rac</SmartLink>
          <span className='brand-subtitle'>{siteInfo?.description || '红熊猫的夜间书房'}</span>
        </div>

        <button
          type='button'
          className='lrac-mobile-nav-toggle'
          onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={`lrac-nav ${open ? 'open' : ''}`}>
          {navItems.length > 0
            ? navItems.map(item => (
                <SmartLink
                  key={item.name + item.url}
                  href={item.url}
                  className='nav-link'
                  target={item.newWindow ? '_blank' : '_self'}>
                  {item.name}
                </SmartLink>
              ))
            : null}
        </nav>

        <div className='lrac-actions'>
          {siteConfig('LRAC_MENU_DARKMODE_BUTTON', false, CONFIG) && (
            <button
              type='button'
              className='lrac-action-button'
              onClick={toggleDarkMode}>
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
