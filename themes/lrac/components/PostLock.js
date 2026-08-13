import { useGlobal } from '@/lib/global'
import { useEffect, useRef, useState } from 'react'
import BrandMark from './BrandMark'

export const PostLock = ({ validPassword }) => {
  const { locale } = useGlobal()
  const inputRef = useRef(null)
  const [error, setError] = useState(false)

  useEffect(() => inputRef.current?.focus(), [])

  const submit = () => {
    const ok = validPassword(inputRef.current?.value || '')
    setError(!ok)
  }

  return (
    <section className='lrac-lock-card'>
      <div className='lrac-lock-mark'><BrandMark /></div>
      <p className='lrac-overline'>PRIVATE FIELD NOTE</p>
      <h1>这篇文章暂时上了锁。</h1>
      <p>{locale.COMMON.ARTICLE_LOCK_TIPS}</p>
      <div className='lrac-lock-form'>
        <input
          ref={inputRef}
          id='password'
          type='password'
          placeholder='输入访问密码'
          onKeyDown={e => e.key === 'Enter' && submit()}
        />
        <button type='button' onClick={submit}>{locale.COMMON.SUBMIT}</button>
      </div>
      {error && <div className='lrac-lock-error'>{locale.COMMON.PASSWORD_ERROR}</div>}
    </section>
  )
}
