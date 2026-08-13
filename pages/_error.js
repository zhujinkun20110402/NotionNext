import LracErrorPage from '@/components/LracErrorPage'

export default function ErrorPage({ statusCode }) {
  return <LracErrorPage code={statusCode || 500} title='页面暂时没有成功打开。' description='可以稍后再试，或者先回到首页继续逛。' />
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 500
  return { statusCode }
}
