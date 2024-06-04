import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { flexRender, type Table as TanstackTable } from "@tanstack/react-table";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { parseISO, format } from "date-fns";
// import { TabelPagination } from "@/components/Internals/TabelPagination";
import { VendorsInterface, vendorDetails } from "./BasePage";
import { cn } from "@/lib/utils";
import { PrimaryPagination } from "./primaryPagination";
interface DataTableProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The table instance returned from useDataTable hook with pagination, sorting, filtering, etc.
   * @type TanstackTable<TData>
   */
  table: TanstackTable<TData>;
  data: VendorsInterface<TData, TValue>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  SetSelectedRow: Dispatch<
    SetStateAction<any>
  >;
  isLoading: boolean;
  selectedRow: vendorDetails;
  /**
   * The floating bar to render at the bottom of the table on row selection.
   * @default null
   * @type React.ReactNode | null
   * @example floatingBar={<TasksTableFloatingBar table={table} />}
   */
  floatingBar?: React.ReactNode | null;
}
export function PrimaryTable<TData, TValue>({
  setIsOpen,
  table,
  data,
  selectedRow,
  isLoading,
  SetSelectedRow,
}: DataTableProps<TData, TValue>) {
  console.log(table.getRowModel().rows)
  return (
    // <ScrollArea className="relative h-[70vh] w-full rounded-md">
    //   <Table>
    //     <TableHeader className=" !sticky  left-0 top-0 w-full dark:hover:bg-hoverColor">
    //       <TableRow className="bg-tertiaryBackground ">
    //         <TableHead className="w-max">Vendor Id</TableHead>
    //         <TableHead>Vendor</TableHead>
    //         <TableHead>City</TableHead>
    //         <TableHead className="text-center">Contact</TableHead>
    //         <TableHead>Alternative No</TableHead>
    //         <TableHead>Status</TableHead>
    //       </TableRow>
    //     </TableHeader>

    //     {invoices && (
    //       <TableBody className="w-full">
    //         {invoices.map((invoice, index) => (
    //           <TableRow
    //             onClick={() => {
    //               SetSelectedRow(invoice);
    //               setIsOpen((prev) => !prev);
    //             }}
    //             className={` ${selectedRow?.id === invoice.id ? " bg-hoverColor text-black" : ""} group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60`}
    //             key={index}
    //           >
    //             <TableCell className="border-r border-r-tableSeperator">
    //               {invoice.id}
    //             </TableCell>

    //             <TableCell className="border-r border-r-tableSeperator">
    //               {invoice.name}
    //             </TableCell>

    //             <TableCell className="border-r border-r-tableSeperator">
    //               null
    //             </TableCell>

    //             <TableCell className="border-r  border-r-tableSeperator">
    //               {invoice.phone}
    //             </TableCell>

    //             <TableCell className="border-r  border-r-tableSeperator">
    //               {/* alternative no */}
    //               {invoice.phone}
    //             </TableCell>

    //             <TableCell className="">

    //             </TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     )}
    //     {!invoices && isLoading && <TableSkeleton skeleton={6} />}
    //   </Table>
    //   <div className="sticky bottom-0 flex w-full flex-col items-end border-t border-t-tableSeperator bg-primaryBackground">
    //     {/* <TabelPagination /> */}
    //   </div>
    // </ScrollArea>

      <div className={cn("w-full space-y-2.5 overflow-hidden")}>
        <div className="rounded-md">
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
                      SetSelectedRow(data.vendorsDetails);
                      setIsOpen((prev) => !prev);
                    }}
                    data-state={row.getIsSelected() && "selected"}
                    className={` ${selectedRow === row.original.id ? " bg-hoverColor text-black" : ""} group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60`}
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
        </div>
        <div className="flex flex-col gap-2.5">
          <PrimaryPagination table={table} />
        </div>
      </div>
  );
}

export function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
