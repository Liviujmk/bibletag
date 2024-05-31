"use client"

import { Article, Tag } from "@prisma/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray  } from "react-hook-form"
import { z } from "zod"
import { useParams } from 'next/navigation'
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Tiptap from "@/app/articles/new/components/tiptap-editor"
import TagsSelect from "@/app/articles/new/components/tags-select"

import { update } from "@/app/articles/[slug]/edit/update"

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  body: z.string().min(1, {
    message: "Body cannot be empty.",
  }),
  tags: z.string().array(),
})

interface EditArticleProps {
  article: Article & {
    tags: Tag[]
  }
}

export default function EditArticle({article}: EditArticleProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: article.title,
      tags: [...article.tags.map((tag) => tag.name)],
      body: article.body,
    },
  })
  
  const { append, remove } = useFieldArray({
    control: form.control,
    name: 'tags' as never,
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.promise(update(article.id, data), {
      loading: 'Updating article',
      success: 'Article updated successfully',
      error: 'Article could not be updated'
    })
  }

  return (
    <div className="container mb-4">
      <h1 className="font-bold text-4xl text-center mt-16">Update article</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 w-full max-w-[900px] mx-auto space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Add a title to your article" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <TagsSelect tags={field.value} append={append} remove={remove} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Body</FormLabel>
                <FormControl>
                  <Tiptap content={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full md:w-36 rounded-lg">Update article</Button>
        </form>
      </Form>
    </div>
  )
}
