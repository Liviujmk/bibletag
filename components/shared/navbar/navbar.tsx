"use client"

import Link from "next/link"
import { Plus, BarChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileNavbar } from "@/components/shared/navbar/mobile-navbar"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { linkActiveCheck } from "./links"

export const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className="sticky top-0 z-40 border-b bg-white">
      <div className="relative flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20">
        <div className="flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between">
          <div className="flex items-center">
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className=" text-4xl block w-auto focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:ring-offset-4 focus-visible:ring-offset-background-alternative focus-visible:rounded-sm">
                <h1>BibleTag</h1>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <MobileNavbar />
            <nav className="relative z-10 flex-1 items-center justify-center hidden pl-8 sm:space-x-4 lg:flex h-16">
              <ul className="group flex flex-1 list-none items-center justify-center">
                <li className="font-medium">
                  <Link href="/" className={linkActiveCheck(pathname, '/')}>Home</Link>
                </li>
                <li className="font-medium">
                  <Link href="/articles" className={linkActiveCheck(pathname, 'articles')}>Articles</Link>
                </li>
                <li className="font-medium">
                  <Link href="/tags" className={linkActiveCheck(pathname, 'tags')}>Tags</Link>
                </li>
                <li className="ml-5 font-medium flex gap-2">
                  <Link href="/articles/new">
                    <Button className="py-4 pl-3 pr-4 rounded-lg">
                      <Plus className="mr-1.5 w-5" />
                      New article
                    </Button>
                  </Link>
                  <Link href="/tags/new">
                    <Button variant="outline" className="py-4 pl-3 pr-4 rounded-lg">
                      <Plus className="mr-1.5 w-5" />
                      New tag
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}