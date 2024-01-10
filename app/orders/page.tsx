"use client";

import { FilterMenubar } from "@/components/FilterMenubar";
import React, { useState } from "react";
import { PrimaryTable } from "./_components/PrimaryTable";
import { SheetDemo } from "./_components/SelectedInfo";
import { ScrollArea } from "@/components/ui/scroll-area";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-full w-full bg-black">
      <FilterMenubar />
      <div className="flex w-full gap-4 p-6">
        <div className="w-full  rounded-[12px] bg-primaryBackground py-4">
          <PrimaryTable setIsOpen={setIsOpen} />
        </div>
          <SheetDemo setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default page;
