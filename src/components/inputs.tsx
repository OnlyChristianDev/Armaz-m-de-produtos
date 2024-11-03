interface PropsInput{
    type : string,
    value : number | string, 
    placeholder : string,
    onChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Inputs( { type, value, placeholder, onChange, } : PropsInput ){
    return(
        <>
            <input maxLength={17} max={99} className="outline-none border-2 bg-transparent w-[100%] pl-2 rounded-md h-10 border-gray-300" type={type} value={value} placeholder={placeholder} onChange={onChange} />
        </>
       
    )
}