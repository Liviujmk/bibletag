"use client"

import Link from "next/link"

export const Navbar = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between ">
        <h1 className="text-4xl">BibleTag</h1>
        <div className=" flex order-last gap-5">
          <Link href="/" className="block text-2xl underline border-l-pink-500">Home</Link>
          <Link href="/articles" className="block text-2xl underline border-l-pink-500">Articles</Link>
          <Link href="/categories" className="text-2xl underline border-l-pink-500">Categories</Link>
        </div>
      </div>
    </div>
  )
}