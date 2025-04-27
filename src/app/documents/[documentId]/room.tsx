"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
    const params = useParams();

  return (
    <LiveblocksProvider publicApiKey={"pk_dev_qPHjjQE3Oxxp5fHa-ugopabyTaZK_p4Q0wLyTnh6vCUz0J4v8ysuhofGnZrq9Gxu"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}