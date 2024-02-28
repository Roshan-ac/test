"use client";
import React, { useEffect, useState } from "react";

import { CardContainer } from "./CardContainer";
import { SheetDemo } from "./sheet";
import { PrimaryTable } from "./PrimaryTable";

export type VendorsInterface = {
  id: string;
  firebaseid: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  gstin: string | null;
  creditsavailable: number;
  maxleads: number;
  inprogressleads: number;
  deviceassigned: string;
  applicationStatus: string;
  shopphoto: string;
  pancardimg: string | null;
  aadharcardimgfront: string | null;
  aadharcardimgback: string | null;
  selfphoto: string | null;
  vendortype: string;
  deviceToken: string;
};

const BasePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [invoices, setInvoices] = useState<VendorsInterface[]>();
  const [SelectedRow, SetSelectedRow] = useState<VendorsInterface>();
  
  console.log(invoices);
  useEffect(() => {
    (async function () {
      const res = await fetch("/api/getallvendors", {
        method: "GET",
      });
      if (!res.ok) {
        console.log("Error :", res);
      }
      const data = await res.json();
      setInvoices(data.vendorsDetails);
      console.log(data);
    })();
  }, []);
  console.log(invoices);
  return (
    <div className=" w-full gap-4 space-y-6 px-8">
      <div className="w-full rounded-[12px]  bg-primaryBackground py-4">
        {invoices && (
          <PrimaryTable
            SetSelectedRow={SetSelectedRow}
            setIsOpen={setIsOpen}
            invoices={invoices}
          />
        )}
      </div>
      {invoices && (
        <CardContainer
          cardsValues={{
            acceptedLeads: 29,
            pendingLeads: 95,
            rejectedLeads: 35,
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
