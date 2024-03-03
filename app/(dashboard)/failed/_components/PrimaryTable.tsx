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
import { InvoiceInterface } from "./BasePage";

type leads = {
  id: string;
  pickupdate: string;
  devicename: string;
  pickuptime: string;
  devicetype: string;
  reason:string;
  status: string;
  city:string;
  assignedvendor: string;
};

export function PrimaryTable({
  setIsOpen,
  invoices,
  SetSelectedRow,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  invoices: leads[];
  SetSelectedRow: Dispatch<SetStateAction<object>>;
}) {
  console.log(invoices)
  return (
    <ScrollArea className="relative h-[70vh] w-full rounded-md">
    <Table>
      <TableHeader className=" !sticky left-0  top-0 z-[1] w-full dark:hover:bg-hoverColor">
        <TableRow className="bg-tertiaryBackground ">
          <TableHead className="w-max">Order Date</TableHead>
          <TableHead>Vendor</TableHead>
          <TableHead className="">City</TableHead>
          <TableHead className="text-center">Type</TableHead>
          <TableHead className="text-center">Reason</TableHead>
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
                {invoice.pickupdate}{" "}{invoice.pickuptime}
              </TableCell>
              <TableCell className="max-w-[260px] break-words border-r border-r-tableSeperator">
                {invoice.assignedvendor}
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
              <TableCell className="border-r border-r-tableSeperator">
                {invoice.reason ?? "null"}
              </TableCell>
              <TableCell className="w-max">
                <span
                  className={`inline-block h-max min-w-full rounded-[18px] px-4 text-center opacity-90  ${
                    invoice.status == "Generated" || invoice.status == null
                      ? "bg-white"
                      : invoice.status == "Cn-Cancelled by Customer"
                        ? "bg-[#FFA0A0] text-[#222222]"
                        : invoice.status == "Cn-Cancelled by Cashkr"
                          ? " bg-[#0ed380] text-[#111a1c]"
                          : invoice.status == "Failed"
                            ? "bg-[#F64848] text-white"
                            : invoice.status == "Assigned"
                              ? "bg-[#FF974A]"
                              : invoice.status == "C-Completed"
                                ? "bg-[#82C43C]"
                                : invoice.status == "Out For Pickup" &&
                                  "bg-[#92B7FF]"
                  } p-1 px-2 text-black  `}
                >
                  {invoice.status == null ? "Generated" : invoice.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
    <div className="sticky bottom-0 flex w-full flex-col items-end border-t border-t-tableSeperator bg-primaryBackground">
      <TabelPagination />
    </div>
  </ScrollArea>
  );
}

export function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
      {date.getTime()}
    </time>
  );
}
