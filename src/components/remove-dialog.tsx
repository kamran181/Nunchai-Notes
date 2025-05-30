"use client"

import { useMutation } from "convex/react";
import { Id } from "../../convex/_generated/dataModel"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { toast } from "sonner";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface RemoveDialogProps {
  documentId :Id<"documents">;
  children:React.ReactNode;
}

export const RemoveDialog = ({documentId , children}:RemoveDialogProps)=>{
    const remove = useMutation(api.documents.removeById);
    const [isRemoving , setIsRemoving] = useState(false);
    const router = useRouter();
 return (
    
    <AlertDialog>
        <AlertDialogTrigger asChild>
           {children}
        </AlertDialogTrigger>
        <AlertDialogContent onClick={(e)=>e.stopPropagation()}>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Are you sure?
                </AlertDialogTitle>
                <AlertDialogDescription>
                   This action cannot be undone.This document will be deleted permanenty.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel onClick={(e)=>e.stopPropagation()}>
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                 disabled={isRemoving}
                 onClick={(e)=>{
                    e.stopPropagation();
                    setIsRemoving(true)
                    remove({id:documentId})
                    .finally(()=>setIsRemoving(false))
                    .catch(()=>toast.error("Something went wrong"))
                    .then(()=> {
                        toast.success("Document removed")
                        router.push(`/`)
                    })
                 }}
                >
                    Delete
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
 )
}