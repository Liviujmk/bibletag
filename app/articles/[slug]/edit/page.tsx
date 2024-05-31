import prismadb from "@/lib/prisma"
import { notFound } from 'next/navigation'
import EditArticle from "./components/edit-article"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export const revalidate = 0

export default async function EditArticlePage({
  params
}: ArticlePageProps) {
  const article = await prismadb.article.findFirst({
    where: {
      slug: params.slug
    },
    include: {
      tags: true
    }
  })
  
  if(!article) notFound()
  
  return (
    <EditArticle article={article}/>
  )
}