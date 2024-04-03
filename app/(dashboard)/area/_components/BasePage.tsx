"use client";
import React, { useState } from "react";
import { FilterMenubar } from "./filterMenubar";
import { PrimaryTable } from "./PrimaryTable";
import { ProgressSection } from "./ProgressSection";
export interface InvoiceInterface {
  success: boolean;
  pagelimit: number;
  data: {
    id: string;
    pincode: number;
    city: string;
    status: string;
    device: number;
    vendors: string;
  }[];
  pincodes: number;
  areaCovered: number;
}
const BasePage = () => {
  const [isApplied, setIsApplied] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [SelectedRow, SetSelectedRow] = useState<{
    id: number;
  }>();
  const [filterQueries, setFilterQueries] = useState<{
    search: string;
    type: string;
    city: string;
    status: string;
    fromDate: string,
    toDate: string,
  }>({
    search: "",
    status: "",
    city: "",
    type:"",
    fromDate: undefined,
    toDate: undefined,
  });
  return (
    <div className=" w-full space-y-2 py-4">
      <FilterMenubar
        isApplied={isApplied}
        setIsApplied={setIsApplied}
        isLoading={isLoading}
        filterQueries={filterQueries}
        setFilterQueries={setFilterQueries}
      />
      <div className="space-y-6  px-8">
        <div className="w-full rounded-[12px]  bg-primaryBackground">
          <h4 className=" px-4 py-2 text-lg font-semibold tracking-wide">
            Serviceable Pincodes
          </h4>
          <PrimaryTable
            SetSelectedRow={SetSelectedRow}
            currentPage={1}
            totalPage={1}
            invoices={null}
            isLoading
            setIsOpen={null}
            setCurrentPage={null}
          />
        </div>
        <div>
          <ProgressSection cardsValues={{areaCovered:20,pincodes:500}} />
        </div>
      </div>
    </div>
  );
};

export default BasePage;
