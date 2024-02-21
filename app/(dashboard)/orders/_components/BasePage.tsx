"use client";
import React, { useEffect, useState } from "react";
import { PrimaryTable } from "@/components/Internals/PrimaryTable";
import SecondaryTable from "./SecondaryTable";
import { CardContainer } from "./CardContainer";
import { SheetDemo } from "./sheet";

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
  const [SelectedRow, SetSelectedRow] = useState<{
    lead: string;
    devicetype: string;
  }>({
    lead: "",
    devicetype: "",
  });
  console.log(invoices);
  useEffect(() => {
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
  }, []);

  if (invoices)
    return (
      <div className=" w-full gap-4 space-y-6 px-8">
        <div className="w-full rounded-[12px]  bg-primaryBackground py-4">
          <PrimaryTable
            SetSelectedRow={SetSelectedRow}
            setIsOpen={setIsOpen}
            invoices={invoices.orders}
          />
        </div>
        <CardContainer
          cardsValues={{
            completedOrdersCount: invoices.completedOrdersCount,
            assignedOrdersCount: invoices.assignedOrdersCount,
            availableOrdersCount: invoices.availableOrdersCount,
          }}
        />
        <div className="w-full rounded-[12px]  bg-primaryBackground py-4">
          <SecondaryTable leads={invoices.leads} />
        </div>

        <SheetDemo
          SelectedRow={SelectedRow}
          varient={"orders"}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
    );
};

export default BasePage;