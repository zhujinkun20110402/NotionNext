import { NextRequest, NextResponse } from 'next/server'
import { checkStrIsNotionId, getLastPartOfUrl } from '@/lib/utils'
import { idToUuid } from 'notion-utils'
import BLOG from './blog.config'

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)']
}

/**
 * L-Rac 只保留博客需要的 UUID → slug 兼容重定向。
 * 原项目的 Clerk 登录/组织权限中间件已移除，减少部署依赖与无关路由。
 */
export default async function middleware(req: NextRequest) {
  if (!BLOG.UUID_REDIRECT) return NextResponse.next()

  let redirectJson: Record<string, string> = {}
  try {
    const response = await fetch(`${req.nextUrl.origin}/redirect.json`)
    if (response.ok) redirectJson = (await response.json()) as Record<string, string>
  } catch (err) {
    console.error('Error fetching redirect map:', err)
  }

  let lastPart = getLastPartOfUrl(req.nextUrl.pathname) as string
  if (checkStrIsNotionId(lastPart)) lastPart = idToUuid(lastPart)

  if (lastPart && redirectJson[lastPart]) {
    const target = req.nextUrl.clone()
    target.pathname = '/' + redirectJson[lastPart]
    return NextResponse.redirect(target, 308)
  }

  return NextResponse.next()
}
