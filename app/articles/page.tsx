import Link from "next/link";

export default async function Articles() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32 bg-slate-100 rounded-b-[40px]">
        <h1 className="mx-auto max-w-7xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          All articles
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg tracking-tight text-slate-700">
          Search articles by a tag topic such as relationships, attributes of God, Jesus, The Church, etc.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 text-center">
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
      </div>
    </>
  )
} 