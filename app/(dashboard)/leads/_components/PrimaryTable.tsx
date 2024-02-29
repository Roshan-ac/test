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
import { useState } from "react";
import { InvoiceInterface } from "./sectionOne";
import { SheetDemo } from "./Sheet";
import { Date } from "@/components/Internals/PrimaryTable";


export function PrimaryTable({ invoices }: { invoices: InvoiceInterface[] }) {
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

  console.log(leadDetails);

  return (
    <>
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
                  onClick={() =>
                    handleOrderClick(invoice.devicetype, invoice.id)
                  }
                  className="group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60"
                  key={index}
                >
                  <TableCell className="border-r border-r-tableSeperator">
                    <Date dateString={invoice.timestamp} />
                  </TableCell>
                  <TableCell className="border-r max-w-[260px] break-words border-r-tableSeperator">
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
                      className={`inline-block h-max min-w-[100px] rounded-[18px] px-4 text-center  ${
                        invoice.status?.startsWith("cn") ||
                        invoice.status === null
                          ? "bg-white"
                          : invoice.status == "Cancelled"
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
                      {invoice.status === null && "Generated"}
                      {invoice.status}
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
      <SheetDemo
        varient={"lead"}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        lead={leadDetails}
      />
    </>
  );
}
