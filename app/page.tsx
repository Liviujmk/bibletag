import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-8xl mb-10">BibleTag</h1>
      <Link href="/articles" className="block text-5xl underline border-l-pink-500">Articles</Link>
      <Link href="/categories" className="text-5xl underline border-l-pink-500">Categories</Link>
    </>
  );
}
