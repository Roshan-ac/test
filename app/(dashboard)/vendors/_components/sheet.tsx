"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { TabelPagination } from "@/components/Internals/TabelPagination";
import { useRouter } from "next/navigation";

import { toast } from "@/components/ui/use-toast";
import { deviceType } from "@/interfaces";
import { FailedImageGallery } from "@/components/Internals/FailedImageCarousel";
import { VendorsInterface } from "./BasePage";
import PincodeTextArea from "./PincodeTextArea";
import VendorPayment from "../../payments/_components/VendorPayment";
import SheetSkeleton from "@/components/sheetSkeleton";

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
    screencondition: string[];
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

export function SheetDemo({
  isOpen,
  setIsOpen,
  SelectedRow,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  SelectedRow: VendorsInterface;
}) {
  const [progress, setProgress] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [logDetails, setLogDetails] = useState<LogDetails>();

  useEffect(() => {
    async function getVendorLogs() {
      const res = await fetch("/api/getvendorcreditlogs", {
        method: "POST",
        body: JSON.stringify({
          vendorid: SelectedRow?.id,
        }),
      });
      const data = await res.json();
      if (data) {
        setLogDetails(data.data);
      }
    }
    if (!logDetails) {
      getVendorLogs();
    }
  }, [SelectedRow, logDetails]);

  const ShowProgress = () => {
    setIsLoading(true);
    setProgress(8);
    setTimeout(() => setProgress(32), 500);
    setTimeout(() => setProgress(52), 500);
    setTimeout(() => setProgress(67), 500);
    setTimeout(() => setProgress(79), 500);
    setTimeout(() => setProgress(94), 500);
    setTimeout(() => setProgress(100), 500);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <Sheet open={isOpen}>
      <Progress
        hidden={!isLoading}
        value={progress}
        className=" absolute -top-6 right-0 z-[80] h-[2px]"
      />

      <SheetContent
        className=" h-full rounded  !border-none  !bg-secondaryBackground sm:max-w-[80%]"
        setIsOpen={setIsOpen}
      >
        <ScrollArea className="!h-[100vh] pb-6">
          {SelectedRow ? (
            <div className="my-4 space-y-4">
              <div className="flex h-full w-full gap-4">
                <div className="relative h-max w-[55%] space-y-2 text-hoverColor">
                  <h4>Servicable Pincodes:</h4>
                  <div className="">
                    <PincodeTextArea vendorId={SelectedRow.id} />
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
                          Available Credits :
                        </span>
                        <span className="inline-block w-full">
                          {SelectedRow.creditsavailable}
                        </span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[80%]">
                          Max Leads :
                        </span>
                        <span className="inline-block w-full">
                          {SelectedRow.maxleads}
                        </span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[80%]">
                          Vendor Type :
                        </span>
                        <span className="inline-block w-full">
                          {SelectedRow.deviceassigned}
                        </span>
                      </Label>
                    </div>
                  </div>

                  <div className="h-max overflow-y-auto overflow-x-hidden break-words bg-tertiaryBackground py-4 pl-4 pr-3">
                    <div className="mt-4 flex flex-col space-y-6 text-hoverColor">
                      <Label
                        htmlFor="terms"
                        className="grid w-full grid-cols-3 items-center"
                      >
                        <p className="inline-block min-w-max"> Name :</p>
                        <p className=" col-span-2  w-full  whitespace-pre-wrap text-left leading-6">
                          {SelectedRow.name}
                        </p>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" grid w-full grid-cols-3 items-center"
                      >
                        <p className="inline-block min-w-max"> Email :</p>
                        <p className=" col-span-2  w-full  whitespace-pre-wrap text-left leading-6">
                          {SelectedRow.email}
                        </p>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" grid w-full grid-cols-3 items-center"
                      >
                        <p className="inline-block min-w-max"> Phone :</p>
                        <p className=" col-span-2  w-full  whitespace-pre-wrap text-left leading-6">
                          {SelectedRow.phone}
                        </p>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" grid w-full grid-cols-3 items-center"
                      >
                        <p className="inline-block min-w-max"> Alternate :</p>
                        <p className="col-span-2 w-full whitespace-pre-wrap text-left leading-6">
                          {/* Alternate no here */}
                          {SelectedRow.phone}
                        </p>
                      </Label>

                      <Label
                        htmlFor="terms"
                        className="grid w-full grid-cols-3"
                      >
                        <p className="inline-block">Home Address :</p>
                        <p className="col-span-2 inline-block w-full">
                          {SelectedRow.address}
                        </p>
                      </Label>

                      <Label
                        htmlFor="terms"
                        className="grid w-full grid-cols-3 items-center"
                      >
                        <p className="inline-block min-w-max">Shop Address :</p>
                        <p className=" col-span-2  w-full  whitespace-pre-wrap text-wrap text-left leading-6">
                          {/* Shop Address here */}
                          {SelectedRow.address}
                        </p>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" grid w-full grid-cols-3 items-center"
                      >
                        <p className="inline-block min-w-max"> City :</p>
                        <p className=" col-span-2  w-full  whitespace-pre-wrap text-left leading-6">
                          {/* City here */}
                          {"null"}
                        </p>
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className=" bg-tertiaryBackground text-primaryText">
                  <h2 className=" font-secondary p-4 text-2xl font-bold">
                    Image
                  </h2>
                </div>
                <div className="my-2 w-full">
                  {/* <FailedImageGallery
                    images={[
                      SelectedRow.aadharcardimgback,
                      SelectedRow.aadharcardimgfront,
                      SelectedRow.pancardimg,
                      SelectedRow.selfphoto,
                      SelectedRow.shopphoto,
                    ]}
                  /> */}
                </div>

                <div className="flex justify-between">
                  {SelectedRow.applicationStatus === "0" && (
                    <>
                      <button className="bg-[#82C43C] px-3 py-2">
                        {" "}
                        Accept{" "}
                      </button>
                      <button className="bg-[#FC5A5A] px-3 py-2">
                        {" "}
                        Reject{" "}
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="h-max w-full bg-tertiaryBackground pb-4">
                <div className="p-6 text-hoverColor">
                  <div>
                    <h1>Leads Logs :</h1>
                  </div>
                  <div className="my-6 flex flex-col space-y-6">
                    {logDetails && (
                      <>
                        {logDetails.data.map((item) => (
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
                    {!logDetails && <p> No Logs Found</p>}
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
