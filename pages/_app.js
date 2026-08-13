import '@/styles/globals.css'
import '@/styles/utility-patterns.css'
import 'react-notion-x/src/styles.css'
import '@/styles/notion.css'

import useAdjustStyle from '@/hooks/useAdjustStyle'
import { GlobalContextProvider } from '@/lib/global'
import { getBaseLayoutByTheme } from '@/themes/theme'
import { useCallback } from 'react'
import ErrorHandler from '@/lib/utils/errorHandler'
import BLOG from '@/blog.config'
import ExternalPlugins from '@/components/ExternalPlugins'
import SEO from '@/components/SEO'

const AppErrorBoundary = ErrorHandler.createErrorBoundary(
  <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ fontFamily: 'Georgia, serif', fontSize: '2.4rem', fontWeight: 700, letterSpacing: '-.08em', marginBottom: '.75rem' }}>L—R</div>
    <h1 style={{ fontSize: '1.5rem', marginBottom: '.75rem' }}>页面暂时没有成功打开</h1>
    <p style={{ color: '#777', marginBottom: '1.5rem' }}>刷新页面通常就能继续。如果问题持续存在，请检查 Notion 数据源配置。</p>
    <button onClick={() => window.location.reload()} style={{ padding: '.65rem 1.35rem', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '999px', background: 'transparent' }}>重新加载</button>
  </div>
)

const MyApp = ({ Component, pageProps }) => {
  useAdjustStyle()

  const GLayout = useCallback(props => {
    const Layout = getBaseLayoutByTheme(BLOG.THEME)
    return <Layout {...props} />
  }, [])

  return (
    <AppErrorBoundary>
      <GlobalContextProvider {...pageProps}>
        <GLayout {...pageProps}>
          <SEO {...pageProps} />
          <Component {...pageProps} />
        </GLayout>
        <ExternalPlugins {...pageProps} />
      </GlobalContextProvider>
    </AppErrorBoundary>
  )
}

export default MyApp
