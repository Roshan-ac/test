import React from "react";
import { TableFirst } from "./tableFirst";

export const ContainerTable = () => {
  return (
    <div className=" grid grid-cols-2 p-4 gap-4">
      <TableFirst />
      <TableFirst />
    </div>
  );
};
