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
import { deviceType } from "@/interfaces";
import SheetSkeleton from "@/components/sheetSkeleton";
import { Date } from "./PrimaryTable";
import { useProgressContext } from "@/context/progressContext";

export function SheetDemo({
  isOpen,
  SelectedRow,
  setIsOpen,
}: {
  isOpen: boolean;
  SelectedRow: {
    lead: string;
    devicetype: deviceType;
  };
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [logsUpdate, setLogsUpdate] = useState(false);
  const [LogDetails, setLogDetails] = useState();
  const [leadDetails, setLeadDetails] = useState<any>();
  const { showProgress } = useProgressContext();
  useEffect(() => {
    setIsLoading(true),
      (async function () {
        const res = await fetch(
          `/api/getFullBookings/${SelectedRow.devicetype}`,
          {
            method: "POST",
            body: JSON.stringify({
              leadId: SelectedRow.lead,
            }),
          },
        );

        const data = await res.json();
        setLeadDetails(data.myBookings);
      })();
  }, [SelectedRow, showProgress]);
  useEffect(() => {
    (async function () {
      const res2 = await fetch(`/api/getLeadLogs`, {
        method: "POST",
        body: JSON.stringify({
          leadId: SelectedRow.lead,
        }),
      });
      const LeadLogs = await res2.json();
      setLogDetails(LeadLogs);
      setIsLoading(false);
    })();
  }, [showProgress]);
  console.log(leadDetails);

  return (
    <Sheet open={isOpen}>
      <SheetContent
        className=" h-full rounded  !border-none  !bg-secondaryBackground sm:max-w-[80%]"
        setIsOpen={setIsOpen}
      >
        <ScrollArea className="!h-[100vh] pb-6">
          {leadDetails ? (
            <div className=" my-4 space-y-4">
              <div className="flex h-full w-full gap-4">
                <div className="relative h-max w-[55%] bg-tertiaryBackground p-4 pt-8 text-hoverColor">
                  <Badge className=" absolute -top-[10px] left-6 z-10 w-max rounded-none !bg-purple-500 px-6 py-1 !text-white">
                    {SelectedRow.devicetype}
                  </Badge>
                  <div>
                    <h1>
                      {leadDetails.devicename}

                      {leadDetails.deviceram !== "null" && (
                        <>
                          <span>
                            {" "}
                            {leadDetails.deviceram &&
                              leadDetails.deviceram + " GB"}
                            {leadDetails.devicestorage && " /"}{" "}
                          </span>
                          <span>
                            {" "}
                            {leadDetails.ram && leadDetails.ram + " GB"}
                            {leadDetails.storage && " /"}{" "}
                          </span>
                        </>
                      )}
                      {leadDetails.size && <span>{leadDetails.size}</span>}
                      {leadDetails.devicestorage && (
                        <span> {`${leadDetails.devicestorage} GB`} </span>
                      )}
                      {leadDetails.storage && (
                        <span> {`${leadDetails.storage} GB`} </span>
                      )}
                    </h1>
                  </div>
                  <div className="my-6 flex flex-col space-y-6">
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Token :</span>
                      <span className="inline-block w-full">
                        {leadDetails.token}
                      </span>
                    </Label>
                    {leadDetails?.timestamp && (
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[40%]">Date :</span>
                        <span className="inline-block w-full">
                          <Date dateString={leadDetails?.timestamp} />
                        </span>
                      </Label>
                    )}

                    {/* From Here */}

                    {leadDetails && (
                      <EvaluationReport
                        formData={leadDetails}
                        devicetype={SelectedRow.devicetype}
                      />
                    )}

                    <Label
                      htmlFor="vendor"
                      className={`flex w-full space-x-4  `}
                    >
                      <span className="inline-block w-[40%]">Vendor :</span>
                      <span className="inline-block w-full">
                        {leadDetails.assignedvendor ?? "No vendor assigned !"}
                      </span>
                    </Label>
                  </div>

                  <div>
                    {leadDetails && (
                      <LeadActions
                        setLogsUpdate={setLogsUpdate}
                        lead={leadDetails}
                      />
                    )}
                  </div>
                </div>
                <ExtraInfo lead={leadDetails} />
              </div>

              <LeadLogs LogDetails={LogDetails} />
            </div>
          ) : (
            <SheetSkeleton />
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

const ExtraInfo = ({ lead }: any) => {
  return (
    <div className="h-max w-[45%] space-y-4">
      <div className="h-max w-full bg-tertiaryBackground px-6 py-4">
        <div className="my-4 flex flex-col space-y-6 text-hoverColor">
          <Label htmlFor="terms" className="flex w-full space-x-4  ">
            <span className="inline-block w-[80%]">Quoted Price :</span>
            <span className="inline-block w-full">
              {lead.deviceoriginalprice} -/
            </span>
          </Label>

          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[80%]">Requote Price :</span>
            <span className="inline-block w-full">
              {lead.devicegeneratedprice} -/
            </span>
          </Label>
          {lead.devicefinalprice && (
            <Label htmlFor="terms" className=" flex w-full space-x-4  ">
              <span className="inline-block w-[80%]">Final Price :</span>
              <span className="inline-block w-full">
                {lead.devicefinalprice} -/
              </span>
            </Label>
          )}
        </div>
      </div>
      <div className="h-max w-full overflow-y-auto bg-tertiaryBackground  px-6 py-4">
        <div className="mt-4 flex flex-col space-y-6 text-hoverColor">
          {lead.ownername && (
            <Label htmlFor="terms" className="flex w-full space-x-4  ">
              <span className="inline-block w-[60%]">Name :</span>
              <span className="inline-block w-full">{lead.ownername}</span>
            </Label>
          )}
          {lead.owneremail && (
            <Label htmlFor="terms" className=" flex w-full space-x-4  ">
              <span className="inline-block w-[60%]">Email :</span>
              <span className="inline-block w-full">{lead.owneremail}</span>
            </Label>
          )}
          {lead.ownerphoneno && (
            <Label htmlFor="terms" className=" flex w-full space-x-4  ">
              <span className="inline-block w-[60%]">Phone :</span>
              <span className="inline-block w-full">{lead.ownerphoneno}</span>
            </Label>
          )}
          {lead.ordertype && (
            <Label htmlFor="terms" className=" flex w-full space-x-4  ">
              <span className="inline-block w-[60%]">ordertype :</span>
              <span className="inline-block w-full">{lead.ordertype}</span>
            </Label>
          )}
          {/* {
            lead.
          } */}

          {lead.owneraddress && (
            <Label htmlFor="terms" className=" flex w-full space-x-4  ">
              <span className="inline-block w-[60%]">Main Address :</span>
              <span className="inline-block w-full leading-6">
                {lead.owneraddress}
              </span>
            </Label>
          )}
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[60%]">Pincode :</span>
            <span className="inline-block w-full">{lead.pincode}</span>
          </Label>
          {lead.city && (
            <Label htmlFor="terms" className=" flex w-full space-x-4  ">
              <span className="inline-block w-[60%]">City :</span>
              <span className="inline-block w-full">{lead.city}</span>
            </Label>
          )}
          {lead.paymentmode && (
            <Label htmlFor="terms" className=" flex w-full space-x-4  ">
              <span className="inline-block w-[60%]">Payment :</span>
              <span className="inline-block w-full">{lead.paymentmode}</span>
            </Label>
          )}
        </div>
      </div>
    </div>
  );
};
