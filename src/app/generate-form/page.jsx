"use client";
import React from "react";
import FormCreator from "@/components/FormCreator";
import FormLink from "@/components/FormLink";
import QuestionInfoCard from "@/components/questionInfoCard";
import { useState } from "react";
import { useForm } from "@/context/Form";
import Image from "next/image";
const GenerateForm = () => {
  const { questions } = useForm();
  const [formData, setFormData] = useState(null);

  const handleFormCreated = (data) => {
    setFormData(data);
  };

  return (
    <div className="w-full h-[100vh] flex flex-col">
      <div className="w-full h-[130px] bg-white shadow-lg flex items-center mb-[40px]">
        <Image 
        src="/assets/isologo.png"
        width={200}
        height={200}
        alt="Descripción de la imagen"/>
        <h1 className="text-3xl text-blue-700  font-bold  pl-0 justify-between">
          Preguntas generadas ✨
        </h1>
      </div>

      {questions.length === 0 ? (
        <div className="w-full max-w-md mx-auto px-4 py-8 text-center">
          <p className="text-blue-700 p-10 font-bold">
            No se han generado preguntas.
          </p>
        </div>
      ) : (
        <div className="flex gap-[40px] flex-wrap pl-4 pr-4 justify-center">
          {questions[1].map((question, index) => (
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
