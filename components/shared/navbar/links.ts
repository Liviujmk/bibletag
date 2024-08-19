import { cn } from "@/lib/utils"

export const linkClassname = "group/menu-item flex items-center text-md hover:text-blue-600 select-none gap-3 rounded-md p-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter group-hover:bg-transparent text-foreground focus-visible:text-brand-link transition-all duration-200"

export const linkActiveCheck = (pathname: string, href: string) => {
  return cn(
    linkClassname,
    {'text-blue-600': href.length===1 ? pathname===href : pathname.includes(href)}
  )
}