"use client";
import React, { useEffect, useState } from "react";

import SecondaryTable from "./SecondaryTable";
import { CardContainer } from "./CardContainer";
import { SheetDemo } from "./sheet";
import { deviceType } from "@/interfaces";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";
import { PrimaryTable } from "./PrimaryTable";
import { FilterMenubar } from "@/components/FilterMenubar";

export interface InvoiceInterface {
  success: boolean;
  orders: {
    pagelimit: number;
    data: {
      id: string;
      timestamp: string;
      devicename: string;
      city: string | null;
      devicetype: string;
      status:
        | "Generated"
        | "Cn-Cancelled by Customer"
        | "Failed"
        | "Out For Pickup"
        | "Assigned"
        | "C-Completed"
        | null;
    }[];
  };
  leads: {
    pagelimit: number;
    data: {
      id: string;
      pickupdate: string;
      devicename: string;
      pickuptime: string;
      devicetype: string;
      status: string | null;
      assignedvendor: string;
    }[];
  };
  completedOrdersCount: number;
  availableOrdersCount: number;
  failedOrdersCount: number;
  assignedOrdersCount: number;
}
const BasePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [invoices, setInvoices] = useState<InvoiceInterface>();
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
  const [currentOrderPage, setCurrentOrderPage] = useState<number>(1);
  const [currentLeadPage, setCurrentLeadPage] = useState<number>(1);
  const [isApplied, setIsApplied] = useState(false);
  const [SelectedRow, SetSelectedRow] = useState<{
    lead: number;
    devicetype: deviceType;
  }>();
  useEffect(() => {
    setIsLoading(true),
      (async function () {
        const res = await fetch(`/api/getallorders`, {
          method: "POST",
          body: JSON.stringify({
            orderPage: currentOrderPage,
            leadPage: currentLeadPage,
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
        console.log(data);
      })();
  }, [currentLeadPage, currentOrderPage, isOpen, filterQueries]);
  console.log(isApplied);
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
        {!invoices && <TableSkeleton />}
        {isLoading && <TableSkeleton />}
        {invoices && (
          <div className="w-full rounded-[12px]  bg-primaryBackground py-4">
            <PrimaryTable
              SetSelectedRow={SetSelectedRow}
              currentPage={currentOrderPage}
              setCurrentPage={setCurrentOrderPage}
              totalPage={invoices.orders.pagelimit}
              setIsOpen={setIsOpen}
              invoices={invoices.orders.data}
            />
          </div>
        )}

        {invoices && (
          <CardContainer
            cardsValues={{
              completedOrdersCount: invoices.completedOrdersCount,
              assignedOrdersCount: invoices.assignedOrdersCount,
              availableOrdersCount: invoices.availableOrdersCount,
              failedOrdersCount: invoices.failedOrdersCount,
            }}
          />
        )}
        {invoices && (
          <div className="w-full rounded-[12px]  bg-primaryBackground py-4">
            <SecondaryTable
              currentPage={currentLeadPage}
              setCurrentPage={setCurrentLeadPage}
              totalPage={invoices.leads.pagelimit}
              leads={invoices.leads.data}
            />
          </div>
        )}
        {SelectedRow && (
          <SheetDemo
            SelectedRow={SelectedRow}
            varient={"orders"}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        )}
      </div>
    </div>
  );
};

export default BasePage;
