import {BsCloudCheck} from "react-icons/bs"

interface DocumnetInputProps{
    title:string,
    id:string
}

export const DocumnetInput = ({title,id}:DocumnetInputProps)=>{
    return (
        <div className="flex items-center gap-2">
            <span className="text-lg px-1.5 cursor-pointer truncate">{title}</span>
            <BsCloudCheck/>
        </div>
    );
}