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
import { VendorsInterface } from "./BasePage";
import { cn } from "@/lib/utils";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";

export function PrimaryTable({
  setIsOpen,
  invoices,
  isLoading,
  SetSelectedRow,
}: {
  isLoading: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  invoices: VendorsInterface[];
  SetSelectedRow: Dispatch<SetStateAction<object>>;
}) {
  return (
    <ScrollArea className="relative h-[70vh] w-full rounded-md">
      <Table>
        <TableHeader className=" !sticky  left-0 top-0 w-full dark:hover:bg-hoverColor">
          <TableRow className="bg-tertiaryBackground ">
            <TableHead className="w-max">Vendor Id</TableHead>
            <TableHead>Vendor</TableHead>
            <TableHead>City</TableHead>
            <TableHead className="text-center">Contact</TableHead>
            <TableHead>Alternative No</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        {invoices && (
          <TableBody className="w-full">
            {invoices.map((invoice, index) => (
              <TableRow
                onClick={() => {
                  SetSelectedRow(invoice);
                  setIsOpen((prev) => !prev);
                }}
                className="group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60"
                key={index}
              >
                <TableCell className="border-r border-r-tableSeperator">
                  {invoice.id}
                </TableCell>

                <TableCell className="border-r border-r-tableSeperator">
                  {invoice.name}
                </TableCell>

                <TableCell className="border-r border-r-tableSeperator">
                  null
                </TableCell>

                <TableCell className="border-r  border-r-tableSeperator">
                  {invoice.phone}
                </TableCell>

                <TableCell className="border-r  border-r-tableSeperator">
                  {/* alternative no */}
                  {invoice.phone}
                </TableCell>

                <TableCell className="">
                  <span
                    className={cn(
                      "inline-block h-max min-w-[100px] rounded-[18px] px-4 text-center",
                      {
                        "bg-[#B5B5BE]": invoice.applicationStatus === "0",
                        "bg-[#82C43C]": invoice.applicationStatus === "1",
                        "bg-[#FC5A5A]": invoice.applicationStatus === "-1",
                      },
                      "p-1 px-2 text-black  ",
                    )}
                  >
                    {invoice.applicationStatus === "0" && "Applied"}
                    {invoice.applicationStatus === "1" && "Live"}
                    {invoice.applicationStatus === "-1" && "Dismissed"}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
        {!invoices && isLoading && <TableSkeleton skeleton={6} />}
      </Table>
      <div className="sticky bottom-0 flex w-full flex-col items-end border-t border-t-tableSeperator bg-primaryBackground">
        {/* <TabelPagination /> */}
      </div>
    </ScrollArea>
  );
}

export function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
