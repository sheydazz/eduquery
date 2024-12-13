import React from "react";
import { CreateIaQuestion } from "@/utils/createQuestionIa";

const ButtonGenerateDemo = ({ prompt, cantidad, onGenerate }) => {
  const handleGenerateQuestions = async () => {
    try {
      // Genera preguntas usando el prompt y la cantidad
      const generatedQuestions = await CreateIaQuestion(prompt, cantidad);
    } catch (error) {
      console.error("Error al generar preguntas:", error);
    }
  };

  return (
    <div>
      <button onClick={handleGenerateQuestions}>Generar preguntas</button>
    </div>
  );
};

export default ButtonGenerateDemo;
