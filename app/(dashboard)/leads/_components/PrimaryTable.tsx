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
import { Dispatch, SetStateAction, useState } from "react";
import { InvoiceInterface } from "./sectionOne";
import { SheetDemo } from "./Sheet";
import { Date } from "@/components/Internals/PrimaryTable";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";

export function PrimaryTable({
  invoices,
  setCurrentPage,
  currentPage,
  isLoading,
  totalPage,
}: {
  invoices: InvoiceInterface[];
  currentPage: number;
  isLoading: boolean;
  totalPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [leadDetails, setLeadDetails] = useState<any>();

  const handleOrderClick = async (devicetype: string, lead: string) => {
    setIsOpen((prev) => !prev);
    const res = await fetch(`/api/getFullBookings/${devicetype}`, {
      method: "POST",
      body: JSON.stringify({
        leadId: lead,
      }),
    });

    if (!res.ok) {
      console.log(res);
    }
    const data = await res.json();
    console.log(data);
    setLeadDetails(data.myBookings);
  };

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
              {invoices.map((invoice, index) => (
                <TableRow
                  onClick={() =>
                    handleOrderClick(invoice.devicetype, invoice.id)
                  }
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
                    {"Mumbai"}
                  </TableCell>
                  <TableCell className="flex justify-center border-r  border-r-tableSeperator">
                    <span className="h-max w-max rounded-[18px] bg-purple-600 p-1 px-4 text-center !text-white">
                      {invoice.devicetype}
                    </span>
                  </TableCell>
                  <TableCell className="">
                    <span
                      className={`m-auto inline-block h-max min-w-max rounded-[18px] px-4 text-center opacity-90  ${
                         invoice.status == null
                          ? "!bg-white"
                          : invoice.status == "Cn-Cancelled by Customer"
                            ? "!bg-[#FFA0A0] text-[#222222]"
                            : invoice.status == "Cn-Cancelled by Cashkr"
                              ? " !bg-[#0ed380] text-[#111a1c]"
                              : invoice.status == "F-Cancelled by Cashkr"
                                ? " !bg-[#0ed380] text-[#111a1c]"
                                : invoice.status == "Failed"
                                  ? "!bg-[#F64848] text-white"
                                  : invoice.status == "Assigned"
                                    ? "!bg-[#FF974A]"
                                    : invoice.status === "F-Sold Somewhere else"
                                      ? "!bg-[#bf2fb8]"
                                      : invoice.status == "C-Completed"
                                        ? "!bg-[#82C43C]"
                                        : invoice.status ===
                                            "V-Out For Pickup" &&
                                          "!bg-[#92B7FF]"
                      } bg-red-400 p-1 px-2 text-black  `}
                    >
                      {invoice.status.split("-")[1]}
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
          <TabelPagination
            tableType="Primary"
            totalPage={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </ScrollArea>
      {leadDetails && (
        <SheetDemo
          varient={"lead"}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          lead={leadDetails}
        />
      )}
    </>
  );
}
