"use client";
import React, { useEffect, useState } from "react";
import { PrimaryTable } from "@/components/Internals/PrimaryTable";
import { SheetDemo } from "@/components/Internals//SelectedInfo";

export interface InvoiceInterface {
  id: string;
  timestamp: string;
  devicename: string;
  city: string | null;
  devicetype: string;
  status:
    | "Generated"
    | "Cancelled"
    | "Failed"
    | "Out For Pickup"
    | "Assigned"
    | "Completed"
    | null;
}

const SectionOne = ({
  varient,
}: {
  varient: "lead" | "orders" | "failed" | "vendors";
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [invoices, setInvoices] = useState<InvoiceInterface[]>();

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
      setInvoices(data.orders);
      console.log(data);
    })();
  }, []);

  if (invoices)
    return (
      <div className="flex w-full gap-4 px-8">
        <div className="w-full rounded-[12px]  bg-primaryBackground py-4">
          {/* <PrimaryTable setIsOpen={setIsOpen} invoices={invoices} /> */}
        </div>
        {/* <SheetDemo varient={varient} setIsOpen={setIsOpen} isOpen={isOpen} /> */}
      </div>
    );
};

export default SectionOne;
