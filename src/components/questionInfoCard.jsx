"use client";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useEffect } from "react";

const QuestionInfoCard = ({ generatedQuestion,index}) => {
  useEffect(() => {
    
    console.log(generatedQuestion.options);
  
  }, [generatedQuestion]);
  
  return (
    <div className="card-container flex flex-col bg-white p-[20px] max-w-[270px] border-[1px] border-yellow-300 rounded-[20px] shadow-[-6px_8px_23px_-3px_rgba(0,_0,_0,_0.1)]">
      <div>
        <div className="question-name text-sm font-bold flex flex-wrap text-purple-600">
          <p>{generatedQuestion.title}</p>
        </div>
        {generatedQuestion.options.map((option, j) => (
          <div key={j} className="question-response flex flex-col gap-[10px]">
            <div className="flex flex-row  gap-4">
            <div className="mt-3 bg-yellow-400 rounded-full w-5 h-5 p-[3px] flex justify-center items-center"><span className="text-white">{j + 1}</span></div>
            <span className="text-blue-500 mt-3 text-xs">
               {option}
            </span>
         
            </div>
           
          </div>
        ))}
      </div>

    </div>
  );
};


export default QuestionInfoCard;

