"use client"
import { useOthers ,useSelf} from "@liveblocks/react/suspense";
import { ClientSideSuspense} from "@liveblocks/react";
import { Separator } from "@/components/ui/separator";


const AVATAR_SIZE = 36;

export const Avatars =()=>{
    return(
        <ClientSideSuspense  fallback={null}>
            <AvatarStack />
        </ClientSideSuspense>
    )
}

const AvatarStack = ()=>{
    const users = useOthers();
    const currentUser = useSelf();

    if(users.length === 0) return null;

    return(
        <>
        <div className="flex items-center">
           {currentUser &&(
            <div className="relative ml-2">
                <Avatar name="You" src={currentUser.info.avatar} />
            </div>
           )}
        </div>
         <div className="flex">
            {users.map(({connectionId , info})=>{
            return(
                <Avatar key={connectionId} name={info.name} src={info.avatar}/>
            )
            })}

         </div>
         <Separator orientation="vertical" className="h-6" />
        </>
    )

}

interface AvatarProps {
    name :string;
    src:string
}

const Avatar = ({name,src}:AvatarProps)=>{
  return(
    <div
     style={{width:AVATAR_SIZE ,height:AVATAR_SIZE}}
     className="group -ml-2 shrink-0 flex place-content-center relative border-4 border-white rounded-full bg-gray-400"
     >
        <div className="opacity-0 group-hover:opacity-100 absolute top-full py-1 px-2 text-white text-xs rounded-lg mt-2.5 z-10 bg-black whitespace-nowrap transition=opacity">
          {name}
        </div>
        <img
         alt={name}
         src={src}
         className="size-full rounded-full"
        />
    </div>

  )
}