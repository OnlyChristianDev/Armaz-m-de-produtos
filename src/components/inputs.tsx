export default function Inputs( { type, value, placeholder, onChange } ){
    return(
        <input className="outline-none border-2 bg-transparent w-80 pl-2 rounded-md h-10 border-gray-300" type={type} value={value} placeholder={placeholder} onChange={onChange} />
    )
}