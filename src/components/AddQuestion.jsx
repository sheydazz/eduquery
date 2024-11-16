"use client";

import HiArrowCircleUpButton from "./HiArrowCircleUpButton";
import HiArrowCircleDownButton from "./HiArrowCircleDownButton";
import AddMenuQuestion from "./AddMenuQuestion";
import { useState } from "react";

const AddQuestionComponent = () => {
  const [count, setCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para incrementar el contador
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Función para disminuir el contador
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row gap-3">
      {/* Contador */}
      <div className="flex justify-center items-center border-2 border-white size-10 rounded-lg">
        <p>{count}</p>
      </div>

      {/* Botones */}
      <div>
        <HiArrowCircleUpButton onClick={incrementCount} />
        <HiArrowCircleDownButton onClick={decrementCount} />
      </div>

      {/* Menú desplegable */}
      <div>
        <AddMenuQuestion isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default AddQuestionComponent;