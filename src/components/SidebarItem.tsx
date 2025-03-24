import { ReactElement } from "react";

export function SideBarItem({text,icon}:{
    text:string,
    icon:ReactElement
}){
    return <div className="flex justify-start items-center">
       <div>{icon}</div>  
       <div>{text}</div>
    </div>

}