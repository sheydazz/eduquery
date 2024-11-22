"use client";
import React from "react";

import { MdDelete } from "react-icons/md";
const questionInfoCard = () => {
  return (
    <div className="card-container flex flex-col bg-white p-[20px] max-w-[400px] shadow-lg border rounded-md">
      <div className="questiom-name text-xl font-bold flex flex-wrap ">
        <p> {1} nombre de la pregunta</p>
      </div>
      <div className="question-context text-sm mt-2">
        <p>contexto de la pregunta</p>
      </div>

      <div className="question-response flex flex-col gap-[10px]">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>

      <button className="bg-red-700 border rounded-full w-[40px] flex justify-center">
        <MdDelete className="w-[40px] h-[40px] p-[10px] text-white" />
      </button>
    </div>
  );
};

export default questionInfoCard;
