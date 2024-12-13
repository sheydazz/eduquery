"use client";
import React from "react";
import FormCreator from "@/components/FormCreator";
import FormLink from "@/components/FormLink";
import QuestionInfoCard from "@/components/questionInfoCard";
import { useState } from "react";
import { useForm } from "@/context/Form";

const GenerateForm = () => {
  const { questions } = useForm();
  const [formData, setFormData] = useState(null);

  const handleFormCreated = (data) => {
    setFormData(data);
  };

  //parsear preguntas para que tenga un formato adecuado
  const parseQuestions = () => {
    try {
      if (!questions || Object.keys(questions).length === 0) {
        console.error('NO hay preguntas');
        return [];
      }
  
      const questionObject = Object.values(questions);
      console.log('Question Object:', questionObject);
  
      const questionForm = questionObject[0];
      console.log('Question Form:', questionForm);
  
      const questionArray = JSON.parse(questionForm);
      console.log('Parsed Question Array:', questionArray);
  
      //devuelve un arry con la infromacion de las preguntas
      return questionArray[0][1]
    } catch (error) {
      console.error("Error parsing questions:", error);
      return [];
    }
  };

  const parsedQuestions = parseQuestions();

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col">
      <div className="w-full h-32 bg-white shadow-lg flex items-center justify-center mb-[40px]">
        <h1 className="text-4xl text-blue-700 p-10 font-bold ">Formulario generado ✨</h1>
      </div>

      <div className="flex gap-[40px] flex-wrap pl-4 pr-4 justify-center">
        {parsedQuestions.map((question, index) => (
          <QuestionInfoCard 
            key={index} 
            generatedQuestion={question} 
            index={index + 1} 
          />
        ))}
      </div>

      <FormCreator onFormCreated={handleFormCreated} />

      {formData && <FormLink formData={formData} />}
    </div>
  );
};

export default GenerateForm;