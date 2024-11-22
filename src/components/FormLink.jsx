import React from "react";
import { SiGoogleforms } from "react-icons/si";
// "use client"
const FormLink = (formData) => {
  return (
    <div className="sticky bottom-0 flex justify-center p-4">
      <a
        href={formData.formData.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-violet-700 m-[20px] border rounded-full w-[200px] h-[70px] text-white flex justify-center flex-row content-center flex-wrap text-2xl gap-[10px]">
          Ir al formulario <SiGoogleforms />
        </button>
      </a>
    </div>
  );
};

export default FormLink;
