"use client";

import React from "react";
import FormCreator from "@/components/FormCreator";
import FormLink from "@/components/FormLink";
import QuestionInfoCard from "@/components/questionInfoCard";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "@/context/Form";


const GenerateForm = () => {
  //estados de las preguntas
  const { questions} = useForm();
  //estados del formulario
  const [formData, setFormData] = useState(null);
  
  //funcion que crea el formulario
  const handleFormCreated = (data) => {
    setFormData(data);
  };
  //formatear la respuesta de la ia  para las card
  const questionObject= Object.values(questions)
  // console.log(questionObject);
  const questionForm=questionObject[0]
  // console.log(questionForm);
  const questionArray=JSON.parse(questionForm)
  // console.log(questionArray);
  
  return (
    <div className="w-full h-full bg-gray-200 flex flex-col ">
      <div className="w-full h-32 bg-white shadow-lg flex items-center justify-center mb-[40px]">
        <h1 className="text-4xl">Formulario generado ✨</h1>
      </div>

      <div className="flex gap-[40px] flex-wrap">
        {questionArray[0][1].map((question, index) => (
          <QuestionInfoCard key={index} generatedQuestion={question} index={index+1}  />
        ))}
      </div>

      <FormCreator onFormCreated={handleFormCreated} />

      {formData ? <FormLink formData={formData}></FormLink> : null}
    </div>
  );
};

export default GenerateForm;
