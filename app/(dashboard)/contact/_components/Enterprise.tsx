'use client'
import React, { useState } from "react";
import { PrimaryTable } from "./PrimaryTable";
import { RecycleFilterMenubar } from "./recycleFilterMenut";
import { EnterpriseFilterMenubar } from "./enterpriseFilterMenu";
import { MessageInterface } from "./BasePage";

const Enterprise = ({message}:{message:MessageInterface}) => {
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
        <EnterpriseFilterMenubar  filterQueries={filterQueries} isApplied isLoading  setFilterQueries={setFilterQueries} setIsApplied={setIsApplied}  />
      </div>
      <div className="w-full rounded-[12px]  bg-primaryBackground">
        <h4 className=" px-4 py-2 text-lg font-semibold tracking-wide">
        Enterprise Table
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

export default Enterprise;
