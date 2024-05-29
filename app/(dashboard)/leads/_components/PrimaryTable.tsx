"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { TabelPagination } from "@/components/Internals/TabelPagination";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { InvoiceInterface, LeadInterface } from "./sectionOne";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";
import { parseISO } from "date-fns";
import { deviceType } from "@/interfaces";
import { useProgressContext } from "@/context/progressContext";
import { CardContainer } from "./CardContainer";

export function PrimaryTable({
  selectedRow,
  filterQueries,
  SetSelectedRow,
  setIsOpen,
}: {
  filterQueries: {
    search: string;
    city: string;
    status: string;
    fromDate: Date;
    toDate: Date;
    category: string;
  };
  selectedRow: {
    lead: string;
    devicetype: deviceType;
  };
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  SetSelectedRow: Dispatch<
    SetStateAction<{
      lead: string;
      devicetype: string;
    }>
  >;
}) {
  const [invoices, setInvoices] = useState<LeadInterface>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { showProgress } = useProgressContext();
  useEffect(() => {
    setInvoices(undefined);
    setIsLoading(true),
      (async function () {
        const res = await fetch("/api/getallleads", {
          method: "POST",
          body: JSON.stringify({
            orderPage: currentPage,
            search: filterQueries.search,
            city: filterQueries.city,
            status: filterQueries.status,
            fromDate: filterQueries.fromDate,
            toDate: filterQueries.toDate,
            category: filterQueries.category,
          }),
        });

        const data = await res.json();
        setInvoices(data);
        setIsLoading(false);
      })();
  }, [currentPage, filterQueries,showProgress]);

  return (
    <div className="flex flex-col gap-4">
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
            <TableBody className="w-full bg-primaryBackground">
              {invoices?.leads.data.map((invoice, index) => (
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
                    <span>{invoice.desposition}</span>
                  </TableCell>
                </TableRow>
              ))}
              {invoices?.leads.data.length < 1 && (
                <p className=" p-4 text-xl">No Search Results Found.</p>
              )}
            </TableBody>
          )}
          {isLoading &&<TableSkeleton skeleton={5} />}
        </Table>
        {invoices?.leads?.pagelimit && (
          <div className="sticky bottom-0 flex w-full flex-col items-end border-t border-t-tableSeperator bg-primaryBackground">
            {/* <TabelPagination
              tableType="Primary"
              totalPage={invoices.leads.pagelimit}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            /> */}
          </div>
        )}
      </ScrollArea>

      <CardContainer
        Callback={invoices?.Callback}
        Converted={invoices?.Converted}
        Pending={invoices?.Pending}
        Ringing={invoices?.Ringing}
        SwitchedOff={invoices?.SwitchedOff}
      />
    </div>
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
