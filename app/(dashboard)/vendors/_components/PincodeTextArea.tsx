"use client";

import ChipListInput from "@/components/Internals/chipListInput";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PincodeInterface } from "@/interfaces/pincode";
import { useEffect, useState } from "react";


const PincodeTextArea = ({ vendorId }: { vendorId: string }) => {
  console.log(vendorId);
  const [pincodes, setPincodes] = useState<string[]>();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getvendorpincodes", {
        method: "POST",
        body: JSON.stringify({
          vendorId: vendorId,
        }),
      });

      if (!res.ok) {
        console.log("error");
      }

      const data = await res.json();
      console.log(data);
      setPincodes(data.data);
    }

    if (!pincodes) {
      fetchData();
    }
  }, [pincodes]);

  console.log(pincodes);
  return (
    <div className=" space-y-4">
      <div className="flex min-h-32 flex-col justify-center bg-tertiaryBackground p-4">
        <div className=" grid grid-cols-4 gap-2">
          {pincodes &&
            pincodes.map((item, index) => (
              <div className=" rounded-xl bg-primaryBackground p-1 text-center ">
                <span>{item}</span>
              </div>
            ))}
        </div>
      </div>
      <ChipListInput data={pincodes} key={""} />
      <Button className=" !h-max rounded-none !bg-[#82C43C] px-8">
        Update
      </Button>
    </div>
  );
};

export default PincodeTextArea;
