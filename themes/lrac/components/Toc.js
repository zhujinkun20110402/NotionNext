import { isBrowser } from '@/lib/utils'
import { uuidToId } from 'notion-utils'
import { useEffect, useMemo, useState } from 'react'

const Toc = ({ toc = [], mobile = false }) => {
  const [active, setActive] = useState(null)
  const ids = useMemo(() => toc.map(item => uuidToId(item.id)), [toc])

  useEffect(() => {
    if (!isBrowser || !ids.length) return
    const update = () => {
      let current = ids[0]
      for (const id of ids) {
        const el = document.querySelector(`[data-id="${id}"]`) || document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 150) current = id
      }
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [ids])

  if (!toc?.length) return null

  return (
    <nav className={`lrac-toc ${mobile ? 'is-mobile' : ''}`} aria-label='文章目录'>
      {toc.map(item => {
        const id = uuidToId(item.id)
        return (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'is-active' : ''}
            style={{ '--toc-indent': `${Math.min(item.indentLevel || 0, 3) * 12}px` }}>
            <span>{item.text}</span>
          </a>
        )
      })}
    </nav>
  )
}

export default Toc
