"use client";

import HiArrowCircleUpButton from "./HiArrowCircleUpButton";
import HiArrowCircleDownButton from "./HiArrowCircleDownButton";
import InputPrincipal from "./InputPrincipal";
import ButtonGenerateDemo from "./ButtonGenareteDemo"; // Importamos el botón

import { useState } from "react";

const AddQuestionComponent = () => {
  const [count, setCount] = useState(0); // Contador para la cantidad
  const [inputValue, setInputValue] = useState(""); // Estado del input

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => count > 0 && setCount(count - 1);

  const handleGenerateQuestions = () => {
    // Aquí puedes guardar las variables y realizar las acciones necesarias
    console.log("Prompt:", inputValue);
    console.log("Cantidad:", count);

    // Redirigir o enviar los datos, por ejemplo:
    window.location.href = `/?prompt=${encodeURIComponent(inputValue)}&cantidad=${encodeURIComponent(count)}`;
  };

  return ( 
    <div className="flex flex-col gap-4">
      <InputPrincipal inputValue={inputValue} setInputValue={setInputValue} />
      <div className="flex gap-3">
        <div className="flex justify-center items-center border-2 border-white rounded-lg px-4 py-2">
          <p>{count}</p>
        </div>
        <div className="flex gap-5 items-center">
          <HiArrowCircleUpButton onClick={incrementCount} />
          <HiArrowCircleDownButton onClick={decrementCount} />
        </div>
      </div>


      {/* Botón para generar preguntas */}
      <ButtonGenerateDemo prompt={inputValue} cantidad={count} onGenerate={handleGenerateQuestions} />

    </div>
  );
};

export default AddQuestionComponent;
