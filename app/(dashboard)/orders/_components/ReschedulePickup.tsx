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
import  {PickupNewDateTime}  from "./PickupNewDateTime";
type AssignData = {
  leadid: string;
  creditpoints: number;
};
export function ReschedulePickup({
data,
}: {
  data: AssignData;
}) {
  const [vendorId, setVendorId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleAssign = async (vendorId: string) => {
    console.log(vendorId);
    setIsLoading(true);
    const res = await fetch(`api/reschedulePickup`, {
      method: "POST",
      body: JSON.stringify({
        leadid: "LD1707722461",
        newPickupDate: "2024/02/15",
        newPickupTime: "05:00 PM - 08:00 PM",
        deviceType: "Console",
      }),
    });

    const result = await res.json();
    if (result.success) {
      setIsLoading(false);
      router.refresh();
    } else {
    }
    // location.reload()
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className=" !h-max rounded-none !bg-[#FF974A] px-8"
        >
          Reschedule
        </Button>
      </DialogTrigger>
      <DialogContent className="text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reschedule Pickup</DialogTitle>
        </DialogHeader>
        <div className="">
          <PickupNewDateTime />
        </div>
      </DialogContent>
    </Dialog>
  );
}
