"use client";
import React, { useEffect, useState } from "react";
import { PrimaryTable } from "./PrimaryTable";
import { CardContainer } from "@/components/Internals/CardContainer";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";
import { FilterMenubar } from "@/components/FilterMenubar";

export interface LeadInterface {
  success: boolean;
  leads: {
    pagelimit: number;
    data: InvoiceInterface[];
  };
  completedOrdersCount: number;
  availableOrdersCount: number;
  assignedOrdersCount: number;
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
        <div className="w-full rounded-[12px]  bg-primaryBackground py-4">
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
            completed={invoices.completedOrdersCount}
            available={invoices.availableOrdersCount}
            assigned={invoices.assignedOrdersCount}
          />
        )}
      </div>
    </div>
  );
};

export default SectionOne;
