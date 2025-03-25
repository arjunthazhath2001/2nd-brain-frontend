import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from 'axios'

// Define the content item interface
export interface ContentItem {
  title: string;
  link: string;
  type: "video" | "tweet";
  // Add any other properties your API returns
}

function useContent() {
    // Properly type your state
    const [content, setContent] = useState<ContentItem[]>([])

    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/content`, {            
            headers: {
                Authorization: localStorage.getItem("token")
            }            
        })
        .then((response) => setContent(response.data.contents))
        .catch(err => console.error("Error fetching content:", err))
    }
    useEffect(() => {
        refresh()

        let interval= setInterval(()=>{refresh()},3000)

        return()=>{
            clearInterval(interval)
        }
        
    }, [])
    
    return {content,refresh}
}

export default useContent