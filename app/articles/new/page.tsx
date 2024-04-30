"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray  } from "react-hook-form"
import { z } from "zod"

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
import { toast } from "sonner"
import Tiptap from "@/app/articles/new/components/tiptap-editor"
import TagsSelect from "@/app/articles/new/components/tags-select"
import { create } from "@/app/create"

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  body: z.string().min(1, {
    message: "Body cannot be empty.",
  }),
  tags: z.string().array(),
})

export default function NewArticlePage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      tags: [],
      body: "",
    },
  })
  
  const { append, remove } = useFieldArray({
    control: form.control,
    name: 'tags' as never,
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.promise(create(data), {
      loading: 'Creating article',
      success: 'Article created successfully',
      error: 'Article could not be created'
    })
  }

  return (
    <div className="container mb-4">
      <h1 className="font-bold text-4xl text-center mt-16">New article</h1>
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
          <Button type="submit" className="w-full md:w-36 rounded-lg">Create article</Button>
        </form>
      </Form>
    </div>
  )
}
