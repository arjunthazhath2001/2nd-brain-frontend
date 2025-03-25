import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { SideBar } from "../components/Sidebar"
import useContent from "../hooks/useContent"
import { BACKEND_URL } from "../config"
import axios from "axios"

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {content,refresh} = useContent();
  
  useEffect(()=>{
    refresh
  },[modalOpen])
  return (
    <div>
      <SideBar/>
      <div className="p-10 min-h-screen bg-gray-100">
        <CreateContentModal open={modalOpen} onClose={()=>{
          setModalOpen(false)
        }}/>
        <div className="flex gap-4 fixed top-5 right-10 justify-end">
          <Button onClick={async()=>{
            const response= await axios.post(`${BACKEND_URL}/api/v1/share`,{}, // Empty request body
              {
                headers: {
                  Authorization: localStorage.getItem("token")
                }
              }
            );
            alert(`Your shareable link is: ${response.data.link}`)
          }} 
          startIcon={<ShareIcon size="lg"/>} variant="primary" text="Share Brain" size="medium"/>
          <Button onClick={()=>setModalOpen(true)} startIcon={<PlusIcon size="lg"/>} variant="secondary" text="Add to Brain" size="medium"/>
        </div>
        <div className="flex justify-end my-8">
          {/* For debugging */}
          {/* <div>{JSON.stringify(contents)}</div> */}
          <div className="grid grid-cols-2 gap-4">
          {content && content.length > 0 ? (
            content.map(({title,type,link},index) => (
              <Card
                key={index}
                title={title} 
                type={type} 
                link={link}
              />
            ))
          ) : (
            <p>No content available</p>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard