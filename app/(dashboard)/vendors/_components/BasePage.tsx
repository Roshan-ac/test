"use client";
import React, { useEffect, useState } from "react";

import { CardContainer } from "./CardContainer";
import { SheetDemo } from "./sheet";
import { PrimaryTable } from "./PrimaryTable";
import { TableSkeleton } from "@/components/Internals/tableSkeleton";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true),
      (async function () {
        const res = await fetch("/api/getallvendors", {
          method: "GET",
        });
        const data = await res.json();
        setInvoices(data.vendorsDetails);
        setIsLoading(false);
      })();
  }, []);

  return (
    <div className=" w-full space-y-2 py-4">
      <div className="space-y-6  px-8">
        <div className="w-full rounded-[12px]  bg-primaryBackground">
          <h4 className=" px-4 py-2 text-lg font-semibold tracking-wide">
            All Vendors
          </h4>
          <PrimaryTable
            selectedRow={SelectedRow}
            isLoading={isLoading}
            SetSelectedRow={SetSelectedRow}
            setIsOpen={setIsOpen}
            invoices={invoices}
          />
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
        <SheetDemo
          SelectedRow={SelectedRow}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
};

export default BasePage;
