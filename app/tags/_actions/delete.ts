'use server'

import prismadb from "@/lib/prisma"
import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
 
export async function deleteTag(id: string) {
  await prismadb.tag.delete({
    where: {
      id,
    }
  })
  
  revalidatePath('/tags')
  revalidateTag('tags')
  redirect('/tags')
}