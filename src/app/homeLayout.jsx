"use client";

import PromptTitle from "@/components/PromptTitle";
import AddQuestion from "@/components/AddQuestion";

const HomeLayout = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 h-max content-center">
      <PromptTitle />
      <AddQuestion />
    </div>
  );
};

export default HomeLayout;
