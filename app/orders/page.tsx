import { FilterMenubar } from "@/components/FilterMenubar";
import React from "react";
import SectionOne from "./_components/SectionOne";

const page = () => {
  return (
    <div className="h-full w-full bg-black">
      <FilterMenubar />
      <SectionOne />
    </div>
  );
};

export default page;
