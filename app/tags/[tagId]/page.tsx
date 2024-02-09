import Link from "next/link"

interface TagPageProps {
  params: {
    tagId: string
  }
}

export default async function Tag({
  params
}: TagPageProps) {  
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-20 bg-slate-100 rounded-b-[40px]">
        <h1 className="mx-auto max-w-7xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          {params.tagId}
        </h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h3 className="mx-auto max-w-7xl font-display text-4xl font-medium tracking-tight text-slate-900">
          Related articles
        </h3>
        <div className="mx-auto max-w-7xl py-16">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
          </div>
        </div>
        <div className="mx-auto max-w-7xl font-display text-lg font-medium tracking-tight text-slate-900">
          <span className="px-5 py-3 bg-blue-800 text-white rounded-md">
            <Link href="/articles">All articles</Link>
          </span>
        </div>
      </div>
    </div>
  )
} 