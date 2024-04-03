
import { Article } from "@prisma/client";
import { ArticleCard } from "./article-card";

interface Props {
  articles?: Article[]
}

export const ArticlesList = ({articles}: Props) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 text-center">
      <div className="mx-auto max-w-7xl py-16">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(6)].map((article: Article) => (
            <ArticleCard key={article?.id ?? 'asd'} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}