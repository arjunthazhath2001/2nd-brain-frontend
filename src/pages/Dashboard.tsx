import { useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { SideBar } from "../components/Sidebar"

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
    <SideBar/>
    <div className="p-10 min-h-screen bg-gray-100">
      <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false)
      }}/>
      <div className="flex gap-4 justify-end">
        <Button  startIcon={<ShareIcon size="lg"/>} variant="primary" text="Share Brain" size="medium"/>
        <Button onClick={()=>setModalOpen(true)} startIcon={<PlusIcon size="lg"/>} variant="secondary" text="Add to Brain" size="medium"/>
      </div>
      <div className="flex gap-4 justify-end my-8">
        <Card title="HARKIRAT VIDEO" type="youtube" link="https://youtu.be/FBuNwgDLbRY?si=-KwgGK_z4sityJg6"/>
        <Card title="ELON" type="tweet" link="https://x.com/abhisheknaiidu/status/1903726371425362235"/>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
