import Image from "next/image"
import Link from "next/link"
import { DocumnetInput } from "./document-input"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { FileIcon } from "lucide-react"

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
                    <MenubarTrigger>
                        File
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                         <FileIcon className="size-4 mr-2"/>
                          Save
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