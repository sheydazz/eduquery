"use client"

const InputPrincipal = ({inputValue, setInputValue, onEnter}) => {
    console.log(inputValue)
    return(
        <div>
      
        <input
          type="text"
          placeholder="Ingresa tu prompt"
          className="opacity-30 border-none rounded-md text-black p-4 w-96"
          value = {inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={onEnter}   
        
        />
  
      </div>
    )
}

export default InputPrincipal;