const Footer = ({ siteInfo }) => {
  return (
    <footer className='lrac-footer'>
      <p>
        {siteInfo?.title || 'L-Rac'} · 红熊猫主题 · 由 L-Rac 设计。
      </p>
      <p>
        © {new Date().getFullYear()} {siteInfo?.author || 'L-Rac Studio'}
      </p>
    </footer>
  )
}

export default Footer
