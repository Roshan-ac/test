"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import EvaluationReport from "@/components/EvaluateReport/EvaluateReport";
import { deviceType } from "@/interfaces";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import SheetSkeleton from "@/components/sheetSkeleton";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { allDeviceType } from "@/interfaces/devicetype";

type messageType = {
  success: boolean;
  data: {
    id: string;
    date: string;
    category: string;
    fullname: string;
    email: string;
    phone: string;
    business: string;
    city: string;
    address: string;
    message: string;
  };
};

export function SheetDemo({
  isOpen,
  setIsOpen,
  setIsUpdated,
  SelectedRow,
}: {
  isOpen: boolean;
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  SelectedRow: {
    id: number;
  };
}) {
  const [progress, setProgress] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [fullMessage, setFullMessage] = useState<messageType>();
  const router = useRouter();

  useEffect(() => {
      (async function () {
        const response = await fetch("/api/getfullmessage/", {
          method: "POST",
          body: JSON.stringify({
            id: SelectedRow.id,
          }),
        });
        const invoice = await response.json();
        setFullMessage(invoice);
      })();
  }, [SelectedRow]);

  return (
    <Sheet open={isOpen}>
      <SheetContent
        className=" h-full rounded  !border-none  !bg-secondaryBackground sm:max-w-[80%]"
        setIsOpen={setIsOpen}
      >
        <ScrollArea className="!h-[100vh] pb-6">
          <div className=" space-y-2 bg-tertiaryBackground p-4">
            <h4 className="text-lg text-white">Your Remarks</h4>
            <div>
              <Textarea
                placeholder="Leave your remarks"
                className=" h-60  !bg-hoverColor placeholder:!text-black"
              />
            </div>
            <div className=" flex w-full justify-between py-2">
              <div className=" w-full flex items-start">
                <ul className=" space-y-2 text-secondaryText w-1/4">
                  <li>Full Name</li>
                  <li>Email</li>
                  <li>Phone Number</li>
                  {
                    fullMessage?.data.address && 
                    <li>Address</li>
                  }
                  {
                    fullMessage?.data.message &&
                    <li>Message</li>
                  }
                </ul>
                <ul className=" list-disc space-y-2 text-secondaryText w-max">
                  <li>{fullMessage?.data.fullname}</li>
                  {
                    fullMessage?.data.address &&
                  <li>{fullMessage?.data.address}</li>
                  }
                  <li>{fullMessage?.data.email}</li>
                  <li>{fullMessage?.data.phone}</li>
                  {
                    fullMessage?.data.message &&
                  <li>{fullMessage?.data.message}</li>
                  }
                </ul>
              </div>
              <div className=" flex w-1/3 flex-col items-end space-y-2">
                <Select
                // defaultValue={newpincode?.devicetype}
                // onValueChange={(value: deviceType) => {
                //   setNewPincode({
                //     ...newpincode,
                //     devicetype: value,
                //   });
                // }}
                >
                  <SelectTrigger className="w-full gap-2 !bg-hoverColor text-black">
                    <SelectValue placeholder="Disposition" />
                  </SelectTrigger>

                  <SelectContent className=" !bg-secondaryBackground">
                    {allDeviceType.map((item, index) => (
                      <SelectItem key={index} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  type="button"
                  className=" !h-max rounded-none !bg-[#e0c931] px-8"
                >
                  {isLoading ? "updating" : "update"}
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
