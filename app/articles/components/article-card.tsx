'use client'

import {
  DotsHorizontalIcon,
  EyeOpenIcon,
  Pencil1Icon,
  TrashIcon
} from "@radix-ui/react-icons";
import Link from "next/link";
import { toast } from "sonner"

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Article, Tag } from "@prisma/client";
import { deleteArticle } from "@/app/articles/actions/delete";

interface Props {
  article: Article & {tags: Tag[]}
}

export const ArticleCard = ({ article }: Props) => {
  async function deleteArticleFn() {
    toast.promise(deleteArticle(article.id), {
      loading: 'Deleting article',
      success: 'Article has been deleted',
      error: 'Article could not be deleted'
    })    
  }
  
  
  return (
    <div className="border rounded-xl hover:-translate-y-1 transition duration-150 ease-in-out">
      <div className="p-5">
        <div className="flex mb-4 justify-between items-start gap-1">
          <div className="flex gap-1 flex-wrap">
            {article.tags?.map((tag: Tag) =>
            <span key={tag.id} className="text-slate-500 font-light border px-2 rounded-md text-sm">
              <Link href={`/tags/${tag.slug}`}>{tag.name}</Link>
            </span>
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 -mt-1">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href={`/articles/${article.slug}`}>
                  <div className="flex gap-2 items-center">
                    <EyeOpenIcon className="h-4 w-4" />
                    View
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href={`/articles/${article.slug}/edit`}>
                  <div className="flex gap-2 items-center">
                    <Pencil1Icon className="h-4 w-4" />
                    Edit
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-600 hover:!bg-red-600 hover:!text-white" onClick={deleteArticleFn}>
                <div className="flex gap-2 items-center">
                  <TrashIcon className="h-4 w-4" />
                  Delete
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex">
          <h3 className="text-3xl text-left"><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3>
        </div>
      </div>
    </div>
  )
}