"use client";
import React, { useEffect, useState } from "react";
import { FilterMenubar } from "./filterMenubar";
import { PrimaryTable } from "./PrimaryTable";
import { ProgressSection } from "./ProgressSection";
import { deviceType } from "@/interfaces";
import { SheetDemo } from "./sheet";
export interface InvoiceInterface {
  success: boolean;
  pagelimit: number;
  data: {
    pid: string;
    pvalue: string;
    city: string;
    state: string;
    devicetype: deviceType;
    status: string;
  }[];
  pincodes: number;
  areaCovered: number;
}
const BasePage = () => {
  const [isApplied, setIsApplied] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [invoice, setInvoice] = useState<InvoiceInterface>();
  const [selectInvoice, setSelectInvoice] = useState<{
    pid: string;
    pvalue: string;
    city: string;
    state: string;
    devicetype: deviceType;
    status: string;
  }>();
  const [filterQueries, setFilterQueries] = useState<{
    search: string;
    type: string;
    city: string;
    status: string;
    fromDate: string;
    toDate: string;
  }>({
    search: "",
    status: "",
    city: "",
    type: "",
    fromDate: undefined,
    toDate: undefined,
  });
  useEffect(() => {
    (async function () {
      const response = await fetch("/api/getAreaCovered");
      const invoice = await response.json();
      console.log(invoice);
      setInvoice(invoice);
    })();
  }, []);
  return (
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
            Serviceable Pincodes
          </h4>
          <PrimaryTable
            currentPage={1}
            totalPage={1}
            invoices={invoice}
            isLoading={isLoading}
            setSelectInvoice={setSelectInvoice}
            setIsOpen={setIsOpen}
            setCurrentPage={null}
          />
        </div>
        <div>
          <ProgressSection cardsValues={{ areaCovered: 20, pincodes: 500 }} />
        </div>
      </div>
      <SheetDemo
        invoice={selectInvoice}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsUpdated={setIsLoading}
      />
    </div>
  );
};

export default BasePage;
