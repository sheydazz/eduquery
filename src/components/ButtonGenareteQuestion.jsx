//componentes/buttonGenerateDemo
"use client";
import React from "react";
import { CreateIaQuestion } from "@/lib/createQuestionIa";
import { useForm } from "@/context/Form";
import { useRouter } from "next/navigation";

const ButtonGenerateQuestion = ({ prompt, cantidad }) => {
  const { questions, setQuestions } = useForm();
  const router = useRouter()
  
  const handleGenerateQuestions = async () => {
    try {
      //Genera preguntas usando el prompt y la cantidad
      const generatedQuestions = await CreateIaQuestion(prompt, cantidad);
      console.log("Preguntas generadas boton:", generatedQuestions);
      //agregar la respuesta generada al contexto
      setQuestions(generatedQuestions);
      //Redirige a detalle-form con las preguntas generadas
      router.push("/generate-form");
    } catch (error) {
      console.error("Error al generar preguntas:", error);
    }
  };
  React.useEffect(() => {
    console.log("Valor actualizado del contexto de questions:", questions);
  }, [questions]);

  return (

      <div>
        <button onClick={handleGenerateQuestions}>
          generar preguntas con ia
        </button>
      </div>
    
  );
};

export default ButtonGenerateQuestion;
