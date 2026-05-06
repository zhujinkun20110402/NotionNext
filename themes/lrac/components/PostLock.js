import { useGlobal } from '@/lib/global'
import { useEffect, useRef } from 'react'

export const PostLock = props => {
  const { validPassword } = props
  const { locale } = useGlobal()
  const passwordInputRef = useRef(null)

  useEffect(() => {
    passwordInputRef.current?.focus()
  }, [])

  const submitPassword = () => {
    const value = passwordInputRef.current?.value || ''
    if (!validPassword(value)) {
      const tips = document.getElementById('lrac-lock-tips')
      if (tips) {
        tips.innerHTML = `<div class='text-red-500'>${locale.COMMON.PASSWORD_ERROR}</div>`
      }
    }
  }

  return (
    <div className='lrac-card p-8 max-w-xl mx-auto'>
      <div className='space-y-4 text-center'>
        <div className='text-xl font-semibold'>{locale.COMMON.ARTICLE_LOCK_TIPS}</div>
        <div className='flex gap-2 mx-auto max-w-md'>
          <input
            id='password'
            type='password'
            ref={passwordInputRef}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                submitPassword()
              }
            }}
            className='w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-white outline-none'
          />
          <button
            type='button'
            onClick={submitPassword}
            className='lrac-action-button'>
            {locale.COMMON.SUBMIT}
          </button>
        </div>
        <div id='lrac-lock-tips' className='min-h-[1.5rem] text-sm text-red-400'></div>
      </div>
    </div>
  )
}
