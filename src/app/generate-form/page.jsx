"use client";
import React from "react";
import FormCreator from "@/components/FormCreator";
import FormLink from "@/components/FormLink";
import QuestionInfoCard from "@/components/questionInfoCard";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
const GenerateForm = () => {
  //estados del formulario
  const [formData, setFormData] = useState(null);

  const handleFormCreated = (data) => {
    setFormData(data);
  };

  // traer la data del queryparamet
  const searchParams = useSearchParams();
  const dataString = searchParams.get("prompt"); // Captura el valor del queryParam 'prompt'
  const decodedQueryParam  = decodeURIComponent(dataString)
  //parsear el objeto
  const parsedObject = JSON.parse(decodedQueryParam);
  // const cleanedResponse = JSON.parse(parsedObject.cleanedResponse);
  
  console.log(parsedObject);
 


   
  return (
    <div className="w-full h-full bg-gray-200 flex flex-col ">
      <div className="w-full h-32 bg-white shadow-lg flex items-center justify-center mb-[40px]">
        <h1 className="text-4xl">Formulario generado ✨</h1>
      </div>
       {/* Renderiza las tarjetas
       <div className="flex gap-[40px]">
        {questionData[1]?.map((question, index) => (
          <QuestionInfoCard key={index} generatedQuestions={question} />
        ))}
      </div> */}
      <FormCreator onFormCreated={handleFormCreated} />
      {formData ? <FormLink formData={formData}></FormLink> : null}
    </div>
  );
};

export default GenerateForm;
