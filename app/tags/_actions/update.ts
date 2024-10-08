'use server'

import prismadb from "@/lib/prisma"
import { slugify } from "@/lib/utils"
import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
 
export async function updateTag(id: string, data: any) {
  
  const {name} = data
  await prismadb.tag.update({
    where: {
      id,
    },
    data: {
      name,
      slug: slugify(name)
    }
  })
  
  revalidatePath('/tags')
  revalidateTag('tags')
  redirect('/tags')
}