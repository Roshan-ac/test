"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TabelPagination } from "@/components/Internals/TabelPagination";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Progress } from "@/ui/progress";
import LeadLogs from "./LeadLogs";
import EvaluationReport from "@/components/EvaluateReport/EvaluateReport";
import { LeadActions } from "@/app/(dashboard)/leads/_components/LeadActions";

export function SheetDemo({
  isOpen,
  varient,
  setIsOpen,
  lead,
}: {
  isOpen: boolean;
  varient: "lead" | "orders" | "failed" | "vendors";
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  lead: any;
}) {
  const [progress, setProgress] = useState(13);
  const [isLoading, setIsLoading] = useState(false);

  const ShowProgress = () => {
    setIsLoading(true);
    setProgress(20);
    setTimeout(() => setProgress(66), 500);
    setTimeout(() => setProgress(78), 500);
    setTimeout(() => setProgress(100), 500);
    setTimeout(() => setIsLoading(false), 1000);
  };
  return (
    <Sheet open={isOpen}>
      <Progress
        hidden={!isLoading}
        value={progress}
        className=" fixed  right-0 top-0 z-[80] h-[2px]"
      />
      <SheetContent
        className=" h-full rounded  !border-none  !bg-secondaryBackground sm:max-w-[80%]"
        setIsOpen={setIsOpen}
      >
        <ScrollArea className="!h-[100vh] pb-6">
          <div className=" my-4 space-y-4">
            <div className="flex h-full w-full gap-4">
              <div className="relative h-max w-[55%] bg-tertiaryBackground p-4 pt-8 text-hoverColor">
                <Badge className=" absolute -top-[10px] left-6 z-10 w-max rounded-none !bg-purple-500 px-6 py-1 !text-white">
                  Phone
                </Badge>
                <div>
                  <h1 className="text-center">{lead?.devicename}</h1>
                </div>
                <div className="my-6 flex flex-col space-y-6">
                  <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                    <span className="inline-block w-[40%]">Order ID :</span>
                    <span className="inline-block w-full">{lead?.id}</span>
                  </Label>
                  <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                    <span className="inline-block w-[40%]">Pickup :</span>
                    <span className="inline-block w-full">
                      {lead?.pickupdate}
                    </span>
                  </Label>

                  {/* From Here */}

                  {lead && (
                    <EvaluationReport
                      formData={lead}
                      devicetype={lead.devicetype}
                    />
                  )}

                  <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                    <span className="inline-block w-[40%]">Vendor :</span>
                    <span className="inline-block w-full">
                      {lead?.assignedvendor}
                    </span>
                  </Label>
                </div>

                <div>
                  {
                    lead &&
                  <LeadActions lead={lead} />
                  }
                </div>

                <div className="flex justify-center">
                  <TabelPagination />
                </div>
              </div>
              <ExtraInfo lead={lead} />
            </div>

            <LeadLogs />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

const ExtraInfo = (lead: any) => {
  return (
    <div className="h-max w-[45%] space-y-4">
      <div className="h-max w-full bg-tertiaryBackground px-6 py-4">
        <div className="my-4 flex flex-col space-y-6 text-hoverColor">
          <Label htmlFor="terms" className="flex w-full space-x-4  ">
            <span className="inline-block w-[80%]">Quoted Price :</span>
            <span className="inline-block w-full">
              {lead.deviceoriginalprice}
            </span>
          </Label>

          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[80%]">Requote Price :</span>
            <span className="inline-block w-full">
              {lead.devicegeneratedprice}/
            </span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[80%]">Final Price :</span>
            <span className="inline-block w-full">
              {lead.devicefinalprice}/
            </span>
          </Label>
        </div>
      </div>
      <div className="h-max w-full overflow-y-auto bg-tertiaryBackground  px-6 py-4">
        <div className="mt-4 flex flex-col space-y-6 text-hoverColor">
          <Label htmlFor="terms" className="flex w-full space-x-4  ">
            <span className="inline-block w-[60%]">Name :</span>
            <span className="inline-block w-full">{lead.ownername}</span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[60%]">Email :</span>
            <span className="inline-block w-full">{lead.owneremail}</span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[60%]">Phone :</span>
            <span className="inline-block w-full">{lead.owneraddress}</span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[60%]">Alternate :</span>
            <span className="inline-block w-full">919767774963</span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[60%]">Address Type :</span>
            <span className="inline-block w-full">Home</span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[60%]">Main Address :</span>
            <span className="inline-block w-full leading-6">
              {lead.owneraddress}
            </span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[60%]">Pincode :</span>
            <span className="inline-block w-full">{lead.pincode}</span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[60%]">City :</span>
            <span className="inline-block w-full">{lead.city}</span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[60%]">Payment :</span>
            <span className="inline-block w-full">{lead.paymentmode}</span>
          </Label>
        </div>
      </div>
    </div>
  );
};
