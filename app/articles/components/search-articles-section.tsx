import React from 'react'

import Search from "@/app/articles/components/search-articles-input";

function SearchArticlesSection() {
  return (
    <>
      <div className="flex flex-col mx-auto max-w-80 gap-2.5">
        <h3 className="mx-auto max-w-7xl font-display text-4xl font-medium tracking-tight text-slate-900">
          Search articles
        </h3>
        <Search />
      </div>
    </>
  )
}

export default SearchArticlesSection