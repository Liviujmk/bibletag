'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import prismadb from "@/lib/prisma"
 
export async function deleteArticle(id: string) {
  await prismadb.article.delete({
    where: {id}
  })
  
  revalidatePath('/articles')
  redirect('/articles')
}