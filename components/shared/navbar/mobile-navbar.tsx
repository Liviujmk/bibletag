'use client'

import Link from "next/link"
import { Plus, BarChart } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"


export function MobileNavbar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <BarChart className="w-30 h-30 cursor-pointer -rotate-90 lg:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="w-full">
        <SheetHeader>
          <SheetTitle>
            <div className="flex">
              <Link onClick={() => setSheetOpen(false)} href="/" className="text-4xl block w-auto focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:ring-offset-4 focus-visible:ring-offset-background-alternative focus-visible:rounded-sm">
                <h1>BibleTag</h1>
              </Link>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <nav className="relative z-10 flex-1 items-center justify-center sm:space-x-4 flex">
            <ul className="group flex flex-1 flex-col list-none  justify-center">
              <li className="font-medium text-xl text-slate-800">
                <Link onClick={() => setSheetOpen(false)} href="/" className="group/menu-item flex items-center text-md hover:text-blue-600 select-none gap-3 rounded-md py-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter group-hover:bg-transparent text-foreground focus-visible:text-brand-link transition-all duration-200">Home</Link>
              </li>
              <li className="font-medium text-xl text-slate-800">
                <Link onClick={() => setSheetOpen(false)} href="/articles" className="group/menu-item flex items-center text-md hover:text-blue-600 select-none gap-3 rounded-md py-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter group-hover:bg-transparent text-foreground focus-visible:text-brand-link transition-all duration-200">Articles</Link>
              </li>
              <li className="font-medium text-xl text-slate-800">
                <Link onClick={() => setSheetOpen(false)} href="/tags" className="group/menu-item flex items-center text-md hover:text-blue-600 select-none gap-3 rounded-md py-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter group-hover:bg-transparent text-foreground focus-visible:text-brand-link transition-all duration-200">Tags</Link>
              </li>
              <li className="font-medium text-xl text-slate-800 flex flex-col gap-2 mt-6">
                <Link onClick={() => setSheetOpen(false)} href="/articles/new">
                  <Button className="py-5 pl-3 pr-4 rounded-lg w-full">
                    <Plus className="mr-1.5 w-5" />
                    New article
                  </Button>
                </Link>
                <Link onClick={() => setSheetOpen(false)} href="/tags/new">
                  <Button variant="outline" className="py-5 pl-3 pr-4 rounded-lg w-full">
                    <Plus className="mr-1.5 w-5" />
                    New tag
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
