"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Underline from '@tiptap/extension-underline'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import Blockquote from '@tiptap/extension-blockquote'
import ListItem from '@tiptap/extension-list-item'
import HardBreak from '@tiptap/extension-hard-break'
import HorizontalRule from '@tiptap/extension-horizontal-rule'

import Toolbar from "./tiptap-toolbar";

interface Props {
  onChange: (richText: string) => void
  content: string,
}

import { mergeAttributes } from '@tiptap/core'
import { lato, merry300 } from "@/app/fonts";
import { replacePwithBr } from "@/lib/utils";

type Levels = 1 | 2 | 3

const classes: Record<Levels, string> = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
}

const Tiptap = ({ onChange, content }: Props) => {
  const handleChange = (richText: string) => {
    onChange(replacePwithBr(richText));
  };
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            class: `mb-6 ${merry300.className} text-[#333] text-lg tracking-normal leading-[180%]`,
          }
        },
        
      }),
      Heading.configure({
        levels: [1, 2, 3, 4]
      }).extend({
        renderHTML({ node, HTMLAttributes }) {
          const hasLevel = this.options.levels.includes(node.attrs.level)
          const level: Levels = hasLevel ? node.attrs.level : this.options.levels[0]

          return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
              class: `${classes[level]} mt-9 mb-4 ${lato.className} tracking-normal leading-[180%]`,
            }),
            0,
          ]
        },
      }),
      Underline,
      BulletList.configure({
        HTMLAttributes: {
          class: 'mb-6 ml-4 list-disc w-auto',
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: `mb-6 ml-4 list-decimal w-auto`,
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: 'mb-6 pl-3 border-l-4 border-slate-600 italic',
        },
      }),
      ListItem,
      HorizontalRule,
      HardBreak,
    ],
    editorProps: {
      attributes: {
        class:
          `${merry300.variable} font-sans3 text-md min-h-[350px] border border-input bg-transparent px-4 py-2 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50`,
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