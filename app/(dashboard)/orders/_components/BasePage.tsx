"use client";
import React, { useEffect, useState } from "react";

import SecondaryTable from "./SecondaryTable";
import { CardContainer } from "./CardContainer";
import { SheetDemo } from "./sheet";
import { deviceType } from "@/interfaces";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";
import { PrimaryTable } from "./PrimaryTable";
import { FilterMenubar } from "@/components/FilterMenubar";
import { ProgressWrapper } from "@/context/progressContext";

export interface InvoiceInterface {
  success: boolean;
  orders: {
    pagelimit: number;
    data: {
      id: number;
      timestamp: string;
      assignedvendor: string;
      devicename: string;
      city: string | null;
      devicetype: string;
      status:
        | "Generated"
        | "Cn-Cancelled by Customer"
        | "F-Cancelled by Customer"
        | "F-Cancelled by Cashkr"
        | "Cn-Cancelled by Cashkr"
        | "Failed"
        | "V-Out For Pickup"
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
      status:
        | "Cn-Cancelled by Customer"
        | "F-Cancelled by Customer"
        | "F-Cancelled by Cashkr"
        | "Cn-Cancelled by Cashkr"
        | "Failed"
        | "V-Out For Pickup"
        | "Assigned"
        | "C-Completed"
        | null;
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
  const [isUpdated, setIsUpdated] = useState<boolean>();
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
    setInvoices(undefined);
    setIsLoading(true);
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
      const data = await res.json();
      setInvoices(data);
      setIsLoading(false);
    })();
  }, [currentLeadPage, currentOrderPage, isUpdated, filterQueries]);

  return (
    <ProgressWrapper>
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
              Recent Orders
            </h4>
            <PrimaryTable
              selectedRow={SelectedRow}
              isLoading={isLoading}
              SetSelectedRow={SetSelectedRow}
              currentPage={currentOrderPage}
              setCurrentPage={setCurrentOrderPage}
              totalPage={invoices?.orders.pagelimit}
              setIsOpen={setIsOpen}
              invoices={invoices?.orders.data}
            />
          </div>

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
            <div className="w-full rounded-[12px]  bg-primaryBackground">
              <h4 className=" px-4 py-2 text-lg font-semibold tracking-wide">
                Order Timeline
              </h4>
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
              isUpdated={isUpdated}
              setIsUpdated={setIsUpdated}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          )}
        </div>
      </div>
    </ProgressWrapper>
  );
};

export default BasePage;
