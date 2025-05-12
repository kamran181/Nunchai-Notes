import { auth } from "@clerk/nextjs/server";
import { Document } from "./document";
import { preloadQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";


interface DocumentIdPageProps {
    params: Promise<{documentId:Id<"documents">}>
};

const DocumentIdPage = async({params}:DocumentIdPageProps) => {
    const {documentId} = await params;

    const {getToken} = await auth();
    const token = await getToken({template:"convex"}) ?? undefined;

    if(!token){
      throw new Error("Unauthorized")
    }

    const preLoadedDocument = await preloadQuery(
      api.documents.getByID,
      {id:documentId},
      {token}
    )
  return (
    <Document  preLoadedDocument={preLoadedDocument}/>
  )
}

export default DocumentIdPage;