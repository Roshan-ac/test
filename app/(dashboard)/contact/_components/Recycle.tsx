'use client'
import React, { useState } from "react";
import { PrimaryTable } from "./PrimaryTable";
import { RecycleFilterMenubar } from "./recycleFilterMenut";

const Recycle = () => {
    const [isApplied, setIsApplied] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [SelectedRow, SetSelectedRow] = useState<{
      id: number;
    }>();
    const [filterQueries, setFilterQueries] = useState<{
      search: string;
      city: string;
      status: string;
      fromDate: Date,
      toDate: Date,
    }>({
      search: "",
      status: "",
      city: "",
      fromDate: undefined,
      toDate: undefined,
    });
  return (
    <div className="p-4">
      <div>
        <RecycleFilterMenubar  filterQueries={filterQueries} isApplied isLoading  setFilterQueries={setFilterQueries} setIsApplied={setIsApplied}  />
      </div>
      <div className="w-full rounded-[12px]  bg-primaryBackground">
        <h4 className=" px-4 py-2 text-lg font-semibold tracking-wide">
          Recycle Device
        </h4>
        <PrimaryTable
          SetSelectedRow={null}
          currentPage={1}
          totalPage={1}
          invoices={null}
          isLoading
          setIsOpen={null}
          setCurrentPage={null}
        />
      </div>
    </div>
  );
};

export default Recycle;
