import prismadb from "@/lib/prisma"

export async function GET() {
  const tags = await prismadb.tag.findMany();
 
  if(!tags) return Response.json({ tags: [] })
  
  return Response.json(tags)
}