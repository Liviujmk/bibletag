"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export const Navbar = () => {
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
          <div className=" flex items-center gap-5">
            <nav className="relative z-10 flex-1 items-center justify-center hidden pl-8 sm:space-x-4 lg:flex h-16">
              <ul className="group flex flex-1 list-none items-center justify-center">
                <li className="font-medium">
                  <Link href="/" className="group/menu-item flex items-center text-md hover:text-blue-600 select-none gap-3 rounded-md p-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter group-hover:bg-transparent text-foreground focus-visible:text-brand-link transition-all duration-200">Home</Link>
                </li>
                <li className="font-medium">
                  <Link href="/articles" className="group/menu-item flex items-center text-md hover:text-blue-600 select-none gap-3 rounded-md p-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter group-hover:bg-transparent text-foreground focus-visible:text-brand-link transition-all duration-200">Articles</Link>
                </li>
                <li className="font-medium">
                  <Link href="/tags" className="group/menu-item flex items-center text-md hover:text-blue-600 select-none gap-3 rounded-md p-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter group-hover:bg-transparent text-foreground focus-visible:text-brand-link transition-all duration-200">Tags</Link>
                </li>
                <li className="ml-5 font-medium">
                  <Link href="/articles/new">
                    <Button className="py-4 pl-3 pr-4 rounded-lg">
                      <Plus className="mr-1.5 w-5" />
                      New article
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