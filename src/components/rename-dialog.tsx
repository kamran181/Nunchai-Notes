"use client"

import { useMutation } from "convex/react";
import { Id } from "../../convex/_generated/dataModel"
import { api } from "../../convex/_generated/api";
import { FormEvent, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface RenameDialogProps {
  documentId :Id<"documents">;
  initalTitle:string;
  children:React.ReactNode;
}

export const RenameDialog = ({documentId ,initalTitle, children}:RenameDialogProps)=>{
    const update = useMutation(api.documents.updateById);
    const [isUpdating , setIsUpdating ] = useState(false);
    const [isOpen ,setIsOpen]= useState(false);
    const [title ,setTitle]= useState(initalTitle)

    const onFormSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setIsUpdating(true);

        update({id:documentId , title :title.trim() || "Untitled"})
        .then(()=>setIsOpen(false))
        .finally(()=>setIsUpdating(false))

    }
 return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent onClick={(e)=>e.stopPropagation()}>
            <form onSubmit={onFormSubmit}>
                <DialogHeader>
                    <DialogTitle>
                        Rename document
                    </DialogTitle>
                    <DialogDescription>
                        Enter a new name for this document
                    </DialogDescription>
                </DialogHeader>
                <div className="my-4">
                 <Input
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)} 
                  placeholder="Document Name"
                 />
                </div>
                <DialogFooter>
                    <Button
                     type="button"
                     variant={"ghost"}
                     disabled={isUpdating}
                     onClick={(e)=>{
                      e.stopPropagation();
                      setIsOpen(false)
                     }}
                    >
                        Cancel
                    </Button>
                    <Button
                     type="submit"
                     disabled={isUpdating}
                     onClick={(e)=>
                    e.stopPropagation()}
                    >
                        Save
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
 )
}