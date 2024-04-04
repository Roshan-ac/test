"use client";

import ChipListInput from "@/components/Internals/chipListInput";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { PincodeInterface } from "@/interfaces/pincode";
import { useEffect, useState } from "react";

const PincodeTextArea = ({ vendorId }: { vendorId: string }) => {
  console.log(vendorId);
  const [pincodes, setPincodes] = useState<string[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(1);
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
      setPincodes(data.data);
    }

    if (!pincodes) {
      fetchData();
    }
  }, [pincodes,isLoading]);

  console.log(pincodes);
  return (
    <div className=" space-y-4">
      <Progress
        hidden={!isLoading}
        value={progress}
        className=" absolute  top-0 right-0 z-[90] h-[2px]"
      />
      <div className="flex min-h-32 flex-col justify-center bg-tertiaryBackground p-4">
        <div className=" grid grid-cols-4 gap-2">
          {pincodes &&
            pincodes.map((item, index) => (
              <div
                key={index}
                className=" rounded-xl bg-primaryBackground p-1 text-center "
              >
                <span>{item}</span>
              </div>
            ))}
            {
              !pincodes && (
                <p className=" w-max">No Pincodes available</p>
              )
            }
        </div>
      </div>
      <ChipListInput
        setIsLoading={setIsLoading}
        setProgress={setProgress}
        vendorId={vendorId}
        data={pincodes}
        key={""}
      />
    </div>
  );
};

export default PincodeTextArea;
