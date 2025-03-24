import { Button } from "../components/Button"
import { InputBox } from "../components/InputBox"

function Signup() {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
        
        <div className="w-72 h-80 bg-white rounded-xl border-slate-200 shadow gap-5 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Sign <span className="text-purple-600">Up</span></h1>
            <InputBox placeholder="Email"/>
            <InputBox placeholder="Password"/>
            <div>
                 <Button variant="primary" text="Submit" size="large"></Button>
            </div>
        </div>

    </div>
  )
}

export default Signup