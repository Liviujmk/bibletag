import Link from "next/link";

import { Article } from "@prisma/client";

interface Props {
  article: Article
}

export const ArticleCard = ({article}: Props) => {
  return (
    <div className="border rounded-lg">
    <div className="p-5">
      <div className="flex mb-4">
        <span className="text-slate-500 font-light border px-2 rounded-3xl">
          <Link href="/tags/viata">Viață</Link>
        </span>
      </div>
      <div className="flex">
        <h4 className="text-2xl"><Link href="/articles/despre-om">Despre Om</Link></h4>
      </div>
    </div>
  </div>
  )
}