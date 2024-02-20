"use client";
import React, { useEffect, useState } from "react";
import { PrimaryTable } from "@/components/Internals/PrimaryTable";
import { SheetDemo } from "@/components/Internals/SelectedInfo";
import SecondaryTable from "./SecondaryTable";
import { CardContainer } from "./CardContainer";

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
          lead={fetchFullBokkings({
            lead: SelectedRow.lead,
            devicetype: SelectedRow.devicetype,
          })}
          varient={"orders"}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
    );
};

export default BasePage;

const fetchFullBokkings = async ({
  lead,
  devicetype,
}: {
  lead: string;
  devicetype: string;
}) => {
  const res = await fetch(`/api/getFullBookings/${devicetype}`, {
    method: "POST",
    body: JSON.stringify({
      leadId: lead,
    }),
  });
  if (!res.ok) {
    console.log("Error :", res);
  }
  const data = await res.json();
  return data;
};
