"use client"

import React from "react";
import { CreateIaQuestion } from "@/lib/createQuestionIa";
import { useRouter } from "next/router";

const ButtonGenerateDemo = ({ prompt, cantidad }) => {
  

  const handleGenerateQuestions = async () => {
    // console.log(prompt)
    // console.log(cantidad)
    try {
     // Genera preguntas usando el prompt y la cantidad
      const generatedQuestions = await CreateIaQuestion(prompt, cantidad);
      console.log("Preguntas generadas:", generatedQuestions);

         // Redirige a detalle-form con las preguntas generadas
         const queryParam = encodeURIComponent(JSON.stringify(generatedQuestions));
         console.log(queryParam);
         
         window.location.href = `generate-form/?prompt=${queryParam}`;
    } catch (error) {
      console.error("Error al generar preguntas:", error);

    }
    
  };

  return (
    <div>
      <button onClick={handleGenerateQuestions}>generar preguntas con ia</button>
    </div>
  );
};

export default ButtonGenerateDemo;
