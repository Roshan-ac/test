import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { parseISO, format } from "date-fns";
import { TabelPagination } from "@/components/Internals/TabelPagination";

type OrdersData = {
  id: string;
  timestamp: string;
  devicename: string;
  city: string | null;
  devicetype: string;
  status:
    | "Generated"
    | "Cn-Cancelled by Customer"
    | "Failed"
    | "Out For Pickup"
    | "Cn-Cancelled by Cashkr"
    | "Assigned"
    | "C-Completed"
    | null;
};

export function PrimaryTable({
  setIsOpen,
  SetSelectedRow,
  totalPage,
  invoices,
  currentPage,
  setCurrentPage,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  SetSelectedRow: Dispatch<SetStateAction<object>>;
  currentPage: number;
  totalPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  invoices: OrdersData[];
}) {
  return (
    <ScrollArea className="relative h-max w-full rounded-md">
      <Table>
        <TableHeader className=" !sticky left-0  top-0 z-[1] w-full dark:hover:bg-hoverColor">
          <TableRow className="bg-tertiaryBackground ">
            <TableHead className="w-max">Order Date</TableHead>
            <TableHead>Model</TableHead>
            <TableHead className="">City</TableHead>
            <TableHead className="text-center">Type</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="w-full">
          {invoices &&
            invoices.map((invoice, index) => (
              <TableRow
                onClick={() => {
                  SetSelectedRow({
                    lead: invoice.id,
                    devicetype: invoice.devicetype,
                  });
                  setIsOpen((prev) => !prev);
                }}
                className="group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60"
                key={index}
              >
                <TableCell className="border-r border-r-tableSeperator">
                  <Date dateString={invoice.timestamp} />
                </TableCell>
                <TableCell className="max-w-[280px] overflow-hidden truncate border-r border-r-tableSeperator">
                  {invoice.devicename}
                </TableCell>
                <TableCell className="border-r border-r-tableSeperator">
                  {invoice.city ?? "null"}
                </TableCell>
                <TableCell className="border-r border-r-tableSeperator">
                  <span
                    className={`inline-block h-max min-w-full rounded-[18px] bg-purple-600 p-1 px-2 text-center !text-white opacity-90`}
                  >
                    {invoice.devicetype}
                  </span>
                </TableCell>
                <TableCell className="w-max">
                  <span
                    className={`m-auto inline-block h-max min-w-max rounded-[18px] px-4 text-center opacity-90  ${
                      invoice.status == "Generated" || invoice.status == null
                        ? "!bg-white"
                        : invoice.status == "Cn-Cancelled by Customer"
                          ? "!bg-[#FFA0A0] text-[#222222]"
                          : invoice.status == "Cn-Cancelled by Cashkr"
                            ? " !bg-[#0ed380] text-[#111a1c]"
                            : invoice.status == "Failed"
                              ? "!bg-[#F64848] text-white"
                              : invoice.status == "Assigned"
                                ? "!bg-[#FF974A]"
                                : invoice.status == "C-Completed"
                                  ? "!bg-[#82C43C]"
                                  : invoice.status == "Out For Pickup" &&
                                    "!bg-[#92B7FF]"
                    } bg-red-400 p-1 px-2 text-black  `}
                  >
                    {invoice.status == null
                      ? "Generated"
                      : invoice.status.split("-")[1]}
                  </span>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="sticky bottom-0 flex w-full border-t border-t-tableSeperator bg-primaryBackground">
        <TabelPagination
          tableType="Primary"
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
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
