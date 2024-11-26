//parte logica es la que se envia a llamar en el layout principal
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputPrincipal from "./InputPrincipal";

const PromptInput = ({ count }) => {
  const [inputValue, setInputValue] = useState(""); // Estado para el input
  const router = useRouter();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      // Redirige con ambos parámetros
      router.push(`/?prompt=${encodeURIComponent(inputValue)}&cantidad=${encodeURIComponent(count)}`);
      setInputValue(""); // Limpia el input después de enviar
    }
  };

  return (
    <div>
      <InputPrincipal 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        onEnter={handleEnter} 
      />
    </div>
  );
};

export default PromptInput;

