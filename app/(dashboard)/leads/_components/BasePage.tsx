"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Date, PrimaryTable } from "./PrimaryTable";

import { CardContainer } from "./CardContainer";
import { FilterMenubar } from "./FilterMenubar";
import { deviceType } from "@/interfaces";
import { SheetDemo } from "./Sheet";
import { ProgressWrapper, useProgressContext } from "@/context/progressContext";
import { useLeadsTable } from "@/hooks/use-leads-table";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableSkeleton } from "@/components/data-table-skeleton";

export function getColumns(): ColumnDef<any>[] {
  return [
    {
      accessorKey: "timestamp",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Order Date" />
      ),
      cell: ({ row }) => <Date dateString={row.getValue("timestamp")} />,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "devicename",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Model" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[31.25rem] truncate font-medium">
              {row.getValue("devicename")}
            </span>
          </div>
        );
      },
    },
    // {
    //   accessorKey: "city",
    //   header: ({ column }) => (
    //     <DataTableColumnHeader column={column} title="City" />
    //   ),
    //   cell: ({ row }) => {
    //     return (
    //       <div className="flex w-[6.25rem] items-center">
    //         <span className="capitalize">{row.getValue("city") ?? 'empty'}</span>
    //       </div>
    //     );
    //   },
    //   filterFn: (row, id, value) => {
    //     return Array.isArray(value) && value.includes(row.getValue(id));
    //   },
    // },
    {
      accessorKey: "devicetype",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Type" />
      ),
      cell: ({ row }) => (
        <div className="flex w-[5rem] items-center">
          <span
            className={`inline-block h-max min-w-full rounded-[18px] bg-purple-600 p-1 text-center text-xs !text-white opacity-90`}
          >
            {row.getValue("devicetype")}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "desposition",
      cell: ({ row }) => {
        return (
          // <span
          //   className={`m-auto inline-block h-max min-w-max rounded-[18px] px-3 text-center text-xs font-semibold opacity-90

          //           ${
          //             status == "null" && assignedVendor !== "null"
          //               ? "!bg-[#3495eb]"
          //               : assignedVendor == "null" && status == "null"
          //                 ? "bg-[#ebd834]"
          //                 : status?.startsWith("Cn-")
          //                   ? "!bg-[#c14646] text-white"
          //                   : status?.startsWith("F-") ||
          //                       status?.startsWith("FC-")
          //                     ? "!bg-[#F64848] text-white"
          //                     : status == "Assigned"
          //                       ? "!bg-[#FF974A]"
          //                       : status?.startsWith("C-")
          //                         ? "!bg-[#82C43C]"
          //                         : status?.startsWith("V-") &&
          //                           "!bg-[#3446eb] text-white"
          //           } p-1 px-2 text-black  `}
          // >
          //   {status == "null" && assignedVendor == "null"
          //     ? "Generated"
          //     : status == "null" && assignedVendor !== "null"
          //       ? "Assigned to Vendor"
          //       : status?.startsWith("Cn-")
          //         ? status?.replace("Cn-", "")
          //         : status?.startsWith("F-")
          //           ? status?.replace("F-", "")
          //           : status?.startsWith("C-")
          //             ? "Completed"
          //             : status?.startsWith("V-")
          //               ? "In Progress"
          //               : status?.startsWith("FC-")
          //                 ? status.replace("FC-", "")
          //                 : status?.split("-")[1]}
          // </span>
          <span>{row.getValue("desposition") ?? "empty"}</span>
        );
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
  ];
}

export interface LeadInterface<TData, TValue> {
  success: boolean;
  leads: {
    pagelimit: number;
    data: TData[];
  };
  Ringing: number;
  Callback: number;
  SwitchedOff: number;
  Pending: number;
  Converted: number;
}

const BasePage = () => {
  const columns = useMemo(() => getColumns(), []);
  const {
    table,
    isOpen,
    data,
    setIsUpdated,
    isApplied,
    setIsApplied,
    isLoading,
    setFilterQueries,
    SetSelectedRow,
    setIsOpen,
    SelectedRow,
    filterQueries,
  } = useLeadsTable({
    columns,
  });
  return (
    <ProgressWrapper>
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
              Recent Leads
            </h4>
            {data ? (
              <PrimaryTable
                table={table}
                selectedRow={SelectedRow}
                setIsOpen={setIsOpen}
                SetSelectedRow={SetSelectedRow}
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
          <CardContainer
            Callback={data?.Callback}
            Converted={data?.Converted}
            Pending={data?.Pending}
            Ringing={data?.Ringing}
            SwitchedOff={data?.SwitchedOff}
          />

          {SelectedRow && (
            <SheetDemo
              SelectedRow={SelectedRow}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          )}
        </div>
      </div>
    </ProgressWrapper>
  );
};

export default BasePage;
