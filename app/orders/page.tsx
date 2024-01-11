import { FilterMenubar } from "@/components/FilterMenubar";
import React from "react";
import SectionOne from "./_components/SectionOne";
import { CardContainer } from "./_components/CardContainer";

const page = () => {
  return (
    <div className="h-full w-full space-y-2 pb-20">
      <FilterMenubar />
      <SectionOne />
      <CardContainer/>
      <SectionOne />
    </div>
  );
};

export default page;
