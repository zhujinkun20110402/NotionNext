const TitleBar = ({ siteInfo }) => {
  return (
    <section className='lrac-hero'>
      <div className='lrac-hero-panel'>
        <div className='lrac-hero-copy'>
          <h1>{siteInfo?.title || 'L-Rac'}</h1>
          <p>
            欢迎来到 L-Rac，小浣熊的私享书屋。这里用玻璃质感与晶体光效，
            让内容在高级感与阅读舒适之间自由呼吸。
          </p>
          <div className='lrac-hero-info'>
            <span className='lrac-hero-pill'>红熊猫 · 暖光柔雾</span>
            <span className='lrac-hero-pill'>高级模糊材质</span>
          </div>
        </div>

        <div className='lrac-hero-side'>
          <h2>NIGHT RANGER</h2>
          <p>
            设计以红熊猫为灵感，结合高光玻璃卡片、渐变雾面、和柔和模糊背景。
            不同屏幕下都能保持优雅层次与稳定阅读节奏。
          </p>
          <span className='badge'>主题：L-Rac</span>
        </div>
      </div>
    </section>
  )
}

export default TitleBar
