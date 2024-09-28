import { merry400, merry300 } from "@/app/fonts"
import prismadb from "@/lib/prisma"
import { notFound } from 'next/navigation'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export const revalidate = 0

export default async function Article({
  params
}: ArticlePageProps) {
  const article = await prismadb.article.findFirst({
    where: {
      slug: params.slug
    }
  })
  if (!article) notFound()
  const formattedDate = new Date(article.createdAt).toLocaleDateString('en-DE', {
    year: 'numeric',
    day: 'numeric',
    month: "long"
  })

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-20 bg-slate-100 rounded-b-[40px]">
        <span className="text-sm font-sans font-normal text-gray-600">{formattedDate}</span>
        <h1 className="mx-auto max-w-7xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          {article?.title}
        </h1>
      </div>
      <div className="mt-8 mx-auto max-w-[750px] p-6 sm:px-6 lg:p-8">
        <div className={`text-lg tracking-wide`} dangerouslySetInnerHTML={{
          __html: `${article?.body}`
        }} />
      </div>
    </div>
  )
}