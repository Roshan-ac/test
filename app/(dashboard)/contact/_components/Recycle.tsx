'use client'
import React, { useState } from "react";
import { PrimaryTable } from "./PrimaryTable";
import { RecycleFilterMenubar } from "./recycleFilterMenut";
import { MessageInterface } from "./BasePage";
import { SheetDemo } from "./sheet";

const Recycle = ({message}:{message:MessageInterface}) => {
    const [isApplied, setIsApplied] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [SelectedRow, SetSelectedRow] = useState<{
      id: number;
    }>();
    const [filterQueries, setFilterQueries] = useState<{
      search: string;
      city: string;
      status: string;
      fromDate: Date,
      toDate: Date,
    }>({
      search: "",
      status: "",
      city: "",
      fromDate: undefined,
      toDate: undefined,
    });
  return (
    <div className="px-4 border-t mx-2 rounded-2xl">
      <div>
        <RecycleFilterMenubar  filterQueries={filterQueries} isApplied isLoading  setFilterQueries={setFilterQueries} setIsApplied={setIsApplied}  />
      </div>
      <div className="w-full rounded-[12px]  bg-primaryBackground">
        <h4 className=" px-4 py-2 text-lg font-semibold tracking-wide">
          Contact Message
        </h4>
        <PrimaryTable
          SetSelectedRow={SetSelectedRow}
          currentPage={1}
          totalPage={1}
          invoices={message}
          isLoading
          setIsOpen={setIsOpen}
          setCurrentPage={null}
        />
      </div>

      {
        SelectedRow &&
      <SheetDemo SelectedRow={SelectedRow} isOpen={isOpen} setIsOpen={setIsOpen} setIsUpdated={null}  />
      }
    </div>
  );
};

export default Recycle;
