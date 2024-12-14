
"use client"
import React, { createContext, useContext, useState } from "react";

const FormContext = createContext(); 

export const FormsProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  return (
    <FormContext.Provider value={{ questions, setQuestions }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm debe usarse dentro de un FormsProvider");
  }
  return context;
};
