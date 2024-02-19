import React from "react";
import { FilterMenubar } from "@/components/FilterMenubar";
import SectionOne from "../../../components/Internals/SectionOne";
import { CardContainer } from "../../../components/Internals/CardContainer";

const page = () => {
  return (
    <div className="h-full w-full space-y-2 pb-20">
      <FilterMenubar />
      <SectionOne varient="orders" />
      <CardContainer />
      <SectionOne varient="orders" />
    </div>
  );
};

export default page;
