"use client";
import React, { useEffect, useState } from "react";

import SecondaryTable from "./SecondaryTable";
import { CardContainer } from "./CardContainer";
import { SheetDemo } from "./sheet";
import { deviceType } from "@/interfaces";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";
import { PrimaryTable } from "./PrimaryTable";

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
  assignedOrdersCount: number;
}
const BasePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [invoices, setInvoices] = useState<InvoiceInterface>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [currentOrderPage, setCurrentOrderPage] = useState<number>(1);
  const [currentLeadPage, setCurrentLeadPage] = useState<number>(1);
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
          }),
        });
        if (!res.ok) {
          console.log("Error :", res);
        }
        const data = await res.json();
        setInvoices(data);
        console.log(data);
      })();
    setIsLoading(false);
  }, [currentLeadPage, currentOrderPage, isOpen]);

  return (
    <div className=" w-full gap-4 space-y-6 px-8">
      {!invoices && <TableSkeleton />}
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
  );
};

export default BasePage;
