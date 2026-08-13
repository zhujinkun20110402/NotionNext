const BrandMark = ({ compact = false }) => {
  return (
    <span className={`lrac-mark ${compact ? 'is-compact' : ''}`} aria-hidden='true'>
      <span className='lrac-mark-type'>LR</span>
      <span className='lrac-mark-band lrac-mark-band-a' />
      <span className='lrac-mark-band lrac-mark-band-b' />
      <span className='lrac-mark-band lrac-mark-band-c' />
    </span>
  )
}

export default BrandMark
