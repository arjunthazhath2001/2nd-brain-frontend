import { DeleteIcon } from "../icons/DeleteIcon";
import { NoteBook } from "../icons/Notebook";
import { ShareIcon } from "../icons/ShareIcon";

export function Card() {
  return (
    <div>
      <div className="bg-white p-8 border-slate-300 border-[1px] w-96 rounded-md">
        <div className="flex justify-between">
          <div className="flex justify-center gap-2 items-center">
            <NoteBook size="md" />
            Project Ideas
          </div>
          <div className="flex justify-center gap-4 items-center">
            <ShareIcon size="md" />
            <DeleteIcon size="md" />
          </div>
        </div>
        {/* <iframe className="w-full py-5" src="https://www.youtube.com/embed/Zs5xzQvmgl8?si=lvClooKah8jK804k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        <blockquote className="twitter-tweet">
          <a href="https://twitter.com/elonmusk/status/1903309208855929286"></a>
        </blockquote>
      </div>
    </div>
  );
}
