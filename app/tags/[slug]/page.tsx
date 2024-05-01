import Link from "next/link"

import prismadb from "@/lib/prisma";
import { ArticlesList } from "@/app/articles/components/articles-list";

interface TagPageProps {
  params: {
    slug: string
  }
}

export const revalidate = 0

export default async function Tag({
  params
}: TagPageProps) {  
  const articles = await prismadb.article.findMany({ 
    where: {
      tags: {
        some: {
          slug: {
            equals: params.slug,
          }
        }
      }
    },
    include: {tags: true} 
  })
  
  if(!articles) return null
  
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-20 bg-slate-100 rounded-b-[40px]">
        <h1 className="mx-auto max-w-7xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          {params.slug}
        </h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h3 className="mx-auto max-w-7xl font-display text-4xl font-medium tracking-tight text-slate-900">
          Related articles
        </h3>
        <ArticlesList articles={articles} />
      </div>
    </div>
  )
} 