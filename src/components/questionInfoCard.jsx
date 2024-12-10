"use client";
import React from "react";
import { MdDelete } from "react-icons/md";

const QuestionInfoCard = ({ generatedQuestion,index}) => {
  return (
    <div className="card-container flex flex-col bg-white p-[20px] max-w-[400px] shadow-lg border rounded-md">
      <div>
        <div className="question-name text-xl font-bold flex flex-wrap">
          <p>{generatedQuestion.title}</p>
        </div>
        {generatedQuestion.options.map((option, j) => (
          <div key={j} className="question-response flex flex-col gap-[10px]">
            <span>
              {j + 1}. {option}
            </span>
          </div>
        ))}
      </div>
      <button className="bg-red-700 border rounded-full w-[40px] flex justify-center">
        <MdDelete className="w-[40px] h-[40px] p-[10px] text-white" />
      </button>
    </div>
  );
};


export default QuestionInfoCard;

