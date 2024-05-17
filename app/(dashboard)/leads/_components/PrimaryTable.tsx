"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabelPagination } from "@/components/Internals/TabelPagination";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dispatch, SetStateAction } from "react";
import { InvoiceInterface } from "./sectionOne";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";
import { parseISO } from "date-fns";
import { deviceType } from "@/interfaces";

export function PrimaryTable({
  invoices,
  selectedRow,
  setCurrentPage,
  currentPage,
  SetSelectedRow,
  setIsOpen,
  isLoading,
  totalPage,
}: {
  invoices: InvoiceInterface[];
  currentPage: number;
  selectedRow:{
    lead: string;
    devicetype: deviceType;
  }
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  SetSelectedRow: Dispatch<
    SetStateAction<{
      lead: string;
      devicetype: string;
    }>
  >;
  isLoading: boolean;
  totalPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) {
  
  return (
    <>
      <ScrollArea className="relative h-max w-full rounded-md">
        <Table>
          <TableHeader className=" !sticky  left-0 top-0 w-full dark:hover:bg-hoverColor">
            <TableRow className="bg-tertiaryBackground ">
              <TableHead className="w-max">Order Date</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>City</TableHead>
              <TableHead className="text-center">Type</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          {invoices && (
            <TableBody className="w-full">
              {invoices?.map((invoice, index) => (
                <TableRow
                  onClick={() => {
                    SetSelectedRow({
                      lead: invoice.id,
                      devicetype: invoice.devicetype,
                    });
                    setIsOpen((prev) => !prev);
                  }}
                  className={` ${selectedRow?.lead === invoice.id ? " bg-hoverColor text-black" : ""} group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60`}
                  key={index}
                >
                  <TableCell className="border-r border-r-tableSeperator">
                    <Date dateString={invoice.timestamp} />
                  </TableCell>
                  <TableCell className="max-w-[280px] overflow-hidden truncate border-r border-r-tableSeperator">
                    {invoice.devicename}
                  </TableCell>
                  <TableCell className="border-r border-r-tableSeperator">
                    {"Mumbai"}
                  </TableCell>
                  <TableCell className="flex justify-center border-r  border-r-tableSeperator">
                    <span className="h-max w-max rounded-[18px] bg-purple-600 p-1 px-4 text-center !text-white">
                      {invoice.devicetype}
                    </span>
                  </TableCell>
                  <TableCell className="">
                  <span
                    className={`m-auto inline-block h-max min-w-max rounded-[18px] px-4 text-center opacity-90
                    
                    
                    ${
                      invoice.status == null && invoice.assignedvendor !== null
                      ? "!bg-yellow-400":
                      invoice.assignedvendor == null && invoice.status == null
                      ? "!bg-white"
                        : invoice.status == "Cn-Cancelled by Customer"
                          ? "!bg-[#FFA0A0] text-[#222222]"
                          : invoice.status?.startsWith("Cn-")
                            ? " !bg-[#0ed380] text-[#111a1c]"
                            : invoice.status == "F-Cancelled by Cashkr"
                              ? " !bg-[#0ed380] text-[#111a1c]"
                              : invoice.status?.startsWith("F-")
                                ? "!bg-[#F64848] text-white"
                                : invoice.status == "Assigned"
                                  ? "!bg-[#FF974A]"
                                  : invoice.status === "F-Sold Somewhere else"
                                    ? "!bg-[#bf2fb8]"
                                    : invoice.status?.startsWith("C-")
                                      ? "!bg-[#82C43C]"
                                      : invoice.status.startsWith("v-") &&
                                        "!bg-[#92B7FF]"
                    } bg-red-400 p-1 px-2 text-black  `}
                  >
                    {invoice.status == null && invoice.assignedvendor == null
                      ? "Generated"
                      : invoice.status == null &&
                          invoice.assignedvendor !== null
                        ? "Assigned to Vendor"
                        : invoice.status?.startsWith("Cn-")
                          ? "Cancelled"
                          : invoice.status?.startsWith("F-")
                            ? "Failed"
                            : invoice.status?.startsWith("C-")
                              ? "Completed"
                              : invoice.status.startsWith("v-")
                                ? "In Progress"
                                : invoice.status?.split("-")[1]}
                  </span>
                  </TableCell>
                </TableRow>
              ))}
              {invoices?.length < 1 && (
                <p className=" p-4 text-xl">No Search Results Found.</p>
              )}
            </TableBody>
          )}
          {!invoices && isLoading && <TableSkeleton skeleton={5} />}
        </Table>
        {totalPage && (
          <div className="sticky bottom-0 flex w-full flex-col items-end border-t border-t-tableSeperator bg-primaryBackground">
            <TabelPagination
              tableType="Primary"
              totalPage={totalPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </ScrollArea>
    </>
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