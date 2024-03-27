"use client";
import React, { useEffect, useState } from "react";
import { PrimaryTable } from "./PrimaryTable";
import { FilterMenubar } from "@/components/FilterMenubar";
import { CardContainer } from "./CardContainer";

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
    | "Generated"
    | "Cancelled"
    | "Failed"
    | "Out For Pickup"
    | "Assigned"
    | "Completed"
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
        if (!res.ok) {
          console.log("Error :", res);
        }
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
      </div>
    </div>
  );
};

export default SectionOne;
