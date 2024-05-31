'use client'

import { Tag } from "@prisma/client";
import Link from "next/link";
import EditTag from "./edit-tag";
import DeleteTag from "./delete-tag";

interface Props {
  tag: Tag
}

export default function TagCard({tag}: Props) {
  return (
    <span className="flex gap-3 text-slate-500 font-light border items-center justify-between px-3 py-1 rounded-3xl hover:bg-black transition-all duration-300 hover:text-white">
      <Link href={`/tags/${tag.slug}`}># {tag.name}</Link>
      <div className="flex gap-2 justify-between items-center">
        <EditTag tag={tag} />
        <DeleteTag tag={tag} />
      </div>
    </span>
  )
} 