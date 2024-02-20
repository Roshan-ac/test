import React from "react";

import SectionOne from "./_components/sectionOne";

import { FilterMenubar } from "@/components/FilterMenubar";
import { CardContainer } from "@/components/Internals/CardContainer";

const page = () => {
  return (
    <div className="h-full w-full space-y-2 pb-20">
      <FilterMenubar />
      <SectionOne varient={"failed"} />
      <CardContainer />
    </div>
  );
};

export default page;
