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
// import { TabelPagination } from "@/components/Internals/TabelPagination";
import { InvoiceInterface } from "./BasePage";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";

type leads = {
  id: string;
  pincode: number;
  city: string;
  status: string;
  device:number;
  vendors: string;
};

export function PrimaryTable({
  setIsOpen,
  isLoading,
  invoices,
  setCurrentPage,
  currentPage,
  totalPage,
  SetSelectedRow,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  invoices: leads[];
  isLoading: boolean;
  currentPage: number;
  totalPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  SetSelectedRow: Dispatch<SetStateAction<object>>;
}) {
  return (
    <ScrollArea className="relative h-max w-full rounded-md">
      <Table>
        <TableHeader className=" !sticky left-0  top-0 z-[1] w-full dark:hover:bg-hoverColor">
          <TableRow className="bg-tertiaryBackground ">
            <TableHead className="w-max">Brand</TableHead>
            <TableHead>Model</TableHead>
            <TableHead className="">Varient</TableHead>
            <TableHead className="">Type</TableHead>
            <TableHead className="text-center">Price</TableHead>
          </TableRow>
        </TableHeader>

        {invoices && (
          <TableBody className="w-full">
            {invoices.map((invoice, index) => (
              <TableRow
                onClick={() => {
                  // SetSelectedRow({
                  //   lead: invoice.id,
                  //   devicetype: invoice.devicetype,
                  // });
                  setIsOpen((prev) => !prev);
                }}
                className="group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60"
                key={index}
              >
                <TableCell className="border-r border-r-tableSeperator">
                  {invoice.pincode}
                </TableCell>
                <TableCell className="border-r border-r-tableSeperator">
                  {invoice.city ?? "null"}
                </TableCell>
                <TableCell className="border-r border-r-tableSeperator">
                  <span
                    className={`inline-block h-max min-w-full rounded-[18px] bg-purple-600 p-1 px-2 text-center !text-white opacity-90`}
                  >
                    {invoice.vendors}
                  </span>
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
            {invoices?.length < 1 && (
              <p className=" p-4 text-xl">No Search Results Found.</p>
            )}
          </TableBody>
        )}
        {!invoices && isLoading && <TableSkeleton skeleton={5} />}
      </Table>
      <div className="sticky bottom-0 flex w-full flex-col items-end border-t border-t-tableSeperator bg-primaryBackground">
        {/* <TabelPagination
          tableType="Primary"
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        /> */}
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
