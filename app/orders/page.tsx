import { FilterMenubar } from "@/components/FilterMenubar";
import React from "react";
import { PrimaryTable } from "./_components/PrimaryTable";

const page = () => {
  return (
    <div className="h-full bg-black w-full">
      <FilterMenubar />
      <div className="w-full p-6">
        <div className="w-max  rounded-[12px] bg-primaryBackground py-4">
          <PrimaryTable />
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default page;
