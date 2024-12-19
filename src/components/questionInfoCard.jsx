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
      className={`card-container flex flex-col border-gray-200 bg-gradient-to-r from-purple-50 via-white to-blue-50 p-[20px] max-w-[400px] shadow-2xl border rounded-[20px] transform transition-transform duration-500 ease-out ${
        isVisible ? "animate-fadeInUp scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="card-content">
        <div className="question-name text-2xl font-extrabold flex flex-wrap text-purple-700 mb-4">
          <p>{generatedQuestion.title}</p>
        </div>
        <div className="question-options space-y-3">
          {generatedQuestion.options.map((option, j) => (
            <div
              key={j}
              className="question-response flex items-start gap-2 text-blue-600"
            >
              <span className="font-medium">{j + 1}.</span>
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionInfoCard;
