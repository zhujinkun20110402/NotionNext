import { useState } from 'react'
import { useRouter } from 'next/router'

const SearchInput = ({ keyword = '' }) => {
  const [value, setValue] = useState(keyword)
  const router = useRouter()

  const onSubmit = e => {
    e.preventDefault()
    const query = value.trim()
    if (!query) return
    router.push(`/search/${encodeURIComponent(query)}`)
  }

  return (
    <form className='lrac-search-panel' onSubmit={onSubmit}>
      <input
        type='search'
        placeholder='Search articles...'
        aria-label='Search'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchInput
