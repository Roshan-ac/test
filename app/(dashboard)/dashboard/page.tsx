import React from "react";
import { HeadingBar } from "./_components/HeadingBar";
import ChartOne from "./_components/chartOne";
import ChartTwo from "./_components/chartTwo";
import { ContainerTable } from "./_components/tableContainer";
import ChartThree from "./_components/chartThree";

const page = () => {
  return (
    <div className="h-full w-full space-y-6 pb-20">
      <HeadingBar />
      <ChartOne />
      <ChartTwo />
      <ContainerTable />
      <ChartThree />
    </div>
  );
};

export default page;
