"use client";
import PromptInputComponent from "../components/PromptInputComponent";
import PromptTitleComponent from "../components/PromptTitleComponent";

const PromptPage = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 h-max content-center">
      <PromptTitleComponent />
      <PromptInputComponent />
    </div>
  );
};

export default PromptPage;
