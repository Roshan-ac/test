"use client";
import React, { useEffect, useMemo, useState } from "react";

import { CardContainer } from "./CardContainer";
import { SheetDemo } from "./sheet";
import { PrimaryTable } from "./PrimaryTable";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";
import ImageGallery from "./ImageGallery";

import { PhotoProvider } from "react-photo-view";
import { useVendorTable } from "@/hooks/use-vendor-tables";
import { getVendorTableColumns } from "./vendorTableColumns";
import { DataTableSkeleton } from "@/components/data-table-skeleton";
import { FilterMenubar } from "@/components/FilterMenubar";
export interface VendorsInterface<TData, TValue> {
  success: boolean,
  message: string,
  vendorsDetails: TData[]
};
export type vendorDetails = {
  id: string;
  firebaseid: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  gstin: string | null;
  creditsavailable: number;
  maxleads: number;
  inprogressleads: number;
  deviceassigned: string;
  applicationStatus: string;
  shopphoto: string;
  pancardimg: string | null;
  aadharcardimgfront: string | null;
  aadharcardimgback: string | null;
  selfphoto: string | null;
  vendortype: string;
  deviceToken: string;
}

const BasePage = () => {
  const columns = useMemo(() => getVendorTableColumns(), []);
  const { data, table, SelectedRow, filterQueries,isApplied,setIsApplied,setFilterQueries, isLoading, SetSelectedRow, setIsOpen, isOpen } = useVendorTable({
    columns,
  })

  return (
    <div className=" w-full space-y-2 py-4 h-screen">
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
            All Vendors
          </h4>

          {data?.success ? (
            <PrimaryTable
              data={data}
              selectedRow={SelectedRow}
              isLoading={isLoading}
              SetSelectedRow={SetSelectedRow}
              setIsOpen={setIsOpen}
              table={table}
            />
          ) : (
            <DataTableSkeleton
              columnCount={5}
              searchableColumnCount={1}
              filterableColumnCount={2}
              cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
              shrinkZero
            />
          )}
        </div>
        {data && (
          <CardContainer
            cardsValues={{
              acceptedLeads: 29,
              pendingLeads: 95,
              rejectedLeads: 35,
            }}
          />
        )}
        <SheetDemo
          SelectedRow={SelectedRow}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
};

export default BasePage;
