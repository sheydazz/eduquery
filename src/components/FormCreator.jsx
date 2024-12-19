import React, { useState } from "react";
import { SiGoogleforms } from "react-icons/si";
import { useForm } from "@/context/Form";
import { formatformInfo } from "@/lib/format-items";
import { formatQuestion } from "@/lib/format-items";

const FormCreator = ({ onFormCreated }) => {
  const { questions } = useForm();
  const [formResponse, setFormResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const formatedInfo = formatformInfo(questions[0]);
  const formatedQuestions = [];
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/cerrar modal
  const [email, setEmail] = useState(""); // Estado para el correo electrónico
  questions[1].forEach((question) => {
    formatedQuestions.push(formatQuestion(question));
  });

  // Create form
  const handleCreateForm = async () => {
    setIsLoading(true); // Inicia el estado de carga
    setIsModalOpen(false);
    try {
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
          email:email
        }),
      });

      if (!response.ok) {
        throw new Error("Error al crear el formulario");
      }

      const data = await response.json();
      setFormResponse(data);
      onFormCreated(data);
    } catch (err) {
      console.log("error", err);
    } finally {
      setIsLoading(false); // Detén el estado de carga
    }
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 w-full">
      {isLoading ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        // El botón se muestra solo si no está cargando
        !formResponse && ( // También se asegura que el formulario no haya sido creado aún
          <button
            onClick={handleOpenModal}
            className=" m-5 border rounded-2xl w-52 h-16 text-white flex justify-center items-center text-xl gap-2  font-semibold shadow-md bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300"
          >
            Generar Forms <SiGoogleforms />
          </button>
        )
      )}
  
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-lg font-semibold mb-4">Ingresa tu correo</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-black"
              placeholder="correo@example.com"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreateForm}
                className="bg-violet-700 text-white px-4 py-2 rounded-lg"
              >
                Generar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default FormCreator;
