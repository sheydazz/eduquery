"use client";

import PromptTitle from "@/components/PromptTitle";
import AddQuestion from "@/components/AddQuestion";
import MenuHome from "@/components/MenuHome";

const HomeLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-row">
        <MenuHome />
      </div>

    
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col m-10 justify-center items-center">
          <PromptTitle />
          <AddQuestion />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
