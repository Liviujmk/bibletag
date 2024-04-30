import { Tag } from "@prisma/client";
import Link from "next/link";

interface Props {
  tag: Tag
}

export default async function TagCard({tag}: Props) {
  return (
    <span className="text-slate-500 font-light border px-3 py-1 rounded-3xl hover:bg-black transition-all duration-300 hover:text-white">
      <Link href={`/tags/${tag.slug}`}># {tag.name}</Link>
    </span>
  )
} 