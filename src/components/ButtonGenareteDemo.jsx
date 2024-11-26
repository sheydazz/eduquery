import React from "react";
import { CreateIaQuestion } from "@/utils/createQuestionIa";

const ButtonGenerateDemo = ({ prompt, cantidad, onGenerate }) => {

  const handleGenerateQuestions = async () => {
    console.log(prompt)
    console.log(cantidad)
    //try {
      // Genera preguntas usando el prompt y la cantidad
      //const generatedQuestions = await CreateIaQuestion(prompt, cantidad);
      //console.log("Preguntas generadas:", generatedQuestions);
    //} catch (error) {
      //console.error("Error al generar preguntas:", error);

    //}
  };

  return (
    <div>
      <button onClick={handleGenerateQuestions}>generar preguntas con ia</button>
    </div>
  );
};

export default ButtonGenerateDemo;
