import LracErrorPage from '@/components/LracErrorPage'

export default function Custom500() {
  return <LracErrorPage code={500} title='服务器这会儿有点走神。' description='稍后刷新通常就能继续。如果持续出现，请检查 Vercel 日志与 Notion 数据源配置。' />
}
