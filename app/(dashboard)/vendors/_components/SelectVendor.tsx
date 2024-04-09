"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type vendorsDetails = {
  success: boolean;
  vendorsDetails: {
    id: string;
    name: string;
    creditpoints:number
  }[];
};

export function SelectVendor({
  setVendorId,
}: {
  setVendorId: Dispatch<SetStateAction<string>>;
}) {
  const [allvendors, setAllVenodrs] = useState<vendorsDetails>();
  useEffect(() => {
    setVendorId(undefined),
      (async function () {
        const res = await fetch("https://newapi.cashkar.in/getAllVendors", {
          method: "GET",
        });
        const data = await res.json();
        setAllVenodrs(data);
      })();
  }, []);

  return (
    <Select
      onValueChange={(value) => {
        setVendorId(value);
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a vendor" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {allvendors &&
            allvendors.vendorsDetails &&
            allvendors.vendorsDetails.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.name}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
