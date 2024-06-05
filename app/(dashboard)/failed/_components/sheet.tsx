"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
// import { TabelPagination } from "@/components/Internals/TabelPagination";
import { AssignDialog } from "./AssignDialog";
import { useRouter } from "next/navigation";
import { ReschedulePickup } from "./ReschedulePickup";
import { FormSchema } from "./PickupNewDateTime";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import EvaluationReport from "@/components/EvaluateReport/EvaluateReport";
import { deviceType } from "@/interfaces";
import { FailedImageGallery } from "@/components/Internals/FailedImageCarousel";
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
import { ProgressWrapper, useProgressContext } from "@/context/progressContext";
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
export type ResponseImageType = {
  success: true;
  imgdevicefront: string;
  imgdeviceback: string;
  imgdeviceside1: string;
  imgdeviceside2: string;
  imgdeviceside3: string;
  imgdeviceside4: string;
};

export function SheetDemo({
  isOpen,
  setIsOpen,
  SelectedRow,
}: {
  isOpen: boolean;
  varient: "leads" | "orders" | "failed" | "vendors";
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  SelectedRow: {
    lead: string;
    devicetype: deviceType;
  };
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState<OrderDetails>();
  const [LogDetails, setLogDetails] = useState<LogDetails>();
  const router = useRouter();
  const { showProgress } = useProgressContext();
  const [images, setImages] = useState<ResponseImageType>();
  useEffect(() => {
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
  }, [SelectedRow]);
 
  useEffect(() => {
    (async function () {
      const res = await fetch("/api/getDeviceConditionImage", {
        method: "POST",
        body: JSON.stringify({ leadid: SelectedRow.lead }),
        cache: "no-cache",
      });

      const data = await res.json();
      setImages(data);
    })();
  }, [SelectedRow.lead]);
 
  const UpdateFailedCounts = async ({ accepted, rejected, pending }) => {
    const res = await fetch("api/updateFailedCounts", {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({
        accepted: accepted,
        rejected: rejected,
        pending: pending,
      }),
    });
  };
  const ChangeToBe = async ({ actiontype }) => {
    const Newstatus = `FC-${orderDetails.myBookings.status.split("-")[1]}`;
    console.log(Newstatus);
    const res = await fetch("/api/changetobe", {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({
        leadid: SelectedRow.lead,
        vendorid: orderDetails.myBookings.assignedvendor,
        status: Newstatus,
        creditpoints: orderDetails.myBookings.creditpoints,
        actiontype: actiontype,
      }),
    });
    const result = await res.json();
    if (result.success) {
      showProgress();
      toast({
        title: "Success",
        description: <p className=" text-green-500">{result.message}</p>,
      });
    }
  };

  return (
    <>
      {isOpen && (
        <div className=" fixed bottom-0 right-0 z-50 flex h-screen w-full justify-end">
          <div
            onClick={() => setIsOpen(false)}
            className="w-[30%] bg-black bg-opacity-60"
          ></div>
          <div className=" h-full w-[70%] rounded  !border-none !bg-secondaryBackground p-4">
            <ScrollArea className="!h-[100vh] pb-6">
              {orderDetails && orderDetails.myBookings ? (
                <div className=" my-4 space-y-4">
                  <div className="flex h-full w-full gap-4">
                    <div className="relative h-max w-[55%] bg-tertiaryBackground p-4 pt-8 text-hoverColor">
                      <Badge className=" absolute -top-[10px] left-6 z-10 w-max rounded-none !bg-purple-500 px-6 py-1 !text-white">
                        {orderDetails.myBookings.devicetype}
                      </Badge>
                      <div>
                        <h1>{orderDetails.myBookings.devicename}</h1>
                      </div>
                      <div className="my-6 flex flex-col space-y-6">
                        <Label
                          htmlFor="terms"
                          className=" flex w-full space-x-4  "
                        >
                          <span className="inline-block w-[40%]">Token :</span>
                          <span className="inline-block w-full">
                            {orderDetails?.myBookings.token}
                          </span>
                        </Label>
                        <Label
                          htmlFor="terms"
                          className=" flex w-full space-x-4  "
                        >
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
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button className=" !h-max rounded-none !bg-[#cd6235] px-8 !text-white">
                              Accept Fail
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-white">
                                Think twice before your actions
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action may permanently failed your lead.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="text-white">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => {
                                  UpdateFailedCounts({
                                    accepted: 1,
                                    rejected: 0,
                                    pending: 0,
                                  });
                                  ChangeToBe({ actiontype: "accept" });
                                }}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button className=" !h-max rounded-none !bg-[#27b544a5] px-8 !text-white">
                              Reverse Lead
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-white">
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Want to reverse your lead.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="text-white">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => {
                                  UpdateFailedCounts({
                                    accepted: 0,
                                    rejected: 1,
                                    pending: 0,
                                  });
                                  ChangeToBe({ actiontype: "reverse" });
                                }}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button className=" !h-max rounded-none !bg-[#c43c3c] px-8 !text-white">
                              Reject Lead
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-white">
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Want to reject your lead.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="text-white">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => {
                                  UpdateFailedCounts({
                                    accepted: 0,
                                    rejected: 1,
                                    pending: 0,
                                  });
                                  ChangeToBe({ actiontype: "reject" });
                                }}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                    <div className="h-max w-[45%] space-y-4">
                      <div className="h-max w-full bg-tertiaryBackground px-6 py-4">
                        <div className="my-4 flex flex-col space-y-6 text-hoverColor">
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
                      <div className="h-max overflow-x-hidden overflow-y-scroll break-words bg-tertiaryBackground py-4 pl-4 pr-3">
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
                            className="  grid w-full  grid-cols-3 space-x-4  "
                          >
                            <p className="inline-block">order Type :</p>
                            <p className=" col-span-2 inline-block w-full">
                              {orderDetails.myBookings.ordertype}
                            </p>
                          </Label>
                          <Label
                            htmlFor="terms"
                            className=" grid w-full grid-cols-3 items-center"
                          >
                            <p className="inline-block min-w-max">
                              Main Address :
                            </p>
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

                  <div>
                    <div className=" bg-tertiaryBackground text-primaryText">
                      <h2 className=" font-secondary p-4 text-2xl font-bold">
                        Sold Device Elsewhere
                      </h2>
                    </div>
                    <div className="my-2 w-full">
                      <FailedImageGallery images={images} />
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
          </div>
        </div>
      )}
    </>
  );
}
