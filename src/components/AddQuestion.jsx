"use client";
import { BsQuestionCircleFill } from "react-icons/bs";
import HiArrowCircleUpButton from "./HiArrowCircleUpButton";
import HiArrowCircleDownButton from "./HiArrowCircleDownButton";
import InputPrincipal from "./InputPrincipal";
import ButttonGenerateQuestion from "./ButtonGenareteQuestion"
import { useState } from "react";

const AddQuestionComponent = () => {
  const [count, setCount] = useState(0); // Contador para la cantidad
  const [inputValue, setInputValue] = useState(""); // Estado del input
  const [showTooltip, setShowTooltip] = useState(false);
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
    <div className="flex flex-col gap-4  items-center justify-center">
      <div className="flex flex-row justify-center items-center gap-3">
      <InputPrincipal inputValue={inputValue} setInputValue={setInputValue} />
      <button 
            onMouseEnter={() => setShowTooltip(true)} 
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
          >
            <BsQuestionCircleFill className="text-gray-700 text-xl" />
          </button>
        
          {showTooltip && (
            <div className="absolute right-24 top-50 w-64 p-2 bg-gray-200 border border-gray-200 rounded shadow-lg text-sm text-black">
              Escribe un tema que describa las preguntas que deseas generar.
            </div>
          )}
      </div>
      
      <div className="flex gap-3 justify-center items-center">
        <p className=" text-black">Numero de preguntas:</p>
        <div className="flex justify-center items-center border-2 border-black text-black rounded-lg p-2 pt-1 pb-1">
          <p>{count}</p>
        </div>
        <div className="flex gap-5 items-center text-black">
          <HiArrowCircleUpButton onClick={incrementCount} />
          <HiArrowCircleDownButton onClick={decrementCount} />
        </div>
      </div>


      {/* Botón para generar preguntas */}
      <ButttonGenerateQuestion prompt={inputValue} cantidad={count} />

    </div>
  );
};

export default AddQuestionComponent;
