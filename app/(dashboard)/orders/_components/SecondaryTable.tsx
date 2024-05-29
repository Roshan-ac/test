import React, { Dispatch, SetStateAction, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  type Table as TanstackTable,
} from "@tanstack/react-table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaginationState } from "@tanstack/react-table";
import { DataTablePagination } from "@/components/Internals/TabelPagination";
import { useOrdersTimelineTableData } from "@/hooks/use-orders-timeline";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Date } from "./PrimaryTable";
import { DataTableSkeleton } from "@/components/data-table-skeleton";

export function getColumns(): ColumnDef<any>[] {
  return [
    {
      accessorKey: "pickupdate",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Date" />
      ),
      cell: ({ row }) => <Date dateString={row.getValue("pickupdate")} />,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "pickuptime",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Slot" />
      ),
      cell: ({ row }) => {
        // const label = tasks.label.enumValues.find(
        //   (label) => label === row.original.label
        // )

        return (
          <div className="flex space-x-2">
            {/* {label && <Badge variant="outline">{label}</Badge>} */}
            <span className="max-w-[31.25rem] truncate font-medium">
              {row.getValue("pickuptime")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "devicename",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Model" />
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
            <span className="capitalize">{row.getValue("devicename")}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Lead Id" />
      ),
      cell: ({ row }) => (
        <div className="flex w-[5rem] items-center">
          <span>{row.getValue("id")}</span>
        </div>
      ),
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

const SecondaryTable = () => {
  const columns = useMemo(() => getColumns(), []);
  const {
    isData,
    currentLeadPage,
    isOpen,
    data,
    table,
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
  } = useOrdersTimelineTableData({
    columns,
    // optional props
    defaultPerPage: 10,
    defaultSort: "createdAt.desc",
  });

  return (
    <ScrollArea className=" relative h-max w-full rounded-md">
      <div className={"w-full space-y-2.5 overflow-auto"}>
        <div className="rounded-md">
          {data ? (
            <Table>
              <TableHeader className=" !sticky left-0  top-0 z-[1] w-full dark:hover:bg-hoverColor">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    className="bg-tertiaryBackground "
                  >
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table?.getRowModel().rows?.length ? (
                  table?.getRowModel().rows.map((row: any) => (
                    <TableRow
                      key={row.id}
                      onClick={() => {
                        SetSelectedRow({
                          lead: `${row.original.id}`,
                          devicetype: row.original.devicetype,
                        });
                        setIsOpen((prev) => !prev);
                      }}
                      data-state={row.getIsSelected() && "selected"}
                      className={`  group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60`}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          className="!w-max truncate text-nowrap"
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={table.getAllColumns().length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          ):(
            <DataTableSkeleton
            columnCount={5}
            searchableColumnCount={1}
            filterableColumnCount={2}
            cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
            shrinkZero
          />
          )}
        </div>
        <div className="flex flex-col gap-2.5">
          {data && <DataTablePagination table={table} />}
        </div>
      </div>
    </ScrollArea>
  );
};

export default SecondaryTable;
