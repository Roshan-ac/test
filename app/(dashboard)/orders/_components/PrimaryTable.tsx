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
import { parseISO, format } from 'date-fns';
import { InvoiceInterface } from "./BasePage";
import { TabelPagination } from "@/components/Internals/TabelPagination";

type ordersData = {
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
    | "Assigned"
    | "Completed"
    | null;
}


export function PrimaryTable({
  setIsOpen,
  invoices,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  invoices: ordersData[];
}) {
  return (
    <ScrollArea className="relative h-[70vh] w-full rounded-md">
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

        <TableBody className="w-full">
          {invoices &&
            invoices.map((invoice, index) => (
              <TableRow
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
                className="group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60"
                key={index}
              >
                <TableCell className="border-r border-r-tableSeperator">
                  <Date dateString={invoice.timestamp}/>
                </TableCell>
                <TableCell className="border-r border-r-tableSeperator">
                  {invoice.devicetype}
                </TableCell>
                <TableCell className="border-r border-r-tableSeperator">
                  {invoice.city}
                </TableCell>
                <TableCell className="flex justify-center border-r  border-r-tableSeperator">
                  <span className="h-max w-max rounded-[18px] bg-purple-600 p-1 px-4 text-center !text-white">
                    {invoice.devicetype}
                  </span>
                </TableCell>
                <TableCell className="">
                  <span
                    className={`inline-block h-max min-w-[100px] rounded-[18px] px-4 text-center  ${
                      invoice.status == "Generated" || invoice.status== null
                        ? "bg-white"
                        : invoice.status == "Cn-Cancelled by Customer"
                          ? "bg-[#FFA0A0]"
                          : invoice.status == "Failed"
                            ? "bg-[#F64848] text-white"
                            : invoice.status == "Assigned"
                              ? "bg-[#FF974A]"
                              : invoice.status == "Completed"
                                ? "bg-[#82C43C]"
                                : invoice.status == "Out For Pickup" &&
                                  "bg-[#92B7FF]"
                    } p-1 px-2 text-black  `}
                  >
                    {invoice.status==null?'Generated':invoice.status}
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



export function Date({ dateString }:{dateString:string}) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}