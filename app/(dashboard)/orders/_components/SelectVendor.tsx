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
import { deviceType } from "@/interfaces";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type vendorsDetails = {
  success: boolean;
  data: {
    id: string;
    name: string;
    creditpoints: number;
  }[];
};

export function SelectVendor({
  setVendorId,
  devicetype,
  pincode,
}: {
  setVendorId: Dispatch<SetStateAction<string>>;
  devicetype: deviceType;
  pincode: number;
}) {
  const [allvendors, setAllVenodrs] = useState<vendorsDetails>();
  useEffect(() => {
    setVendorId(undefined),
      (async function () {
        const res = await fetch("/api/getAllVendorsByPincodeAndDevicetype/", {
          method: "POST",
          body: JSON.stringify({
            pincode: pincode,
            devicetype: devicetype,
          }),
        });
        const data = await res.json();
        console.log(data);
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
            allvendors.data &&
            allvendors.data.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.name}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
