"use client";
import React, { useState } from "react";
import { FilterMenubar } from "./filterMenubar";
import { PrimaryTable } from "./PrimaryTable";
import { DataTableSkeleton } from "@/components/data-table-skeleton";

export interface InvoiceInterface {
  success: boolean;
  pagelimit: number;
  data: {
    id: string;
    brand: string;
    model: string;
    varient: string;
    type: number;
    price: string;
  }[];
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
    brand: string;
  }>({
    search: "",
    brand: "",
    type: "",
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
            Available Products
          </h4>
          {
            <DataTableSkeleton
              columnCount={5}
              searchableColumnCount={1}
              filterableColumnCount={2}
              cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
              shrinkZero
            />
          }
          {/* <PrimaryTable
            SetSelectedRow={SetSelectedRow}
            currentPage={1}
            totalPage={1}
            invoices={null}
            isLoading
            setIsOpen={null}
            setCurrentPage={null}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default BasePage;
