import prismadb from "@/lib/prisma"

export const getArticles = async (query?: string) => {
  return await prismadb.article.findMany({
    where: {
      title: {
        contains: query,
        mode: 'insensitive'
      }
    },
    include: {
      tags: true
    },
    orderBy: {
      updatedAt: 'desc'
    }
  })
}
