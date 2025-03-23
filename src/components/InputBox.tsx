export function InputBox({onChange,placeholder}:{onChange:()=>void, placeholder:string}){
    return <div>
        <input placeholder={placeholder} onChange={onChange} type="text" className="px-4 py-2 border rounded-md m-2"></input>
    </div>
}