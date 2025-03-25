import { BACKEND_URL } from "../config";
import axios from 'axios'
import { Button } from "../components/Button"
import { InputBox } from "../components/InputBox"
import { useRef } from "react"
import { useNavigate } from "react-router-dom";

function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate= useNavigate()
  async function signin(){
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;
      const response= await axios.post(`${BACKEND_URL}/api/v1/signin`,{
              username,
              password
      })
      const token= response.data.token
      localStorage.setItem("token",token)
      alert("You have signed in")
      navigate('/dashboard')

  }

  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
        
        <div className="w-72 h-80 bg-white rounded-xl border-slate-200 shadow gap-5 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Sign <span className="text-purple-600">In</span></h1>
            <InputBox ref={usernameRef} placeholder="Username"/>
            <InputBox ref={passwordRef} placeholder="Password"/>
            <div>
                 <Button onClick={signin} variant="primary" text="Submit" size="large"></Button>
            </div>
        </div>

    </div>
  )
}

export default Signin