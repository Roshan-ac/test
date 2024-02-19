import React from "react";
import { HeadingBar } from "./_components/HeadingBar";
import ChartOne from "./_components/chartOne";
import ChartTwo from "./_components/chartTwo";
const page = () => {
  return (
    <div className="h-full w-full space-y-6 pb-20">
      <HeadingBar />
      <ChartOne />
      <ChartTwo />
    </div>
  );
};

export default page;
