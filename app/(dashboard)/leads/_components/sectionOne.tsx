"use client";
import React, { useEffect, useState } from "react";
import { PrimaryTable } from "./PrimaryTable";

import { CardContainer } from "./CardContainer";
import { FilterMenubar } from "./FilterMenubar";
import { deviceType } from "@/interfaces";
import { SheetDemo } from "./Sheet";

export interface LeadInterface {
  success: boolean;
  leads: {
    pagelimit: number;
    data: InvoiceInterface[];
  };
  Ringing: number;
  Callback: number;
  SwitchedOff: number;
  Pending: number;
  Converted: number;
}

export interface InvoiceInterface {
  id: string;
  pickupdate: string;
  timestamp: string;
  devicename: string;
  pickuptime: string;
  devicetype: string;
  status:
    | "Cn-Cancelled by Customer"
    | "F-Cancelled by Customer"
    | "F-Cancelled by Cashkr"
    | "Cn-Cancelled by Cashkr"
    | "F-Sold Somewhere else"
    | "Failed"
    | "V-Out For Pickup"
    | "Assigned"
    | "C-Completed"
    | null;
  assignedvendor: string | null;
}

const SectionOne = ({
  varient,
}: {
  varient: "lead" | "orders" | "failed" | "vendors";
}) => {
  const [invoices, setInvoices] = useState<LeadInterface>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [SelectedRow, SetSelectedRow] = useState<{
    lead: string;
    devicetype: deviceType;
  }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isApplied, setIsApplied] = useState(false);
  const [filterQueries, setFilterQueries] = useState<{
    search: string;
    city: string;
    status: string;
    fromDate: Date;
    toDate: Date;
    category: string;
  }>({
    search: "",
    city: "",
    status: "",
    fromDate: undefined,
    toDate: undefined,
    category: "",
  });
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
  }, [currentPage, filterQueries]);

  return (
    <div className=" w-full space-y-2 py-4">
      <FilterMenubar
        isApplied={isApplied}
        setIsApplied={setIsApplied}
        isLoading={isLoading}
        filterQueries={filterQueries}
        setFilterQueries={setFilterQueries}
      />
      <div className="space-y-6  px-8">
        <div className="w-full rounded-[12px]  bg-primaryBackground">
          <h4 className=" px-4 py-2 text-lg font-semibold tracking-wide">
            Recent Leads
          </h4>
          <PrimaryTable
            key={SelectedRow?.lead}
            setIsOpen={setIsOpen}
            SetSelectedRow={SetSelectedRow}
            isLoading={isLoading}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={invoices?.leads.pagelimit}
            invoices={invoices?.leads.data}
          />
        </div>
        {invoices && (
          <CardContainer
            Callback={invoices.Callback}
            Converted={invoices.Converted}
            Pending={invoices.Pending}
            Ringing={invoices.Ringing}
            SwitchedOff={invoices.SwitchedOff}
          />
        )}
        {SelectedRow && (
          <SheetDemo
            SelectedRow={SelectedRow}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        )}
      </div>
    </div>
  );
};

export default SectionOne;
