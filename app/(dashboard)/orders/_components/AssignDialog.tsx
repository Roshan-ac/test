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
import { deviceType } from "@/interfaces";

type AssignData = {
  leadid: number;
  creditpoints: number;
};

export function AssignDialog({
  handleAssign,
  devicetype,
  pincode
}: {
  handleAssign: (vendorId: string) => {};
  devicetype:deviceType;
  pincode:number;
}) {
  const [vendorId, setVendorId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" !h-max rounded-none !bg-[#82C43C] px-8">
          Assign
        </Button>
      </DialogTrigger>
      <DialogContent className="text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Assign Vendor</DialogTitle>
        </DialogHeader>
        <div>
          <SelectVendor devicetype={devicetype} pincode={pincode} setVendorId={setVendorId} />
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
