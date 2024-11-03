interface PropsInput {
    type: string;
    value: number | string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
  }
  
  export default function Inputs({ type, value, placeholder, onChange, maxLength }: PropsInput) {
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (maxLength && event.target.value.length > maxLength) {
        event.target.value = event.target.value.slice(0, maxLength);
      }
      onChange(event);
    };
  
    return (
      <>
        <input
          className="outline-none border-2 bg-transparent w-[100%] pl-2 rounded-md h-10 border-gray-300"
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleInput}
        />
      </>
    );
  }
  