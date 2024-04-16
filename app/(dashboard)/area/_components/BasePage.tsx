"use client";
import React, { useEffect, useState } from "react";
import { FilterMenubar } from "./filterMenubar";
import { PrimaryTable } from "./PrimaryTable";
import { ProgressSection } from "./ProgressSection";
import { deviceType } from "@/interfaces";
import { SheetDemo } from "./sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { allDeviceType } from "@/interfaces/devicetype";
import { toast } from "@/components/ui/use-toast";
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
  const [isAreaUpdating, setIsAreaUpdating] = useState<boolean>(false);
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
  const [newpincode, setNewPincode] = useState<{
    pincode: string;
    city: string;
    state: string;
    devicetype: deviceType;
  }>();
  const updateNewPincode = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("api/addnewarea", {
      method: "POST",
      body: JSON.stringify({
        pincode: newpincode.pincode,
        city: newpincode.city,
        state: newpincode.state,
        devicetype: newpincode.devicetype,
      }),
    });
    const result = await response.json();
    if (response.ok) {
      setIsLoading(false);
      toast({
        title: result.message,
      });
    }
    // setInvoice(invoice);
  };
  useEffect(() => {
    setIsLoading(true);
    (async function () {
      const response = await fetch("/api/getAreaCovered");
      const invoice = await response.json();
      setInvoice(invoice);
      if (response.ok) {
        setIsLoading(false);
      }
    })();
  }, [isAreaUpdating]);
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
        <div className=" grid grid-cols-3 gap-4">
          <div className=" col-span-2 rounded-[12px]  bg-primaryBackground">
            <h4 className=" px-4 py-2 text-lg font-semibold tracking-wide">
              Serviceable Pincodes
            </h4>
            <PrimaryTable
              currentPage={1}
              totalPage={null}
              invoices={invoice}
              selectInvoice={selectInvoice}
              isLoading={isLoading}
              setSelectInvoice={setSelectInvoice}
              setIsOpen={setIsOpen}
              setCurrentPage={null}
            />
          </div>
          <div className=" w-full">
            <div className="mb-4 space-y-3 rounded-lg bg-primaryBackground">
              <h4 className=" px-4 py-2 text-lg font-semibold tracking-wide">
                Add Pincode{" "}
              </h4>
              <div className=" space-y-3 rounded-xl bg-tertiaryBackground p-6">
                <form onSubmit={updateNewPincode}>
                  <div className="space-y-3">
                    <Input
                      required
                      onChange={(e) => {
                        setNewPincode({
                          ...newpincode,
                          pincode: e.target.value,
                        });
                      }}
                      type="text"
                      className=" !disabled:bg-secondaryBackground border-b border-none !bg-hoverColor !text-black placeholder:!text-black "
                      placeholder="pincode"
                    />
                    <Input
                      required
                      onChange={(e) => {
                        setNewPincode({
                          ...newpincode,
                          city: e.target.value,
                        });
                      }}
                      type="text"
                      className=" !disabled:bg-secondaryBackground border-b border-none !bg-hoverColor !text-black placeholder:!text-black "
                      placeholder="city"
                    />
                    <Input
                      required
                      onChange={(e) => {
                        setNewPincode({
                          ...newpincode,
                          state: e.target.value,
                        });
                      }}
                      type="text"
                      className=" !disabled:bg-secondaryBackground border-b border-none !bg-hoverColor !text-black placeholder:!text-black "
                      placeholder="state"
                    />
                    <Select
                      defaultValue={newpincode?.devicetype}
                      onValueChange={(value: deviceType) => {
                        setNewPincode({
                          ...newpincode,
                          devicetype: value,
                        });
                      }}
                    >
                      <SelectTrigger
                        disabled={isApplied}
                        className="w-full gap-2 !bg-hoverColor text-black"
                      >
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>

                      <SelectContent className=" !bg-secondaryBackground">
                        {allDeviceType.map((item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      type="submit"
                      className=" !h-max rounded-none !bg-[#82C43C] px-8"
                    >
                      {isAreaUpdating ? "updating" : "update"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <ProgressSection cardsValues={{ areaCovered: 20, pincodes: 500 }} />
          </div>
        </div>
      </div>
      <SheetDemo
        invoice={selectInvoice}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsUpdated={setIsAreaUpdating}
      />
    </div>
  );
};

export default BasePage;
