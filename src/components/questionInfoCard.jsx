"use client";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useEffect } from "react";

const QuestionInfoCard = ({ generatedQuestion,index}) => {
  useEffect(() => {
    
    console.log(generatedQuestion.options);
  
  }, [generatedQuestion]);
  
  return (
    <div className="card-container flex flex-col border-gray-100 bg-white p-[20px] max-w-[400px] shadow-lg border rounded-[20px]">
      <div>
        <div className="question-name text-xl font-bold flex flex-wrap text-purple-600">
          <p>{generatedQuestion.title}</p>
        </div>
        {generatedQuestion.options.map((option, j) => (
          <div key={j} className="question-response flex flex-col gap-[10px]">
            <span className="text-blue-500 mt-3">
              {j + 1}. {option}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};


export default QuestionInfoCard;

