import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const SearchInput = ({ keyword = '' }) => {
  const router = useRouter()
  const routeKeyword = router.query?.keyword || router.query?.s || ''
  const [value, setValue] = useState(keyword || routeKeyword)

  useEffect(() => setValue(keyword || routeKeyword || ''), [keyword, routeKeyword])

  const submit = e => {
    e.preventDefault()
    const query = value.trim()
    if (query) router.push(`/search/${encodeURIComponent(query)}`)
  }

  return (
    <form className='lrac-search-box' onSubmit={submit} role='search'>
      <span className='lrac-search-symbol' aria-hidden='true'>⌕</span>
      <div>
        <label htmlFor='lrac-search-input'>SEARCH THE ARCHIVE</label>
        <input
          id='lrac-search-input'
          type='search'
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder='标题、摘要、标签、关键词…'
          autoComplete='off'
        />
      </div>
      <button type='submit'>搜索 <span>↗</span></button>
    </form>
  )
}

export default SearchInput
