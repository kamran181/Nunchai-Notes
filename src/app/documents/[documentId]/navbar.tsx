"use client"
import Image from "next/image"
import Link from "next/link"
import { DocumnetInput } from "./document-input"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@/components/ui/menubar"
import { BoldIcon, FileIcon, FileJsonIcon, FilePenIcon, FilePlusIcon, FileTextIcon, GlobeIcon, ItalicIcon, PrinterIcon, RedoIcon, RemoveFormattingIcon, StrikethroughIcon, TextIcon, TrashIcon, UnderlineIcon, UndoIcon } from "lucide-react"
import { BsFilePdf } from "react-icons/bs"

export const Navbar = ()=>{
 return (
    <nav className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
            <Link href="/">
            <Image src="/logo.svg" alt="Logo"  width={36} height={36} />
            </Link> 
            <div className="flex flex-col">
            <DocumnetInput /> 
            <div className="flex">
              <Menubar className="border-none bg-transparent shadow-none p-0 h-auto">
                 <MenubarMenu>
                    <MenubarTrigger className="text-sm py-0.5 font-normal px--[7px] rounded-r-sm h-auto hover:bg-muted">
                        File
                    </MenubarTrigger>
                    <MenubarContent className="print:hidden">
                        <MenubarSub>
                          <MenubarSubTrigger>
                          <FileIcon className="size-4 mr-2"/>
                            Save
                          </MenubarSubTrigger>
                          <MenubarSubContent>
                          <MenubarItem>
                            <FileJsonIcon className="size-4 mr-2" />
                            Json
                          </MenubarItem>
                          <MenubarItem>
                            <GlobeIcon className="size-4 mr-2" />
                             HTML 
                          </MenubarItem>
                          <MenubarItem>
                            <BsFilePdf className="size-4 mr-2" />
                             HTML 
                          </MenubarItem>
                          <MenubarItem>
                            <FileTextIcon className="size-4 mr-2" />
                             Text 
                          </MenubarItem>
                          </MenubarSubContent>
                        </MenubarSub>
                        <MenubarItem>
                            <FilePlusIcon className="size-4 mr-2" />
                             New Document 
                        </MenubarItem>
                        <MenubarSeparator/>
                        <MenubarItem>
                            <FilePenIcon className="size-4 mr-2" />
                             Rename 
                        </MenubarItem>
                        <MenubarItem>
                            <TrashIcon className="size-4 mr-2" />
                             Remove 
                        </MenubarItem>
                        <MenubarSeparator/>
                        <MenubarItem onClick={()=>window.print()}>
                            <PrinterIcon className="size-4 mr-2" />
                             Print <MenubarShortcut>⌘P</MenubarShortcut> 
                        </MenubarItem>

                    </MenubarContent>
                 </MenubarMenu>

                 <MenubarMenu>
                    <MenubarTrigger  className="text-sm py-0.5 font-normal px--[7px] rounded-r-sm h-auto hover:bg-muted">
                        Edit
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            <UndoIcon className="mr-2 size-4"/>
                            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                            <RedoIcon className="mr-2 size-4"/>
                            Redo <MenubarShortcut>⌘Y</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                 </MenubarMenu>

                 <MenubarMenu>
                    <MenubarTrigger  className="text-sm py-0.5 font-normal px--[7px] rounded-r-sm h-auto hover:bg-muted">
                        Insert
                    </MenubarTrigger>
                    <MenubarContent>
                    <MenubarSub>
                        <MenubarSubTrigger>
                            Table
                        </MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>
                                 1 x 1
                            </MenubarItem>
                            <MenubarItem>
                                 2 x 2
                            </MenubarItem>
                            <MenubarItem>
                                 3 x 3
                            </MenubarItem>
                            <MenubarItem>
                                 4 x 4
                            </MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    </MenubarContent>
                 </MenubarMenu>

                 <MenubarMenu>
                    <MenubarTrigger  className="text-sm py-0.5 font-normal px--[7px] rounded-r-sm h-auto hover:bg-muted">
                        Format
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarSub>
                            <MenubarSubTrigger>
                                <TextIcon className="size-4 mr-2"/>
                                Text
                            </MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>
                                    <BoldIcon className="size-4 mr-2"/>
                                    Bold <MenubarShortcut>⌘Y</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem>
                                    <ItalicIcon className="size-4 mr-2"/>
                                    Italic <MenubarShortcut>⌘I</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem>
                                    <UnderlineIcon className="size-4 mr-2"/>
                                    Underline <MenubarShortcut>⌘U</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem>
                                    <StrikethroughIcon className="size-4 mr-2"/>
                                    <span>Strikethrough</span> <MenubarShortcut>⌘S</MenubarShortcut>
                                </MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                        <MenubarItem>
                            <RemoveFormattingIcon className="size-4 mr-2"/>
                            Clear formatting
                        </MenubarItem>
                    </MenubarContent>
                 </MenubarMenu>
              </Menubar>
            </div>
            </div>
        </div>        
    </nav>
 )
}