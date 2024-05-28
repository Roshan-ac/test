import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormSchema, PickupNewDateTime } from "./PickupNewDateTime";
import { z } from "zod";
import { Dispatch, SetStateAction } from "react";
type AssignData = {
  leadid: string;
  creditpoints: number;
  deviceType: string;
};

export function ReschedulePickup({
  ReschedulePickupDateTime,
  disabled
}: {
  disabled:boolean;
  ReschedulePickupDateTime: (data: z.infer<typeof FormSchema>) => {};
}) {
 
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled} className=" !h-max rounded-none !bg-[#FF974A] px-8">
          Reschedule
        </Button>
      </DialogTrigger>
      <DialogContent className="text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reschedule Pickup</DialogTitle>
        </DialogHeader>
        <div className="">
          <PickupNewDateTime
            ReschedulePickupDateTime={ReschedulePickupDateTime}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
