import { DeleteIcon } from "../icons/DeleteIcon";
import { NoteBook } from "../icons/Notebook";
import { ShareIcon } from "../icons/ShareIcon";

interface CardProps{
    title: string,
    link: string,
    type: "youtube" | "tweet"
}
export function Card({title,link,type}: CardProps) {
  return (
    <div>
      <div className="bg-white p-8 border-slate-300 border-[1px] w-96 rounded-md min-h-70">
        <div className="flex justify-between">
          <div className="flex justify-center gap-2 items-center">
            <NoteBook size="md" />
            <p className="font-semibold text-xl font-sans-">{title}</p>
          </div>
          <div className="flex justify-center gap-4 items-center">
            <a href={link} target="_blank"><ShareIcon size="md" /></a>
            <DeleteIcon size="md" />
          </div>
        </div>{type==="youtube" && <iframe className="w-full py-5" src={link.replace('youtu.be','youtube.com/embed')} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>} 
        
        {type==="tweet"  &&  <blockquote className="twitter-tweet">
            <a href={link.replace('x.com','twitter.com')}></a>
        </blockquote>
}

      </div>
    </div>
  );
}
