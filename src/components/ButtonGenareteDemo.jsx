import React from 'react'
import { CreateIaQuestion } from '@/utils/createQuestionIa';
import Link from 'next/link';
import { useState } from 'react';
const ButtonGenareteDemo = () => {
  const [questions, setQuestions] = useState(null);
  const handleGenerateQuestions = async () => {
    try {
      const prompt = 'Historia de la tecnología'; // Define tu prompt
      const numeropreguntas = 5; // Define el número de preguntas
      const generatedQuestions = await CreateIaQuestion(prompt, numeropreguntas);
      setQuestions(generatedQuestions); // Guardar las preguntas en el estado
    } catch (error) {
      console.error('Error al generar preguntas:', error);
    }
  };
  return (
    <div>
        <Link href="/generate-form">
            <button onClick={handleGenerateQuestions}>generar preguntas con ia</button>
        </Link>
    </div>
  )
}

export default ButtonGenareteDemo 