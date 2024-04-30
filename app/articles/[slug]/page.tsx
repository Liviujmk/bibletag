import prismadb from "@/lib/prisma"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default async function Article({
  params
}: ArticlePageProps) {
  const article = await prismadb.article.findFirst({
    where: {
      slug: params.slug
    }
  })

  
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-20 bg-slate-100 rounded-b-[40px]">
        <h1 className="mx-auto max-w-7xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          {article?.title}
        </h1>
      </div>
      <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div dangerouslySetInnerHTML={{
            __html: `${article?.body}`
        }} />
      </div>
    </div>
  )
}