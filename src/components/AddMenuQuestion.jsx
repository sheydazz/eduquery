"use client";

import { HiChevronDown, HiPlus } from "react-icons/hi";

const AddMenuQuestionComponent = ({ isOpen, toggleMenu }) => {
  return (
    <div className="relative inline-block text-left">
      {/* Botón principal */}
      <div
        className="flex items-center justify-between px-4 py-2 border border-white rounded-full bg-black text-white cursor-pointer"
        onClick={toggleMenu} // Lógica manejada por el padre
      >
        <span>Tipo de pregunta</span>
        <HiChevronDown className="ml-2" />
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg z-10">
          <ul className="py-2">
            <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
              Opción 1
            </li>
            <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
              Opción 2
            </li>
            <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
              Opción 3
            </li>
          </ul>
        </div>
      )}

      {/* Botón adicional */}
      <button className="ml-2 p-2 bg-white text-black rounded-full border border-white hover:bg-gray-100">
        <HiPlus size={20} />
      </button>
    </div>
  );
};

export default AddMenuQuestionComponent;
