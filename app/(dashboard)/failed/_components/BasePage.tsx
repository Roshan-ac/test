"use client";
import React, { useEffect, useState } from "react";

import SecondaryTable from "./SecondaryTable";
import { CardContainer } from "./CardContainer";
import { SheetDemo } from "./sheet";
import { deviceType } from "@/interfaces";
import { PrimaryTable } from "./PrimaryTable";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";

export interface InvoiceInterface {
  success: boolean;
  leads: {
    id: string;
    pickupdate: string;
    devicename: string;
    pickuptime: string;
    devicetype: string;
    status: string;
    city: string;
    assignedvendor: string;
  }[];
  rejectedLeads: number;
  acceptedLeads: number;
  pendingLeads: number;
}

const BasePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [invoices, setInvoices] = useState<InvoiceInterface>();
  const [SelectedRow, SetSelectedRow] = useState<{
    lead: number;
    devicetype: deviceType;
  }>();
  console.log(invoices);
  useEffect(() => {
    (async function () {
      const res = await fetch("/api/getAllFailedLeads", {
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
  console.log(invoices);
  return (
    <div className=" w-full gap-4 space-y-6 px-8">
      {!invoices && <TableSkeleton />}
      {invoices && (
        <div className="w-full rounded-[12px]  bg-primaryBackground py-4">
          <PrimaryTable
            SetSelectedRow={SetSelectedRow}
            setIsOpen={setIsOpen}
            invoices={invoices.leads}
          />
        </div>
      )}
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
  );
};

export default BasePage;
