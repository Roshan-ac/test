import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SelectVendor } from "./SelectVendor";
import { useRouter } from "next/navigation";
import { useState } from "react";

type AssignData = {
  leadid: number;
  creditpoints: number;
};

export function AssignDialog({
  isAssigned,
  data,
}: {
  isAssigned: boolean;
  data: AssignData;
}) {
  const [vendorId, setVendorId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleAssign = async (vendorId: string) => {
    console.log(vendorId);
    setIsLoading(true);
    const res = await fetch(`api/assignVendor`, {
      method: "POST",
      body: JSON.stringify({
        leadid: data.leadid,
        vendorid: vendorId,
        creditpoints: data.creditpoints,
      }),
    });

    const result = await res.json();
    if (result.success) {
      setIsLoading(false);
      router.refresh();
    } else {
      // location.reload()
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={isAssigned}
          className=" !h-max rounded-none !bg-[#82C43C] px-8"
        >
          Assign
        </Button>
      </DialogTrigger>
      <DialogContent className="text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Assign Vendor</DialogTitle>
        </DialogHeader>
        <div>
          <SelectVendor setVendorId={setVendorId} />
        </div>
        <DialogFooter>
          <Button
            disabled={vendorId == undefined}
            type="submit"
            onClick={() => handleAssign(vendorId)}
          >
            {isLoading ? "Assigning.." : "Assign Vendor"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
