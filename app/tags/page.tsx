import { Tag } from "@prisma/client";

import prismadb from "@/lib/prisma";
import TagCard from "./components/tag-card";

export default async function Tags() {
  const tags = await prismadb.tag.findMany()
  if(!tags) return null
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32 bg-slate-100 rounded-b-[40px]">
        <h1 className="mx-auto max-w-7xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          All tags
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg tracking-tight text-slate-700">
          Search tags by a tag topic such as relationships, attributes of God, Jesus, The Church, etc.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <div className="mx-auto max-w-7xl py-16">
          <div className="flex flex-wrap gap-5 p-2 justify-center">
            {
              tags.map((tag: Tag) => (<TagCard tag={tag} key={tag.id} />))
            }
          </div>
        </div>
      </div>
    </>
  )
}