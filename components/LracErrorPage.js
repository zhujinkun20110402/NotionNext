import Link from 'next/link'

const LracErrorPage = ({ code = 500, title = '页面暂时没有成功打开。', description = '可以稍后再试，或者先回到首页。' }) => {
  return (
    <main className='lrac-static-error'>
      <div className='lrac-static-error-card'>
        <span className='lrac-static-error-label'>L—RAC / SYSTEM NOTE</span>
        <strong className='lrac-static-error-code'>{code}</strong>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <Link href='/'>回到首页</Link>
          <Link href='/search'>搜索文章 ↗</Link>
        </div>
      </div>
      <style jsx global>{`
        html, body { margin: 0; min-height: 100%; background: #f3eee6; color: #171412; }
        .lrac-static-error { min-height: 100vh; display: grid; place-items: center; padding: 24px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif; }
        .lrac-static-error-card { width: min(100%, 720px); padding: clamp(34px, 7vw, 72px); border: 1px solid rgba(34,27,22,.15); border-radius: 38px; background: #fbf7f0; box-shadow: 0 30px 80px rgba(70,47,32,.12); }
        .lrac-static-error-label { color: #ad4b2c; font-size: 8px; font-weight: 800; letter-spacing: .16em; }
        .lrac-static-error-code { display: block; margin-top: 22px; color: #ad4b2c; font-family: Georgia, "Songti SC", serif; font-size: clamp(92px, 18vw, 180px); line-height: .8; letter-spacing: -.08em; opacity: .18; }
        .lrac-static-error h1 { margin: 22px 0 10px; font-family: Georgia, "Songti SC", serif; font-size: clamp(34px, 6vw, 56px); font-weight: 600; letter-spacing: -.045em; }
        .lrac-static-error p { margin: 0; color: #786f66; font-size: 12px; line-height: 1.8; }
        .lrac-static-error-card > div { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
        .lrac-static-error-card a { min-height: 44px; display: inline-flex; align-items: center; padding: 0 17px; border: 1px solid rgba(34,27,22,.22); border-radius: 999px; color: #171412; font-size: 10px; font-weight: 700; text-decoration: none; }
        .lrac-static-error-card a:first-child { border-color: #1e211e; background: #1e211e; color: #fff4e3; }
        @media (prefers-color-scheme: dark) {
          html, body { background: #151412; color: #f2e9dc; }
          .lrac-static-error-card { border-color: rgba(243,233,219,.12); background: #1d1b18; box-shadow: 0 30px 80px rgba(0,0,0,.32); }
          .lrac-static-error p { color: #a29687; }
          .lrac-static-error-card a { border-color: rgba(243,233,219,.2); color: #f2e9dc; }
          .lrac-static-error-card a:first-child { background: #d76d46; border-color: #d76d46; color: #fff9f2; }
        }
      `}</style>
    </main>
  )
}

export default LracErrorPage
