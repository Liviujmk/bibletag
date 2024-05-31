"use client"

import { toast } from "sonner"
import {
  TrashIcon,
} from "@radix-ui/react-icons";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Tag } from "@prisma/client"
import { deleteTag } from "@/app/tags/_actions/delete"

export default function DeleteTag({ tag }: { tag: Tag }) {
  const onSubmit = async () => {
    await deleteTag(tag.id);
    toast.success('Tag has been deleted');
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <TrashIcon color="red" className="h-5 w-5 cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently tag
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}
