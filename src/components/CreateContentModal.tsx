import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";

export function CreateContentModal({open, onClose}:{open:boolean,onClose:()=>void}) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed bg-black/40 top-0 left-0 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-5 rounded-md flex flex-col gap-5">
                <div className="flex justify-end cursor-pointer" onClick={onClose}>
                    <CrossIcon/>
                </div>
                <div>
                    <InputBox placeholder="Title"/>
                    <InputBox placeholder="Link"/>
                </div>
                <div className="flex items-center justify-center">
                    <Button variant="primary" size="medium" text="SUBMIT"/>
                </div>

            </span>
          </div>
        </div>
      )}
    </div>
  );
}
