import React from "react";
import { useState } from "react";
import { SiGoogleforms } from "react-icons/si";
const FormCreator = ({ onFormCreated }) => {
  const [formResponse, setFormResponse] = useState(null);

  const handleCreateForm = async () => {
    try {
      // Haciendo la solicitud POST a la API
      const response = await fetch("/api/googleForms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: "dev test eduquery" }),
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
