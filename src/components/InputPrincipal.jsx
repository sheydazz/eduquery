"use client";

const InputPrincipal = ({ inputValue, setInputValue }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="escribe un tema "
        className=" border rounded-md text-black p-4 w-96"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
    </div>
  );
};

export default InputPrincipal;
