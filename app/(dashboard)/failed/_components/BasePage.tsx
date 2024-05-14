"use client";
import React, { useEffect, useState } from "react";

import SecondaryTable from "./SecondaryTable";
import { CardContainer } from "./CardContainer";
import { SheetDemo } from "./sheet";
import { deviceType } from "@/interfaces";
import { PrimaryTable } from "./PrimaryTable";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";
import { FilterMenubar } from "@/components/FilterMenubar";

export interface InvoiceInterface {
  success: boolean;
  leads: {
    pagelimit: number;
    data: {
      id: number;
      pickupdate: string;
      devicename: string;
      pickuptime: string;
      devicetype: string;
      reason: string;
      status: string;
      city: string;
      assignedvendor: string;
    }[];
  };
  rejectedLeads: number;
  acceptedLeads: number;
  pendingLeads: number;
}

const BasePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [invoices, setInvoices] = useState<InvoiceInterface>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isApplied, setIsApplied] = useState(false);
  const [SelectedRow, SetSelectedRow] = useState<{
    lead: number;
    devicetype: deviceType;
  }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    setIsLoading(true);
    (async function () {
      const res = await fetch("/api/getAllFailedLeads", {
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

  console.log(invoices);

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
            Failed Leads
          </h4>
          <PrimaryTable
            selectedRow={SelectedRow}
            isLoading={isLoading}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={invoices?.leads?.pagelimit}
            SetSelectedRow={SetSelectedRow}
            setIsOpen={setIsOpen}
            invoices={invoices?.leads?.data}
          />
        </div>

        {invoices && (
          <CardContainer
            cardsValues={{
              acceptedLeads: invoices.acceptedLeads,
              pendingLeads: invoices.pendingLeads,
              rejectedLeads: invoices.rejectedLeads,
            }}
          />
        )}
        {SelectedRow && (
          <SheetDemo
            SelectedRow={SelectedRow}
            varient={"failed"}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        )}
      </div>
    </div>
  );
};

export default BasePage;
