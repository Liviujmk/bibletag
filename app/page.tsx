import Link from "next/link";
import prismadb from "@/lib/prisma";

import { ArticlesList } from "@/app/articles/components/articles-list";

export default async function Home() {
  const articles = await prismadb.article.findMany()
  
  if(!articles) return null
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32 bg-slate-100 rounded-b-[40px]">
        <h1 className="mx-auto max-w-7xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          BibleTag - Exploring the Scriptures: Insights and Reflections
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg tracking-tight text-slate-700">
          Search articles by a tag topic such as relationships, attributes of God, Jesus, The Church, etc.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h3 className="mx-auto max-w-7xl font-display text-4xl font-medium tracking-tight text-slate-900">
          Featured articles
        </h3>
        <ArticlesList articles={articles} />
        <div className="mx-auto max-w-7xl font-display text-lg font-medium tracking-tight text-slate-900">
          <span className="px-5 py-3 bg-blue-800 text-white rounded-md">
            <Link href="/articles">All articles</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
