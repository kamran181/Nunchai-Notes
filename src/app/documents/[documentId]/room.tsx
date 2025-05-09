"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { FullScreenLoader } from "@/components/fullscreen-loader";
import { getUsers } from "./action";
import { toast } from "sonner";

type User = { id : string ; name:string ; avatar:string }

export function Room({ children }: { children: ReactNode }) {
    const params = useParams();
    const [users , setUsers] = useState<User[]>([])

    const fetchUsers = useMemo(
     ()=> async()=>{
        try {
          const users = await getUsers();
          setUsers(users)
        } catch (error) {
          toast.error("Error while fetching users")
        }
      },[]
    );

    useEffect(()=>{
      fetchUsers()
    },[fetchUsers])

  return (
    <LiveblocksProvider
      throttle={16} 
      authEndpoint={"/api/liveblocks-auth"}
      resolveUsers={({userIds})=>{
        return userIds.map(
          (userId)=> users.find((user)=> user.id === userId) ?? undefined
        )
      }}
      resolveMentionSuggestions={({text})=>{
        let filteredUsers = users;

        if(text){
          filteredUsers.filter((user)=>{
            user.name.toLowerCase().includes(text.toLowerCase())
          })
        }

        return filteredUsers.map((user)=>user.id)
      }}
      resolveRoomsInfo={()=>[]}
      >
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<FullScreenLoader label="Room loading..."/>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}