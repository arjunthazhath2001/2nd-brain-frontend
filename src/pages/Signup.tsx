import { useRef } from "react"
import { Button } from "../components/Button"
import { InputBox } from "../components/InputBox"
import { BACKEND_URL } from "../config";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()
    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/signup`,{
                username,
                password
        })
        alert("You have signed up")
        navigate('/signin')

    }

  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
        
        <div className="w-72 h-80 bg-white rounded-xl border-slate-200 shadow gap-5 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Sign <span className="text-purple-600">Up</span></h1>
            <InputBox ref={usernameRef} placeholder="Username"/>
            <InputBox ref={passwordRef} placeholder="Password"/>
            <div>
                 <Button onClick={signup} variant="primary" text="Submit" size="large"></Button>
            </div>
        </div>

    </div>
  )
}

export default Signup