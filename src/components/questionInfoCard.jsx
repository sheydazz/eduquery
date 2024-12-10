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

    </div>
  );
};


export default QuestionInfoCard;

