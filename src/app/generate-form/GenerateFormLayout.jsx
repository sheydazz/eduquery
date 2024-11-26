import React from "react";
import FormCreator from "@/components/FormCreator";
import FormLink from "@/components/FormLink";
import { useState } from "react";
import QuestionInfoCard from "@/components/questionInfoCard";
// "use client"
const GenerateFormLayout = () => {
  const [formData, setFormData] = useState(null);

  const handleFormCreated = (data) => {
    setFormData(data);
  };
  return (
    <div className="w-full h-full bg-gray-200 flex flex-col ">
      <div className="w-full h-32 bg-white shadow-lg flex items-center justify-center mb-[40px]">
        <h1 className="text-4xl">Formulario generado ✨</h1>
      </div>
      <div className="flex gap-[40px]">
        <QuestionInfoCard />
        <QuestionInfoCard />
      </div>
      <FormCreator onFormCreated={handleFormCreated} />
      {formData ? <FormLink formData={formData}></FormLink> : null}
    </div>
  );
};
export default GenerateFormLayout;
