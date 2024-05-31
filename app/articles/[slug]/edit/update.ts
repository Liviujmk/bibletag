'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import prismadb from "@/lib/prisma"
import { slugify } from "@/lib/utils"
 
export async function update(id: string, data: any) {
  console.log(data)
  const {body, title, tags} = data
  await prismadb.article.update({
    where: {
      id,
    },
    data: {
      body,
      title,
      slug: slugify(title),
      tags: {
        set: [],
        connect: tags.map((tag: string)=> {
          return {
            name: tag,
          }
        })
      }
    },
  })
  
  revalidatePath('/')
  revalidatePath('/articles')
  redirect('/articles')
}