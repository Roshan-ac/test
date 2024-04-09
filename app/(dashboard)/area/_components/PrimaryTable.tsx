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
import { TableSkeleton } from "@/components/Internals/tableSkeleton";
import { deviceType } from "@/interfaces";

type leads = {
  id: string;
  pincode: number;
  city: string;
  status: string;
  device: number;
  vendors: string;
};

export function PrimaryTable({
  setIsOpen,
  isLoading,
  invoices,
  setCurrentPage,
  setSelectInvoice,
  currentPage,
  totalPage,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  invoices: InvoiceInterface;
  isLoading: boolean;
  setSelectInvoice:Dispatch<SetStateAction<any>>
  currentPage: number;
  totalPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) {

  return (
    <ScrollArea className="relative h-max w-full rounded-md">
      <Table>
        <TableHeader className=" !sticky left-0  top-0 z-[1] w-full dark:hover:bg-hoverColor">
          <TableRow className="bg-tertiaryBackground ">
            <TableHead className="w-max">Pincodes</TableHead>
            <TableHead>City</TableHead>
            <TableHead className="">State</TableHead>
            <TableHead className="">Device Type</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>

        {invoices && invoices.data ? (
          <TableBody className="w-full">
            {invoices.data.map((invoice, index) => (
              <TableRow
                onClick={() => {
                  setSelectInvoice(invoice);
                  setIsOpen((prev) => !prev);
                }}
                className="group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60"
                key={index}
              >
                <TableCell className="border-r border-r-tableSeperator">
                  {invoice.pvalue}
                </TableCell>
                <TableCell className="border-r border-r-tableSeperator">
                  {invoice.city ?? "null"}
                </TableCell>
                <TableCell className="border-r border-r-tableSeperator">
                  <span
                    className={`inline-block w-max  p-1 px-2 text-center !text-white opacity-90`}
                  >
                    {invoice.state}
                  </span>
                </TableCell>
                <TableCell className="w-max border-r border-r-tableSeperator">
                  <span
                    className={`inline-block h-max w-max  p-1 px-2 text-center !text-white opacity-90`}
                  >
                    {invoice.devicetype}
                  </span>
                </TableCell>
                <TableCell className="w-12">
                  <span
                    className={`inline-block ${
                      invoice.status == "active"
                        ? " bg-green-500 text-white"
                        : invoice.status == "hold"
                          ? " bg-orange-300 text-white"
                          : " bg-red-500 text-white"
                    } m-auto h-max w-max rounded-[18px] p-1 px-4 text-center opacity-90 `}
                  >
                    {invoice.status == "active"
                      ? "Live"
                      : invoice.status == "hold"
                        ? "Hold"
                        : " In active"}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          {invoices?.data.length < 1 && (
            <p className=" p-4 text-xl">No Search Results Found.</p>
          )}
          </TableBody>
        ) : isLoading && (
          <TableSkeleton skeleton={5} />
        )}
      </Table>
      <div className="sticky bottom-0 flex w-full flex-col items-end border-t border-t-tableSeperator bg-primaryBackground">
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
  return (
    <time dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
      {date.getTime()}
    </time>
  );
}
