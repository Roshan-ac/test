"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { TabelPagination } from "@/components/Internals/TabelPagination";
import { AssignDialog } from "./AssignDialog";
import { useRouter } from "next/navigation";
import { ReschedulePickup } from "./ReschedulePickup";
import { FormSchema } from "./PickupNewDateTime";
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
import { useProgressContext } from "@/context/progressContext";
type OrderDetails = {
  success: boolean;
  myBookings: {
    id: number;
    timestamp: string;
    devicename: string;
    devicebrandname: string;
    deviceimg: string;
    devicetype: deviceType;
    deviceoriginalprice: number;
    devicegeneratedprice: number;
    devicefinalprice: string;
    deviceimei: string;
    ownername: string;
    owneraddress: string;
    city: string;
    ownerphoneno: string;
    owneremail: string;
    pincode: number;
    paymentmode: string;
    ordertype: string;
    assignedvendor: string;
    status: string;
    customersignature: string;
    creditpoints: number;
    pickupdate: string;
    pickuptime: string;
    upino: string;
    bankacno: string;
    bankbeneficiaryname: string;
    bankifsccode: string;
    bankname: string;
    token: string;
    failedcustomerexpectedamt: string;
    failedfinalofferedamt: string;
    cashboy: string;
    isCompleted: number;
    isCallRequested: null;
    desposition: string;
    createdBy: string;
    physicalcondition: string[];
    accessoriesunavailable: string[];
    screencondition: string;
    devicestorage: string;
    deviceram: string;
    size: string;
    warrantystatus: string;
    bodycondition: string;
    deviceclassid: number;
  };
};

type LogDetails = {
  success: boolean;
  data: {
    id: number;
    date: string;
    time: string;
    description: string;
  }[];
};

export function SheetDemo({
  isOpen,
  setIsOpen,
  setIsUpdated,
  isUpdated,
  SelectedRow,
}: {
  isOpen: boolean;
  isUpdated: boolean;
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  varient: "leads" | "orders" | "failed" | "vendors";
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  SelectedRow: {
    lead: number;
    devicetype: deviceType;
  };
}) {
  const [progress, setProgress] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState<OrderDetails>();
  const [LogDetails, setLogDetails] = useState<LogDetails>();
  const { showProgress } = useProgressContext();
  
  const FailedLead = async () => {
    const res = await fetch(`/api/failedLead`, {
      method: "POST",
      body: JSON.stringify({
        vendorid: orderDetails.myBookings.assignedvendor ?? "",
        creditpoints: orderDetails.myBookings.creditpoints,
        label: "deduct",
        description: `Refund for ${orderDetails.myBookings.devicename}`,
        leadid: SelectedRow.lead,
        statustype: "Cn",
        statuscode: "Cancelled by Cashkr",
      }),
    });
    const data = await res.json();
    if (data.success) {
      showProgress();
      toast({
        title: "Success",
        description: (
          <p className=" text-green-500">Lead status successfully changed</p>
        ),
      });
      setIsUpdated(true);
    } else {
      toast({
        title: "Sorry!",
        description: (
          <p className=" text-green-500">Unable to update lead status.</p>
        ),
      });
    }
  };

  async function ReschedulePickupDateTime(data: z.infer<typeof FormSchema>) {
    const res = await fetch(`api/reschedulePickup`, {
      method: "POST",
      body: JSON.stringify({
        leadid: SelectedRow.lead,
        newPickupDate: data.newpickupdate.toLocaleDateString("en-GB"),
        newPickupTime: data.newpickuptime,
        deviceType: SelectedRow.devicetype,
      }),
    });
    const result = await res.json();
    if (result.success) {
      showProgress();
      toast({
        title: "Success",
        description: (
          <p className=" text-green-500">
            Pickup Date and Time succesfully updated
          </p>
        ),
      });
      setIsUpdated(true);
    } else {
      toast({
        title: "Unable to Update",
        description: (
          <p className=" text-[#dd9999]">
            We are unable to update pickup time and date at the moment.
          </p>
        ),
      });
    }
  }

  const handleAssign = async (vendorId: string) => {
    const res = await fetch(`api/assignVendor`, {
      method: "POST",
      body: JSON.stringify({
        vendorid: vendorId,
        creditpoints: orderDetails.myBookings.creditpoints,
        leadid: orderDetails.myBookings.id,
      }),
    });

    const result = await res.json();
    if (result.success) {
      showProgress();
      toast({
        title: "Success",
        description: (
          <p className=" text-green-500">{result.message}</p>
        ),
      });
      setIsUpdated((prev) => !prev);
    } else {
      toast({
        title: "Unable to Assign",
        description: (
          <p className=" text-[#dd9999]">{result.message}</p>
        ),
      });
    }
  };

  useEffect(() => {
    setOrderDetails(null);
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
      const orderDetails1 = await res.json();
      setOrderDetails(orderDetails1);
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
  }, [SelectedRow, isUpdated]);

  return (
    <Sheet open={isOpen}>
      <Progress
        hidden={!isLoading}
        value={progress}
        className=" absolute  -top-6 right-0 z-[80] h-[2px]"
      />
      <SheetContent
        className=" h-full rounded  !border-none  !bg-secondaryBackground sm:max-w-[80%]"
        setIsOpen={setIsOpen}
      >
        <ScrollArea className="!h-[100vh] pb-6">
          {orderDetails && orderDetails.myBookings ? (
            <div className=" my-4 space-y-4">
              <div className="flex h-full w-full gap-2 p-1">
                <div className="relative h-max w-[55%] bg-tertiaryBackground px-4 pt-8 text-hoverColor">
                  <Badge className=" absolute -top-[10px] left-6 z-10 w-max rounded-none !bg-purple-500 px-6 py-1 !text-white">
                    {orderDetails.myBookings.devicetype}
                  </Badge>
                  <div>
                    <h1>
                      {orderDetails.myBookings.devicename}

                      {orderDetails.myBookings.deviceram !== "null" && (
                        <span>
                          {" "}
                          {orderDetails.myBookings.deviceram} GB{" "}
                          {orderDetails.myBookings.devicestorage && "/"}{" "}
                        </span>
                      )}
                      {orderDetails.myBookings.size && (
                        <span>{orderDetails.myBookings.size}</span>
                      )}
                      {orderDetails.myBookings.devicestorage && (
                        <span>
                          {" "}
                          {`${orderDetails.myBookings.devicestorage} GB`}{" "}
                        </span>
                      )}
                    </h1>
                  </div>
                  <div className="my-6 flex flex-col space-y-6">
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Token :</span>
                      <span className="inline-block w-full">
                        {orderDetails?.myBookings.token}
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Pickup :</span>
                      <span className="inline-block w-full">
                        {orderDetails.myBookings.pickupdate}{" "}
                        {orderDetails.myBookings.pickuptime}
                      </span>
                    </Label>

                    <Label
                      htmlFor="vendor"
                      className={`flex w-full space-x-4  `}
                    >
                      <span className="inline-block w-[40%]">Vendor :</span>
                      <span className="inline-block w-full">
                        {orderDetails.myBookings.assignedvendor ??
                          "No vendor assigned !"}
                      </span>
                    </Label>

                    {SelectedRow.lead && (
                      <EvaluationReport
                        formData={orderDetails.myBookings}
                        devicetype={SelectedRow.devicetype}
                      />
                    )}
                  </div>

                  <div className="flex w-full items-center space-x-4 py-8">
                    <div>
                      <AssignDialog
                        devicetype={orderDetails.myBookings.devicetype}
                        pincode={orderDetails.myBookings.pincode}
                        handleAssign={handleAssign}
                      />
                    </div>
                    <div>
                      <ReschedulePickup
                        ReschedulePickupDateTime={ReschedulePickupDateTime}
                      />
                    </div>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          disabled={orderDetails.myBookings.status !== null}
                          className=" !h-max rounded-none !bg-[#cd6235] px-8 !text-white"
                        >
                          Fail Lead
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-white">
                            Think twice before your action.
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                           This will permanently lock your lead and cannot be undo.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="text-white">
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => {
                              FailedLead();
                            }}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
                <div className="h-full w-[45%] space-y-4 p-2">
                  <div className="h-max w-full bg-tertiaryBackground px-6 py-4">
                    <div className="my-4 flex flex-col space-y-6 text-hoverColor">
                      {orderDetails.myBookings.deviceoriginalprice && (
                        <Label
                          htmlFor="QuotedPrice"
                          className=" flex w-full space-x-4  "
                        >
                          <span className="inline-block w-[80%]">
                            Quoted Price :
                          </span>
                          <span className="inline-block w-full">
                            {orderDetails.myBookings.deviceoriginalprice}
                          </span>
                        </Label>
                      )}
                      {orderDetails.myBookings.devicegeneratedprice && (
                        <Label
                          htmlFor="terms"
                          className=" flex w-full space-x-4  "
                        >
                          <span className="inline-block w-[80%]">
                            Requote Price :
                          </span>
                          <span className="inline-block w-full">
                            {orderDetails.myBookings.devicegeneratedprice}
                          </span>
                        </Label>
                      )}
                      {orderDetails.myBookings.devicefinalprice && (
                        <Label
                          htmlFor="terms"
                          className=" flex w-full space-x-4  "
                        >
                          <span className="inline-block w-[80%]">
                            Final Price :
                          </span>
                          <span className="inline-block w-full">
                            {orderDetails.myBookings.devicefinalprice}
                          </span>
                        </Label>
                      )}
                    </div>
                  </div>
                  <div className="h-full overflow-x-hidden overflow-y-scroll break-words bg-tertiaryBackground py-4 pl-4 pr-3">
                    <div className="mt-4 flex flex-col space-y-6 text-hoverColor">
                      <Label
                        htmlFor="terms"
                        className=" grid w-full grid-cols-3 items-center"
                      >
                        <p className="inline-block min-w-max"> Name :</p>
                        <p className=" col-span-2  w-full  whitespace-pre-wrap text-left leading-6">
                          {orderDetails.myBookings.ownername}
                        </p>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" grid w-full grid-cols-3 items-center"
                      >
                        <p className="inline-block min-w-max"> Email :</p>
                        <p className=" col-span-2  w-full  whitespace-pre-wrap text-left leading-6">
                          {orderDetails.myBookings.owneremail}
                        </p>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" grid w-full grid-cols-3 items-center"
                      >
                        <p className="inline-block min-w-max"> Phone :</p>
                        <p className=" col-span-2  w-full  whitespace-pre-wrap text-left leading-6">
                          {orderDetails.myBookings.ownerphoneno}
                        </p>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" grid w-full grid-cols-3 items-center"
                      >
                        <p className="inline-block min-w-max">Main Address :</p>
                        <p className=" col-span-2  w-full  whitespace-pre-wrap text-left leading-6">
                          {orderDetails.myBookings.owneraddress}
                        </p>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" grid w-full grid-cols-3 items-center"
                      >
                        <p className="inline-block min-w-max"> Pincode :</p>
                        <p className=" col-span-2  w-full  whitespace-pre-wrap text-left leading-6">
                          {orderDetails.myBookings.pincode}
                        </p>
                      </Label>
                      {orderDetails.myBookings.city && (
                        <Label
                          htmlFor="terms"
                          className=" grid w-full grid-cols-3 items-center"
                        >
                          <p className="inline-block min-w-max"> City :</p>
                          <p className=" col-span-2  w-full  whitespace-pre-wrap text-left leading-6">
                            {orderDetails.myBookings.city}
                          </p>
                        </Label>
                      )}
                      <Label
                        htmlFor="terms"
                        className=" grid w-full grid-cols-3 items-center"
                      >
                        <p className="inline-block min-w-max"> Payment :</p>
                        <p className=" col-span-2  w-full  whitespace-pre-wrap text-left leading-6">
                          {orderDetails.myBookings.paymentmode}
                        </p>
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-max w-full bg-tertiaryBackground pb-4">
                <div className="p-6 text-hoverColor">
                  <div>
                    <h1>Leads Logs :</h1>
                  </div>
                  <div className="my-6 flex flex-col space-y-6">
                    {LogDetails && LogDetails.data && (
                      <>
                        {LogDetails.data.map((item) => (
                          <Label
                            key={item.id}
                            htmlFor="terms"
                            className=" grid w-full grid-cols-5 items-center"
                          >
                            <p className="inline-block min-w-max">
                              {" "}
                              {item.time} {item.date} :
                            </p>
                            <p className=" col-span-4  w-full  whitespace-pre-wrap text-left leading-6">
                              {item.description}
                            </p>
                          </Label>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  {/* <TabelPagination /> */}
                </div>
              </div>
            </div>
          ) : (
            <SheetSkeleton />
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
