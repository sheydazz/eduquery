"use client";
import React, { useEffect, useState } from "react";

const QuestionInfoCard = ({ generatedQuestion, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200); 
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`card-container flex flex-col border-gray-200 bg-white p-[20px] max-w-[400px] shadow-lg border rounded-[20px] transition-opacity duration-500 ease-out ${
        isVisible ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
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
