"use client";

// import PromptInputComponent from "../components/PromptInputComponent";
// import PromptTitleComponent from "../components/PromptTitleComponent";
import AddQuestion from "@/components/AddQuestion";

const HomeLayout = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 h-max content-center">
      {/* <PromptTitleComponent />
      <PromptInputComponent /> */}
      <AddQuestion />
    </div>
  );
};

export default HomeLayout;
