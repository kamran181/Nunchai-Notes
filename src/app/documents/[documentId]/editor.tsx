'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Image from '@tiptap/extension-image'
import ImageResize from 'tiptap-extension-resize-image'
import Table from '@tiptap/extension-table'
import Link from '@tiptap/extension-link'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Underline from '@tiptap/extension-underline'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import { useEditorStore } from '@/store/use-editor-store'
import { FontSizeExtension } from '@/extensions/font-size'
import { LineHeightExtension } from '@/extensions/line-height'
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { useStorage } from '@liveblocks/react/suspense'
import { Ruler } from './ruler'
import { Threads } from './threads'


interface EditorProps {
  initialContent?: string | undefined;
}

export const Editor = ({initialContent}:EditorProps) => {
//zustand store
 const {setEditor} = useEditorStore();
 const liveblocks = useLiveblocksExtension({
  initialContent,
  offlineSupport_experimental:true
});
 const leftMargin = useStorage((root)=>root.leftMargin);
 const rightMargin = useStorage((root)=>root.rightMargin)

  const editor = useEditor({
    immediatelyRender:false,
    autofocus:true,
    onCreate({editor}) {
        setEditor(editor) 
    },
    onDestroy() {
        setEditor(null)  
    },
    onUpdate({editor}) {
        setEditor(editor) 
    },
    onSelectionUpdate({editor}) {
        setEditor(editor) 
    },
    onFocus({editor}) {
        setEditor(editor) 
    },
    onTransaction({editor}) {
        setEditor(editor) 
    },
    onBlur({editor}) {
        setEditor(editor) 
    },
    onContentError({editor}) {
        setEditor(editor) 
    },
    editorProps:{
      attributes:{
        style: `padding-left: ${leftMargin ?? 56}px; padding-right:${rightMargin ?? 56}px;`,
        class : "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
      }
    },
    extensions: [
        liveblocks,
        StarterKit.configure({
          history: false,
        }),
        FontSizeExtension,
        LineHeightExtension,
        Link.configure({
            openOnClick: false,
            autolink: true,
            defaultProtocol: 'https'
        }),
        Image,
        ImageResize,
        TaskList,
        TaskItem.configure({
          nested: true,
         }),
         Table.configure({
            resizable: true,
          }),
          TableRow,
          TableHeader,
          TableCell,
          Underline,
          FontFamily,
          TextStyle,
          Highlight.configure({ multicolor: true }),
          Color,
          TextAlign.configure({
            types: ['heading', 'paragraph'],
          })
    ],
  })

  return(
    <div className='size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible'>
      <Ruler/>
    <div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
      <EditorContent editor={editor} />
      <Threads editor={editor}/>
    </div>   
    </div>
  )
   
}


