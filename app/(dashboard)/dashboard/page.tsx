import React from "react";
import { HeadingBar } from "./_components/HeadingBar";
import ChartOne from "./_components/chartOne";
const page = () => {
  return (
    <div className="h-full w-full space-y-2 pb-20">
      <HeadingBar />
      <ChartOne />
    </div>
  );
};

export default page;
