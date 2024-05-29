"use client";
import React, { Suspense, useEffect, useMemo, useState } from "react";

import SecondaryTable from "./SecondaryTable";
import { CardContainer } from "./CardContainer";
import { SheetDemo } from "./sheet";
import { deviceType } from "@/interfaces";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";
import { Date, PrimaryTable } from "./PrimaryTable";
import { FilterMenubar } from "@/components/FilterMenubar";
import { ProgressWrapper } from "@/context/progressContext";
import { useDataTable } from "@/hooks/use-data-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableSkeleton } from "@/components/data-table-skeleton";
export function getColumns(): ColumnDef<any>[] {
  return [
    // {
    //   id: "select",
    //   header: ({ table }) => (
    //     <Checkbox
    //       // checked={
    //       //   table.getIsAllPageRowsSelected() ||
    //       //   (table.getIsSomePageRowsSelected() && "indeterminate")
    //       // }
    //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //       aria-label="Select all"
    //       className="translate-y-0.5"
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => row.toggleSelected(!!value)}
    //       aria-label="Select row"
    //       className="translate-y-0.5"
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    // },
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
        // const label = tasks.label.enumValues.find(
        //   (label) => label === row.original.label
        // )

        return (
          <div className="flex space-x-2">
            {/* {label && <Badge variant="outline">{label}</Badge>} */}
            <span className="max-w-[31.25rem] truncate font-medium">
              {row.getValue("devicename")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "city",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="City" />
      ),
      cell: ({ row }) => {
        // const city = tasks.status.enumValues.find(
        //   (status) => status === row.original.status
        // )

        // if (!status) return null

        // const Icon = getStatusIcon(status)

        return (
          <div className="flex w-[6.25rem] items-center">
            {/* <Icon
              className="mr-2 size-4 text-muted-foreground"
              aria-hidden="true"
            /> */}
            <span className="capitalize">{row.getValue("city")}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
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
      accessorKey: "status",
      accessorFn: (row) => `${row.status}/${row.assignedvendor}`,
      cell: ({ row }) => {
        const VendorAndStatus = row.getValue("status") as string;
        const status = VendorAndStatus.split("/")[0];
        const assignedVendor = VendorAndStatus.split("/")[1];

        return (
          <span
            className={`m-auto inline-block h-max min-w-max rounded-[18px] px-3 text-center text-xs font-semibold opacity-90
                    
                    ${
                      status == "null" && assignedVendor !== "null"
                        ? "!bg-[#3495eb]"
                        : assignedVendor == "null" && status == "null"
                          ? "bg-[#ebd834]"
                          : status?.startsWith("Cn-")
                            ? "!bg-[#c14646] text-white"
                            : status?.startsWith("F-") ||
                                status?.startsWith("FC-")
                              ? "!bg-[#F64848] text-white"
                              : status == "Assigned"
                                ? "!bg-[#FF974A]"
                                : status?.startsWith("C-")
                                  ? "!bg-[#82C43C]"
                                  : status?.startsWith("V-") &&
                                    "!bg-[#3446eb] text-white"
                    } p-1 px-2 text-black  `}
          >
            {status == "null" && assignedVendor == "null"
              ? "Generated"
              : status == "null" && assignedVendor !== "null"
                ? "Assigned to Vendor"
                : status?.startsWith("Cn-")
                  ? status?.replace("Cn-", "")
                  : status?.startsWith("F-")
                    ? status?.replace("F-", "")
                    : status?.startsWith("C-")
                      ? "Completed"
                      : status?.startsWith("V-")
                        ? "In Progress"
                        : status?.startsWith("FC-")
                          ? status.replace("FC-", "")
                          : status?.split("-")[1]}
          </span>
        );
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
  ];
}
export interface InvoiceInterface<TData, TValue> {
  success: boolean;
  orders: {
    pagelimit: number;
    data: TData[];
  };
  leads: {
    pagelimit: number;
    data: TData[];
  };

  completedOrdersCount: number;
  availableOrdersCount: number;
  failedOrdersCount: number;
  assignedOrdersCount: number;
}
const BasePage = <TData, TValue>() => {
  const columns = useMemo(() => getColumns(), []);
  const {
    table,
    isData,
    currentLeadPage,
    isOpen,
    data,
    currentOrderPage,
    isUpdated,
    setIsUpdated,
    isApplied,
    setIsApplied,
    isLoading,
    setFilterQueries,
    SetSelectedRow,
    setCurrentOrderPage,
    setIsOpen,
    SelectedRow,
    filterQueries,
  } = useDataTable({
    columns,
    // optional props
    defaultPerPage: 10,
    defaultSort: "createdAt.desc",
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
              Recent Orders
            </h4>
            {isData ? (
              <PrimaryTable
                selectedRow={SelectedRow}
                isLoading={isLoading}
                SetSelectedRow={SetSelectedRow}
                currentPage={currentOrderPage}
                setCurrentPage={setCurrentOrderPage}
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

          {isData && (
            <CardContainer
              cardsValues={{
                completedOrdersCount: data.completedOrdersCount,
                assignedOrdersCount: data.assignedOrdersCount,
                availableOrdersCount: data.availableOrdersCount,
                failedOrdersCount: data.failedOrdersCount,
              }}
            />
          )}
          {isData && (
            <div className="w-full rounded-[12px]  bg-primaryBackground">
              <SecondaryTable/>
            </div>
          )}
          {SelectedRow && (
            <SheetDemo
              SelectedRow={SelectedRow}
              varient={"orders"}
              isUpdated={isUpdated}
              setIsUpdated={setIsUpdated}
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
