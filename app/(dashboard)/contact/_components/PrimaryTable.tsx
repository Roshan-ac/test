"use client";
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
import { TableSkeleton } from "@/components/Internals/tableSkeleton";
import { MessageInterface } from "./BasePage";

export function PrimaryTable({
  setIsOpen,
  selectedRow,
  isLoading,
  invoices,
  setCurrentPage,
  currentPage,
  totalPage,
  SetSelectedRow,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  invoices: MessageInterface;
  selectedRow: {
    id: number;
  };
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
            <TableHead className="w-max">Date</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead className="">Email</TableHead>
            <TableHead className="">Category</TableHead>
          </TableRow>
        </TableHeader>

        {invoices && invoices.data && (
          <TableBody className="w-full">
            {invoices.data.map((invoice, index) => (
              <TableRow
                onClick={() => {
                  SetSelectedRow({
                    id: invoice.id,
                  }),
                    setIsOpen(true);
                }}
                className={` ${selectedRow?.id === invoice.id ? "bg-hoverColor text-black" : ""} group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60`}
                key={index}
              >
                <TableCell className="border-r border-r-tableSeperator">
                  {invoice.date}
                </TableCell>
                <TableCell className="border-r border-r-tableSeperator">
                  {invoice.fullname ?? "null"}
                </TableCell>
                <TableCell className="border-r border-r-tableSeperator">
                  {invoice.email ?? "null"}
                </TableCell>
                <TableCell
                  className={`border-r ${invoice.category == "Recycle Device" ? " text-green-500" : invoice.category == "Partner With Us" ? "text-orange-500" : "text-blue-500"} border-r-tableSeperator`}
                >
                  {invoice.category ?? "null"}
                </TableCell>
              </TableRow>
            ))}
            {invoices.data?.length < 1 && (
              <p className=" p-4 text-xl">No Search Results Found.</p>
            )}
          </TableBody>
        )}
      </Table>
      {totalPage && (
        <div className="sticky bottom-0 flex w-full flex-col items-end border-t border-t-tableSeperator bg-primaryBackground">
          {/* <TabelPagination
            tableType="Primary"
            totalPage={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> */}
        </div>
      )}
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
