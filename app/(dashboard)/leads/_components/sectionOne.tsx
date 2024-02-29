"use client";
import React, { useEffect, useState } from "react";
import { PrimaryTable } from "./PrimaryTable";
import { CardContainer } from "@/components/Internals/CardContainer";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";

export interface LeadInterface {
  success: boolean;
  leads: InvoiceInterface[];
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

  // console.log(invoices);
  useEffect(() => {
    (async function () {
      const res = await fetch("/api/getallleads", {
        method: "GET",
      });
      if (!res.ok) {
        console.log("Error :", res);
      }
      const data = await res.json();
      setInvoices(data);
      // console.log(data);
    })();
  }, []);

  return (
    <>
      <div className=" w-full gap-4 space-y-6 px-8">
        {!invoices && <TableSkeleton />}
        {invoices && (
          <div className="w-full rounded-[12px]  bg-primaryBackground py-4">
            <PrimaryTable invoices={invoices.leads} />
          </div>
        )}

        {invoices && (
          <CardContainer
            completed={invoices.completedOrdersCount}
            available={invoices.availableOrdersCount}
            assigned={invoices.assignedOrdersCount}
          />
        )}
      </div>
    </>
  );
};

export default SectionOne;
