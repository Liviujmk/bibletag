"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Underline from '@tiptap/extension-underline'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import Blockquote from '@tiptap/extension-blockquote'
import ListItem from '@tiptap/extension-list-item'
import Placeholder from '@tiptap/extension-placeholder'

import Toolbar from "./tiptap-toolbar";

interface Props {
  onChange: (richText: string) => void
  content: string,
}

import { mergeAttributes } from '@tiptap/core'

type Levels = 1 | 2 | 3

const classes: Record<Levels, string> = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
}

const Tiptap = ({ onChange, content }: Props) => {
  const handleChange = (richText: string) => {
    onChange(richText);
  };
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Heading.configure({
        levels: [1, 2, 3, 4]
      }).extend({
        renderHTML({ node, HTMLAttributes }) {
          const hasLevel = this.options.levels.includes(node.attrs.level)
          const level: Levels = hasLevel ? node.attrs.level : this.options.levels[0]

          return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
              class: `${classes[level]}`,
            }),
            0,
          ]
        },
      }),
      Underline,
      BulletList.configure({
        HTMLAttributes: {
          class: 'ml-4 list-disc w-auto',
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: 'ml-4 list-decimal w-auto',
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: 'pl-3 border-l-2 border-slate-200',
        },
      }),
      ListItem,
      Placeholder.configure({
        placeholder: 'Write something...',
        emptyNodeClass: 'float-left text-muted-foreground h-0 pointer-events-none before:content-[attr(data-placeholder)]',
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "min-h-[350px] border border-input bg-transparent px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
    content,
    onUpdate: ({ editor }) => {
      if(editor.getHTML() === "<p></p>") {
        handleChange('');
      } else
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full">
      <Toolbar editor={editor} />
      <div className="flex flex-col justify-stretch min-h-[350px]">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;