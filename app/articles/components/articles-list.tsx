'use client'

import { Article, Tag } from "@prisma/client";

import { ArticleCard } from "@/app/articles/components/article-card";

interface Props {
  articles?:  (Article& {tags: Tag[]})[]
}

export const ArticlesList = ({articles}: Props) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <div className="mx-auto max-w-7xl py-16">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {articles?.map((article) => (
            <ArticleCard key={article?.id ?? 'asd'} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}