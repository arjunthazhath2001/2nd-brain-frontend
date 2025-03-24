import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItem } from "./SidebarItem";

export function SideBar(){
    return <div className="h-screen bg-white border-r w-72 pt-5 pl-5 fixed top-0 left-0">
        <div className="text-2xl flex items-center text-purple-600 font-bold">
            <BrainIcon/>
            Brainly
        </div>
    <div className="pt-4 gap-6">
        <div className="hover:bg-gray-400 rounded-2xl mr-5 transition all duration-500"><SideBarItem icon={<TwitterIcon/>} text="Twitter"/></div>
        <div className="hover:bg-gray-400 rounded-2xl mr-5 py-2 transition all duration-500"><SideBarItem icon={<YoutubeIcon/>} text="Youtube"/></div>
    </div>
    </div>
}