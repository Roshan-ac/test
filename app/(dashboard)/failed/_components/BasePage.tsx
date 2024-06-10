"use client";
import React, { useMemo } from "react";
import { CardContainer } from "./CardContainer";
import { SheetDemo } from "./sheet";
import { PrimaryTable } from "./PrimaryTable";
import { FilterMenubar } from "@/components/FilterMenubar";
import { ProgressWrapper } from "@/context/progressContext";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { useFailedTableData } from "@/hooks/use-failed-table";
import { DataTableSkeleton } from "@/components/data-table-skeleton";
export function getColumns(): ColumnDef<any>[] {
  return [
    {
      accessorKey: "pickupdate",
      accessorFn: (row) => `${row.pickupdate} - ${row.pickuptime}`,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Date" />
      ),
      cell: ({ row }) => <span>{row.getValue("pickupdate")}</span>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Vendor" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[31.25rem] truncate font-medium">
              {row.getValue("id")}
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
        return (
          <div className="flex w-[5rem] items-center">
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
        <div className="flex w-[4rem] items-center">
          <span
            className={`inline-block h-max min-w-full rounded-[18px] bg-purple-600 p-1 text-center text-xs !text-white opacity-90`}
          >
            {row.getValue("devicetype")}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "reason",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="reason" />
      ),
      cell: ({ row }) => {
        const reason: string = row.getValue("reason");
        return (
          <div className="items-left flex w-[8rem]">
            <span
              className={`inline-block h-max min-w-full rounded-[18px] text-center  text-xs  !text-white opacity-90`}
            >
              {reason.split("-")[1]}
            </span>
          </div>
        );
      },
    },
    // {
    //   accessorKey: "assignedvendor",
    //   accessorFn: (row) => `${row.status}/${row.assignedvendor}`,
    //   cell: ({ row }) => {
    //     const VendorAndStatus = row.getValue("assignedvendor") as string;
    //     const status = VendorAndStatus.split("/")[0];
    //     const assignedVendor = VendorAndStatus.split("/")[1];

    //     return (
    //       <span
    //         className={`m-auto inline-block h-max min-w-max rounded-[18px] px-3 text-center text-xs font-semibold opacity-90

    //                 ${
    //                   status == "null" && assignedVendor !== "null"
    //                     ? "!bg-[#3495eb]"
    //                     : assignedVendor == "null" && status == "null"
    //                       ? "bg-[#ebd834]"
    //                       : status?.startsWith("Cn-")
    //                         ? "!bg-[#c14646] text-white"
    //                         : status?.startsWith("F-") ||
    //                             status?.startsWith("FC-")
    //                           ? "!bg-[#F64848] text-white"
    //                           : status == "Assigned"
    //                             ? "!bg-[#FF974A]"
    //                             : status?.startsWith("C-")
    //                               ? "!bg-[#82C43C]"
    //                               : status?.startsWith("V-") &&
    //                                 "!bg-[#3446eb] text-white"
    //                 } p-1 px-2 text-black  `}
    //       >
    //         {status == "null" && assignedVendor == "null"
    //           ? "Generated"
    //           : status == "null" && assignedVendor !== "null"
    //             ? "Assigned to Vendor"
    //             : status?.startsWith("Cn-")
    //               ? status?.replace("Cn-", "")
    //               : status?.startsWith("F-")
    //                 ? status?.replace("F-", "")
    //                 : status?.startsWith("C-")
    //                   ? "Completed"
    //                   : status?.startsWith("V-")
    //                     ? "In Progress"
    //                     : status?.startsWith("FC-")
    //                       ? status.replace("FC-", "")
    //                       : status?.split("-")[1]}
    //       </span>
    //     );
    //   },
    //   filterFn: (row, id, value) => {
    //     return Array.isArray(value) && value.includes(row.getValue(id));
    //   },
    // },
  ];
}
export interface FailedTableInterfaces<TData, TValue> {
  success: boolean;
  leads: {
    pagelimit: number;
    data: TData[];
  };
  rejectedLeads: number;
  acceptedLeads: number;
  pendingLeads: number;
}

const BasePage = () => {
  const columns = useMemo(() => getColumns(), []);
  const {
    table,
    isOpen,
    data,
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
  } = useFailedTableData({
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
              Failed Leads
            </h4>
            {data && table ? (
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

          {data && (
            <CardContainer
              cardsValues={{
                acceptedLeads: data.acceptedLeads,
                pendingLeads: data.pendingLeads,
                rejectedLeads: data.rejectedLeads,
              }}
            />
          )}
          {SelectedRow && (
            <SheetDemo
              SelectedRow={SelectedRow}
              varient={"failed"}
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
