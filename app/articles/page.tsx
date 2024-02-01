import Link from "next/link";

export default async function Articles() {
  return (
    <>
      <h1 className="text-6xl mb-24">Articles</h1>
      <Link href="/articles/asd">Go to ASD</Link>
    </>
  )
} 