"use client"
import { useState } from "react";
import InputPrincipal from "./InputPrincipal";

const PromptInput = () => {
  
  const [inputValue, setInputValue] = useState(""); // Estado para el valor actual
  const [submittedValue, setSubmittedValue] = useState(""); // Estado para el valor enviado

  const handleChangeInput = () => {
    console.log("entra")
  }
  // Maneja el evento al presionar una tecla
  const captura = (e) => {
    if (e.key === "Enter") {
      setSubmittedValue(inputValue); // Actualiza el valor enviado
      setInputValue(""); // Limpia el campo de texto si deseas
      console.log("Texto enviado:", inputValue); // Imprime el valor en la consola
    }
  };

  return (
    <div>
      <InputPrincipal 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        onEnter={captura}
        handleChangeInput={handleChangeInput} 
        text={"texto"}
      />
      <p>Texto capturado: {submittedValue}</p>
    </div>
  );
};

export default PromptInput;

