import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { BACKEND_URL } from "../config";
import axios from "axios";


enum ContentType{
  Youtube = "video",
  Twitter = "tweet"
}

export function CreateContentModal({open, onClose}:{open:boolean,onClose:()=>void}) {
  const titleRef= useRef<HTMLInputElement>(null)
  const linkRef= useRef<HTMLInputElement>(null)
  const tagRef= useRef<HTMLInputElement>(null)  
  const [type,setType]= useState(ContentType.Youtube)


  async function addContent(){
    const title = titleRef.current?.value
    const link = linkRef.current?.value
    const listOftags = tagRef.current?.value
    const tags= listOftags?.split(',')
    await axios.post(`${BACKEND_URL}/api/v1/content`,{
      title,
      link,
      tags,
      type},
      {
      headers:{
        Authorization: localStorage.getItem("token")
      }
    })
    alert("You have added content")
    onClose()

  } 
  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed bg-black/40 top-0 left-0 flex  justify-center transition duration-500">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-5 rounded-md flex flex-col gap-5">
                <div className="flex justify-end cursor-pointer" onClick={onClose}>
                    <CrossIcon/>
                </div>
                <div>
                    <InputBox ref={titleRef} placeholder="Title"/>
                    <InputBox ref={linkRef} placeholder="Link"/>
                    <InputBox ref={tagRef} placeholder="Tags"/>
                </div>
                <div className="pb-5 flex flex-col justify-center">
                <h1 className="text-lg">Type</h1>
                <div className="flex gap-3">
                  <Button text="Youtube" variant={type==ContentType.Youtube?'primary':'secondary'} size="large" onClick={()=>setType(ContentType.Youtube)}/>
                  <Button text="Twitter" variant={type==ContentType.Twitter?'primary':'secondary'} size="large" onClick={()=>setType(ContentType.Twitter)}/>
                </div>
                </div>
                <div className="flex items-center justify-center">
                    <Button onClick={addContent} variant="primary" size="medium" text="SUBMIT"/>
                </div>

            </span>
          </div>
        </div>
      )}
    </div>
  );
}
