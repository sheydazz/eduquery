"use client";

import PromptTitle from "@/components/PromptTitle";
import AddQuestion from "@/components/AddQuestion";
import MenuHome from "@/components/MenuHome";

const HomeLayout = () => {
  return (

    
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col  justify-center items-center align-middle">
          <PromptTitle />
          <AddQuestion />
        </div>
      </div>
    
  );
};

export default HomeLayout;
