"use client";

import PromptInput from "@/components/PromptInput";
import PromptTitle from "@/components/PromptTitle";
import AddQuestion from "@/components/AddQuestion";
import ButtonGenareteDemo from "@/components/ButtonGenareteDemo";

const HomeLayout = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 h-max content-center">
      <PromptTitle />
      <PromptInput />
      <AddQuestion />
      <ButtonGenareteDemo/>
    </div>
  );
};

export default HomeLayout;
