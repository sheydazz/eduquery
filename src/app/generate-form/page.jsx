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

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col">
      <div className="w-full h-32 bg-white shadow-lg flex items-center justify-center mb-[40px]">
        <h1 className="text-4xl text-blue-700 p-10 font-bold ">Formulario generado ✨</h1>
      </div>

      {questions.length === 0 ? (

        <div className="w-full max-w-md mx-auto px-4 py-8 text-center">
          <p className="text-blue-700 p-10 font-bold">No se han generado preguntas.</p>

        </div>
      ) : (
        <div className="flex gap-[40px] flex-wrap pl-4 pr-4 justify-center">
          {questions.map((question, index) => (
            <QuestionInfoCard 
              key={index} 
              generatedQuestion={question} 
              index={index + 1} 
            />
          ))}
          <FormCreator onFormCreated={handleFormCreated} />
          {formData && <FormLink formData={formData} />}
        </div>
      )}
    </div>
  );
};

export default GenerateForm;