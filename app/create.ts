'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import prismadb from "@/lib/prisma"
import { slugify } from "@/lib/utils"
 
export async function create(data: any) {
  console.log(data)
  const {body, title, tags} = data
  await prismadb.article.create({
    data: {
      body,
      title,
      slug: slugify(title),
      tags: {
        connectOrCreate: tags.map((tag: string)=> {
          return {
            where: {name: tag},
            create: {name: tag, slug: slugify(tag)}
          }
        })
      }
    },
  })
  
  revalidatePath('/')
  revalidatePath('/articles')
  redirect('/articles')
}