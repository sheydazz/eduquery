// src/utils/CreateIaQuestionIa.js

export const CreateIaQuestion = async (prompt, numeropreguntas) => {
    try {
      // Haciendo la solicitud POST a la API
      const response = await fetch('/api/mistralIaGenerate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, numeropreguntas }),
      });
  
      if (!response.ok) {
        throw new Error('Error al crear el cuestionario');
      }
  
      const questionResponse = await response.json();
      return questionResponse; // Devuelve la respuesta 
    } catch (err) {
      console.error('Error:', err);
      throw err; 
    }
  };