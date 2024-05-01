'use server'

import prismadb from "@/lib/prisma"
import { slugify } from "@/lib/utils"
import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
 
export async function createTag(data: any) {
  console.log(data)
  const {name} = data
  await prismadb.tag.create({
    data: {
      name,
      slug: slugify(name)
    }
  })
  
  revalidatePath('/tags')
  revalidateTag('tags')
  redirect('/tags')
}