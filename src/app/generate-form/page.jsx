"use client"
import React from 'react'
import FormCreator from "@/components/FormCreator";
import FormLink from "@/components/FormLink";
import { useRouter } from "next/navigation";
import QuestionInfoCard from "@/components/questionInfoCard";
import { useState } from 'react';
const GenerateForm = () => {
   // traer la data del queryparamet
    // const router = useRouter();
    // const generatedQuestions = router.query.data;
    // const generatedQuestionsJson = generatedQuestions ? JSON.parse(decodeURIComponent(dataString)) : null;
  
 //estados del formulario
 const [formData, setFormData] = useState(null);
 
 //listado de preguntas 
   const questionData =[
     {
       formTitle: "Cuestionario de Historia",
       formDescription: "Contesta las siguientes preguntas para evaluar tus conocimientos de historia."
     },
     [
       {
         title: "¿En qué año comenzó la Primera Guerra Mundial?",
         type: "RADIO",
         correctAnswer: "1914",
         options: ["1910", "1914", "1918", "1920"]
       },
       {
         title: "¿Quién fue el primer presidente de los Estados Unidos?",
         type: "RADIO",
         correctAnswer: "George Washington",
         options: ["Thomas Jefferson", "George Washington", "John Adams", "Abraham Lincoln"]
       },
       {
         title: "¿Cuál fue el imperio más grande de la historia?",
         type: "RADIO",
         correctAnswer: "Imperio Británico",
         options: ["Imperio Romano", "Imperio Otomano", "Imperio Británico", "Imperio Mongol"]
       },
       {
         title: "¿Quién fue el líder de la Revolución Cubana?",
         type: "RADIO",
         correctAnswer: "Fidel Castro",
         options: ["Che Guevara", "Fidel Castro", "Raúl Castro", "Camilo Cienfuegos"]
       },
       {
         title: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
         type: "RADIO",
         correctAnswer: "1776",
         options: ["1770", "1776", "1780", "1785"]
       }
     ]
   ]
   const handleFormCreated = (data) => {
     setFormData(data);
   };
  
   return (
     <div className="w-full h-full bg-gray-200 flex flex-col ">
       <div className="w-full h-32 bg-white shadow-lg flex items-center justify-center mb-[40px]">
         <h1 className="text-4xl">Formulario generado ✨</ h1>
       </div>
       <div className="flex gap-[40px]">
       {
          questionData[1].map((question)=>(
           <QuestionInfoCard generatedQuestions={question} />
         ))
       }
    
       </div>
       <FormCreator onFormCreated={handleFormCreated} />
       {formData ? <FormLink formData={formData}></FormLink> : null}
     </div>
   );
}

export default GenerateForm