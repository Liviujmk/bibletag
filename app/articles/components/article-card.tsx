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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Article, Tag } from "@prisma/client";
import { deleteArticle } from "@/app/articles/actions/delete";
import { cn } from "@/lib/utils";

interface Props {
  article: Article & { tags: Tag[] }
}

const ArticleTags = ({ tags }: { tags: Tag[] }) => (
  <>
    <span key={tags[0]?.id} className="bg-blue-50 text-slate-600 font-light border px-2 rounded-md text-sm text-start">
      <Link href={`/tags/${tags[0]?.slug}`}>{tags[0]?.name}</Link>
    </span>
    {tags.slice(1).length ?
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="bg-blue-50 text-slate-600 font-light border px-2 rounded-md text-sm">
              +{tags.slice(1).length}
            </span>
          </TooltipTrigger>
          <TooltipContent>
            {tags.slice(1).map((tag: Tag, index) => index===tags.length-2 ? <Link href={`/tags/${tag.slug}`} key={tag.id}>{tag.name}</Link> :<Link href={`/tags/${tag.slug}`} key={tag.id}>{tag.name}  |  </Link>)}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      : null}
  </>
)

export const ArticleCard = ({ article }: Props) => {
  async function deleteArticleFn() {
    toast.promise(deleteArticle(article.id), {
      loading: 'Deleting article',
      success: 'Article has been deleted',
      error: 'Article could not be deleted'
    })
  }
  const formattedDate = new Date(article.createdAt).toLocaleDateString('en-DE', {
    year: 'numeric',
    day: 'numeric',
    month: "long"
  })

  return (
    <div className={cn('border rounded-2xl hover:-translate-y-1 transition duration-150 ease-in-out', article.title.length > 27 ? 'sm:col-span-2' : '')}>
      <div className="p-5 flex flex-col h-full justify-between">
        <div>
          <div className="flex mb-4 justify-between items-center gap-1">
            <div className="flex gap-1 flex-wrap">
              <ArticleTags tags={article?.tags && article.tags} />
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
            <h3 className="text-3xl text-left text-slate-900"><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3>
          </div>
        </div>
        <span className="mt-4 flex w-full text-start text-slate-500 font-light text-sm">{formattedDate}</span>
      </div>
    </div>
  )
}