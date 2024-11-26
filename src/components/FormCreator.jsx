import React from "react";
import { useState } from "react";
import { SiGoogleforms } from "react-icons/si";
import { formatformInfo } from "@/lib/format-items";
import { formatQuestion } from "@/lib/format-items";

// Harcode data for tests
const dataFakeAI = [
  {
    formTitle: "Cuestionario de Ciencias",
    formDescription: "Responde las siguientes preguntas para evaluar tus conocimientos científicos."
  },
  [
    {
      title: "¿Cuál es el símbolo químico del agua?",
      type: "RADIO",
      correctAnswer: "H2O",
      options: [{'value': 'H2O'}, {'value': 'CO2'}, {'value': 'O2'}, {'value': 'H2'}]
    },
    {
      title: "¿Quién formuló la teoría de la relatividad?",
      type: "RADIO",
      correctAnswer: "Albert Einstein",
      options: [{'value': 'Isaac Newton'}, {'value': 'Albert Einstein'}, {'value': 'Galileo Galilei'}, {'value': 'Niels Bohr'}]
    },
    {
      title: "¿Cuál es el planeta más cercano al Sol?",
      type: "RADIO",
      correctAnswer: "Mercurio",
      options: [{'value': 'Venus'}, {'value': 'Tierra'}, {'value': 'Marte'}, {'value': 'Mercurio'}]
    },
    {
      title: "¿Qué gas es el más abundante en la atmósfera terrestre?",
      type: "RADIO",
      correctAnswer: "Nitrógeno",
      options: [{'value': 'Oxígeno'}, {'value': 'Dióxido de carbono'}, {'value': 'Nitrógeno'}, {'value': 'Argón'}]
    },
    {
      title: "¿Cuál es la fórmula química del metano?",
      type: "RADIO",
      correctAnswer: "CH4",
      options: [{'value': 'C2H6'}, {'value': 'CH4'}, {'value': 'CO'}, {'value': 'H2O'}]
    }
  ]
]


const formatedInfo = formatformInfo(dataFakeAI[0]);
const formatedQuestions = [];

dataFakeAI[1].forEach((question) => {
  formatedQuestions.push(formatQuestion(question));
});

const FormCreator = ({ onFormCreated }) => {
  const [formResponse, setFormResponse] = useState(null);

  // Create form
  const handleCreateForm = async () => {
    try {
      // Haciendo la solicitud POST a la API
      const response = await fetch("/api/googleForms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          info: formatedInfo,
          settings: {
            quizSettings: {
              isQuiz: true,
            },
          },
          items: formatedQuestions,
        }),
      });
      

      if (!response.ok) {
        throw new Error("Error al crear el formulario");
      }

      const data = await response.json();
      setFormResponse(data);

      // Llamar al callback para pasar la respuesta al componente padre
      onFormCreated(data);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className=" bottom-0 flex justify-center p-4 w-[100vw]">
      <button
        onClick={handleCreateForm}
        className="bg-violet-700 m-[20px] border rounded-full w-[200px] h-[70px] text-white flex justify-center flex-wrap flex-row content-center text-2xl gap-[10px] sticky bottom-0 "
      >
        Generar <SiGoogleforms />
      </button>
      {formResponse && (
        <div className="flex justify-center flex-col content-center">
          <p className="text-4xl">Formulario creado exitosamente</p>
        </div>
      )}
    </div>
  );
};

export default FormCreator;
