// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Dispatch, SetStateAction, useEffect, useState } from "react";
// import { parseISO, format } from "date-fns";
// // import { TabelPagination } from "@/components/Internals/TabelPagination";
// import { InvoiceInterface } from "./BasePage";
// import { TableSkeleton } from "@/components/Internals/tableSkeleton";
// import { deviceType } from "@/interfaces";
// import ConsoleReport from "@/components/EvaluateReport/_components/ConsoleReport";

// type leads = {
//   id: number;
//   pickupdate: string;
//   devicename: string;
//   pickuptime: string;
//   devicetype: string;
//   reason: string;
//   status: string;
//   city: string;
//   assignedvendor: string;
// };

// export function PrimaryTable({
//   setIsOpen,
//   isLoading,
//   invoices,
//   selectedRow,
//   setCurrentPage,
//   currentPage,
//   totalPage,
//   SetSelectedRow,
// }: {
//   setIsOpen: Dispatch<SetStateAction<boolean>>;
//   invoices: leads[];
//   selectedRow: {
//     lead: number;
//     devicetype: deviceType;
//   };
//   isLoading: boolean;
//   currentPage: number;
//   totalPage: number;
//   setCurrentPage: Dispatch<SetStateAction<number>>;
//   SetSelectedRow: Dispatch<SetStateAction<object>>;
// }) {
//   // console.log(invoices);
//   return (
//     <ScrollArea className="relative h-max w-full rounded-md">
//       <Table>
//         <TableHeader className=" !sticky left-0  top-0 z-[1] w-full dark:hover:bg-hoverColor">
//           <TableRow className="bg-tertiaryBackground ">
//             <TableHead className="w-max">Order Date</TableHead>
//             <TableHead>Vendor</TableHead>
//             <TableHead className="">City</TableHead>
//             <TableHead className="text-center">Type</TableHead>
//             <TableHead className="text-center">Reason</TableHead>
//             <TableHead className="text-center">Status</TableHead>
//           </TableRow>
//         </TableHeader>

//         {invoices && (
//           <TableBody className="w-full">
//             {invoices.map((invoice, index) => (
//               <TableRow
//                 onClick={() => {
//                   SetSelectedRow({
//                     lead: invoice.id,
//                     devicetype: invoice.devicetype,
//                   });
//                   setIsOpen((prev) => !prev);
//                 }}
//                 className={`  ${selectedRow?.lead === invoice.id ? " bg-hoverColor text-black" : ""} group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60`}
//                 key={index}
//               >
//                 <TableCell className="border-r border-r-tableSeperator">
//                   {invoice.pickupdate} {invoice.pickuptime}
//                 </TableCell>
//                 <TableCell className="max-w-[260px] break-words border-r border-r-tableSeperator">
//                   {invoice.assignedvendor}
//                 </TableCell>
//                 <TableCell className="border-r border-r-tableSeperator">
//                   {invoice.city ?? "null"}
//                 </TableCell>
//                 <TableCell className="border-r border-r-tableSeperator">
//                   <span
//                     className={`inline-block h-max min-w-full rounded-[18px] bg-purple-600 p-1 px-2 text-center !text-white opacity-90`}
//                   >
//                     {invoice.devicetype}
//                   </span>
//                 </TableCell>

//                 <TableCell className="border-r border-r-tableSeperator">
//                   {invoice?.reason?.split("-")[1]}
//                 </TableCell>

//                 <TableCell className="w-max">
//                   <span
//                     className={`m-auto inline-block h-max min-w-max rounded-[18px] px-4 text-center opacity-90
                    
//                     ${
//                       invoice.status == null && invoice.assignedvendor !== null
//                         ? "!bg-[#3495eb]"
//                         : invoice.assignedvendor == null &&
//                             invoice.status == null
//                           ? "bg-[#ebd834]"
//                           : invoice.status.startsWith("Cn-")
//                             ? "!bg-[#c14646] text-white"
//                             : invoice.status?.startsWith("F-") ||
//                                 invoice.status?.startsWith("FC-")
//                               ? "!bg-[#F64848] text-white"
//                               : invoice.status == "Assigned"
//                                 ? "!bg-[#FF974A]"
//                                 : invoice.status?.startsWith("C-")
//                                   ? "!bg-[#82C43C]"
//                                   : invoice.status.startsWith("V-") &&
//                                     "!bg-[#3446eb] text-white"
//                     } p-1 px-2 text-black  `}
//                   >
//                     {invoice.status == null && invoice.assignedvendor == null
//                       ? "Generated"
//                       : invoice.status == null &&
//                           invoice.assignedvendor !== null
//                         ? "Assigned to Vendor"
//                         : invoice.status?.startsWith("Cn-")
//                           ? invoice.status?.replace("Cn-", "")
//                           : invoice.status?.startsWith("F-")
//                             ? invoice.status?.replace("F-", "")
//                             : invoice.status?.startsWith("C-")
//                               ? "Completed"
//                               : invoice.status.startsWith("V-")
//                                 ? "In Progress"
//                                 : invoice.status.startsWith("FC-")
//                                   ? invoice.status.replace("FC-", "")
//                                   : invoice.status?.split("-")[1]}
//                   </span>
//                 </TableCell>
//               </TableRow>
//             ))}
//             {invoices?.length < 1 && (
//               <p className=" p-4 text-xl">No Search Results Found.</p>
//             )}
//           </TableBody>
//         )}
//         {!invoices && isLoading && <TableSkeleton skeleton={6} />}
//       </Table>
//       {totalPage && (
//         // <div className="sticky bottom-0 flex w-full flex-col items-end border-t border-t-tableSeperator bg-primaryBackground">
//         //   <TabelPagination
//         //     tableType="Primary"
//         //     totalPage={totalPage}
//         //     currentPage={currentPage}
//         //     setCurrentPage={setCurrentPage}
//         //   />
//         // </div>
//         <></>
//       )}
//     </ScrollArea>
//   );
// }

// export function Date({ dateString }: { dateString: string }) {
//   const date = parseISO(dateString);
//   return (
//     <time dateTime={dateString}>
//       {format(date, "LLLL d, yyyy")}
//       {date.getTime()}
//     </time>
//   );
// }


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Dispatch, SetStateAction } from "react";

import { parseISO, format } from "date-fns";
import { deviceType } from "@/interfaces";
import { flexRender, type Table as TanstackTable } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { PrimaryPagination } from "./pagination/primaryPagination";
interface DataTableProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The table instance returned from useDataTable hook with pagination, sorting, filtering, etc.
   * @type TanstackTable<TData>
   */
  table: TanstackTable<TData>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  SetSelectedRow: Dispatch<
    SetStateAction<{ lead: string; devicetype: deviceType }>
  >;
  selectedRow: { lead: string; devicetype: deviceType };

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
  SetSelectedRow,
  table,
  selectedRow,
}: DataTableProps<TData, TValue>) {
  return (
    <ScrollArea className=" relative h-max w-full rounded-md">
      <div className={cn("w-full space-y-2.5 overflow-auto")}>
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
                      SetSelectedRow({
                        lead: `${row.original.id}`,
                        devicetype: row.original.devicetype,
                      });
                      setIsOpen((prev) => !prev);
                    }}
                    data-state={row.getIsSelected() && "selected"}
                    className={` ${selectedRow?.lead === row.original.id ? " bg-hoverColor text-black" : ""} group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60`}
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
    </ScrollArea>
  );
}

export function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  // Extract components
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hour = String(date.getUTCHours()).padStart(2, "0");
  const minute = String(date.getUTCMinutes()).padStart(2, "0");
  const adjustedHour = (date.getUTCHours() + 5) % 24;
  const adjustedMinute = String((date.getUTCMinutes() + 30) % 60).padStart(
    2,
    "0",
  );
  // Construct the formatted string
  const formattedDateTime = `${year}-${month}-${day} - ${adjustedHour}:${adjustedMinute}`;
  return <time dateTime={dateString}>{formattedDateTime}</time>;
}
