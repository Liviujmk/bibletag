interface ArticlePageProps {
  params: {
    articleId: string
  }
}

export default async function Article({
  params
}: ArticlePageProps) {  
  return (
    <h1 className="text-5xl m-20">{params.articleId}</h1>
  )
} 