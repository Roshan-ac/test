"use client";
import React, { useEffect, useState } from "react";
import { PrimaryTable } from "@/components/Internals/PrimaryTable";
import SecondaryTable from "./SecondaryTable";
import { CardContainer } from "./CardContainer";
import { SheetDemo } from "./sheet";
import { deviceType } from "@/interfaces";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";

export interface InvoiceInterface {
  success: boolean;
  orders: {
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
      | "Completed"
      | null;
  }[];
  leads: {
    id: string;
    pickupdate: string;
    devicename: string;
    pickuptime: string;
    devicetype: string;
    status: string | null;
    assignedvendor: string;
  }[];
  completedOrdersCount: number;
  availableOrdersCount: number;
  assignedOrdersCount: number;
}

const BasePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [invoices, setInvoices] = useState<InvoiceInterface>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [SelectedRow, SetSelectedRow] = useState<{
    lead: number;
    devicetype: deviceType;
  }>();
  console.log(invoices);
  useEffect(() => {
    setIsLoading(true),
      (async function () {
        const res = await fetch("/api/getallorders", {
          method: "GET",
        });
        if (!res.ok) {
          console.log("Error :", res);
        }
        const data = await res.json();
        setInvoices(data);
        console.log(data);
      })();
    setIsLoading(false);
  }, []);
  console.log(invoices);
  return (
    <div className=" w-full gap-4 space-y-6 px-8">
      {!invoices && <TableSkeleton />}
      {invoices && (
        <div className="w-full rounded-[12px]  bg-primaryBackground py-4">
          <PrimaryTable
            SetSelectedRow={SetSelectedRow}
            setIsOpen={setIsOpen}
            invoices={invoices.orders}
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
          <SecondaryTable leads={invoices.leads} />
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
