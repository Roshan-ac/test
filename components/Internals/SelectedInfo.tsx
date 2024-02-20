"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TabelPagination } from "./TabelPagination";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { LeadActions } from "@/components/Internals/LeadActions";
import { FailedImageGallery } from "./FailedImageCarousel";
import { VendorDocuments } from "./VendorDocuments";
import { Progress } from "../ui/progress";

export function SheetDemo({
  isOpen,
  varient,
  setIsOpen,
  lead,
}: {
  isOpen: boolean;
  varient: "leads" | "orders" | "failed" | "vendors";
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  lead: Promise<any>;
}) {
  const [progress, setProgress] = useState(13);
  const [isLoading, setIsLoading] = useState(false);

  console.log(lead);

  useEffect(() => {
    lead.then((data) => {});
  }, [lead]);

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
          {varient == "vendors" ? (
            <div className=" my-4 space-y-4">
              <div className=" rounded border border-hoverColor border-opacity-50">
                <div className=" bg-tertiaryBackground">
                  <div className=" grid grid-cols-5 p-2 px-3 text-sm text-secondaryText">
                    <span>Vendor Name</span>
                    <span>Amount</span>
                    <span>Screenshot</span>
                  </div>
                  <div>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className=" grid grid-cols-5 border-y border-tableSeperator p-2 px-3 text-[13px] text-secondaryText"
                      >
                        <span>Alok Timalsina</span>
                        <span>20000</span>
                        <span className=" w-max cursor-pointer hover:underline">
                          View
                        </span>
                        <div className="col-span-2 flex items-center gap-2">
                          <div>
                            <Button
                              onClick={ShowProgress}
                              className=" !h-7 rounded-none !bg-[#82C43C] px-8 !text-xs"
                            >
                              Approved
                            </Button>
                          </div>
                          <div>
                            <Button
                              onClick={ShowProgress}
                              className=" !h-7 rounded-none !bg-[#FC5A5A] px-8 !text-xs"
                            >
                              Reject
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex h-full w-full gap-4">
                <div className="relative h-max w-[55%] bg-tertiaryBackground p-4 pt-8 text-hoverColor">
                  <Badge className=" absolute -top-[10px] left-6 z-10 w-max rounded-none !bg-purple-500 px-6 py-1 !text-white">
                    Phone
                  </Badge>
                  <div>
                    <h1>OnePlus 9 Pro 5G 128/8 (70)</h1>
                  </div>
                  <div className="my-6 flex flex-col space-y-6">
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Order ID :</span>
                      <span className="inline-block w-full">{lead.id}</span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Pickup :</span>
                      <span className="inline-block w-full">
                        7{lead.timestamp}
                        {/* 2023/12/29 10:00 AM - 01:00 PM */}
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Warranty :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Screen :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Body :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        Accessories :
                      </span>
                      <span className="inline-block w-full">CK</span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Issues :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Processor :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Ram :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Storage :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Vendor :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                  </div>
                </div>
                <div className="h-max w-[45%] space-y-4">
                  <div className="h-max w-full bg-tertiaryBackground px-6 py-4">
                    <div className="my-4 flex flex-col space-y-6 text-hoverColor">
                      <Label
                        htmlFor="terms"
                        className="flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[80%]">
                          Quoted Price :
                        </span>
                        <span className="inline-block w-full">18000/-</span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[80%]">
                          Requote Price :
                        </span>
                        <span className="inline-block w-full">14000/-</span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[80%]">
                          Final Price :
                        </span>
                        <span className="inline-block w-full">15500/-</span>
                      </Label>
                    </div>
                  </div>
                  <div className="h-max w-full overflow-y-scroll bg-tertiaryBackground  px-6 py-4">
                    <div className="mt-4 flex flex-col space-y-6 text-hoverColor">
                      <Label
                        htmlFor="terms"
                        className="flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">Name :</span>
                        <span className="inline-block w-full">
                          {lead.ownername}
                        </span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">Email :</span>
                        <span className="inline-block w-full">
                          {lead.owneremail}
                        </span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">Phone :</span>
                        <span className="inline-block w-full">
                          {lead.ownerphoneno}
                        </span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">
                          Alternate :
                        </span>
                        <span className="inline-block w-full">
                          {lead?.alternateno
                            ? lead?.alternateno
                            : lead?.ownerphoneno}
                        </span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">
                          Address Type :
                        </span>
                        <span className="inline-block w-full">Home</span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">
                          Main Address :
                        </span>
                        <span className="inline-block w-full leading-6">
                          {lead?.addresshome}
                        </span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">Pincode :</span>
                        <span className="inline-block w-full">
                          {lead?.pincode}
                        </span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">City :</span>
                        <span className="inline-block w-full">
                          {" "}
                          {lead?.city}
                        </span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">Payment :</span>
                        <span className="inline-block w-full">
                          {lead?.payment}
                        </span>
                      </Label>
                    </div>
                    <div>
                      <div>
                        <VendorDocuments />
                      </div>
                      <div className="flex  items-center gap-8">
                        <div>
                          <Button
                            onClick={ShowProgress}
                            className=" !h-7 rounded-none !bg-[#82C43C] px-8 !text-xs"
                          >
                            Approved
                          </Button>
                        </div>
                        <div>
                          <Button
                            onClick={ShowProgress}
                            className=" !h-7 rounded-none !bg-[#FC5A5A] px-8 !text-xs"
                          >
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-max w-full bg-tertiaryBackground pb-4">
                <div className="p-6 text-hoverColor">
                  <div>
                    <h1>Leads Logs :</h1>
                  </div>
                  {/* Lead Logs here */}
                  <div className="my-6 flex flex-col space-y-6">
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023 :
                      </span>
                      <span className="inline-block w-full">
                        Called Customer - Told To Reschedule
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023 :
                      </span>
                      <span className="inline-block w-full">
                        Rescheduled For 2023/12/29 10:00 AM - 01:00 PM
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023 :
                      </span>
                      <span className="inline-block w-full">
                        Called Customer - Pickup Confirmed
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023:
                      </span>
                      <span className="inline-block w-full">
                        Out For Pickup
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023 :
                      </span>
                      <span className="inline-block w-full">
                        Requote - Box, Charger, Below Average
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023 :
                      </span>
                      <span className="inline-block w-full">
                        Requote - Box, Charger, Below Average, Screen Scratches
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023 :
                      </span>
                      <span className="inline-block w-full">
                        Failed - Requote Price Not Accepted
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023 :
                      </span>
                      <span className="inline-block w-full">
                        Failed Confirmed - Photos Accepted
                      </span>
                    </Label>
                  </div>
                </div>
                <div className="flex justify-center">
                  <TabelPagination />
                </div>
              </div>
            </div>
          ) : (
            <div className=" my-4 space-y-4">
              <div className="flex h-full w-full gap-4">
                <div className="relative h-max w-[55%] bg-tertiaryBackground p-4 pt-8 text-hoverColor">
                  <Badge className=" absolute -top-[10px] left-6 z-10 w-max rounded-none !bg-purple-500 px-6 py-1 !text-white">
                    Phone
                  </Badge>
                  <div>
                    <h1>OnePlus 9 Pro 5G 128/8 (70)</h1>
                  </div>
                  <div className="my-6 flex flex-col space-y-6">
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Order ID :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Pickup :</span>
                      <span className="inline-block w-full">
                        2023/12/29 10:00 AM - 01:00 PM
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Warranty :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Screen :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Body :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        Accessories :
                      </span>
                      <span className="inline-block w-full">CK</span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Issues :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Processor :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Ram :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Storage :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Vendor :</span>
                      <span className="inline-block w-full">
                        CK-MO-Pun-853211703827976
                      </span>
                    </Label>
                  </div>
                  {varient == "leads" ? (
                    <div>
                      <LeadActions />
                    </div>
                  ) : varient == "failed" ? (
                    <div className="flex w-full items-center space-x-4 py-8">
                      <div>
                        <Button
                          onClick={ShowProgress}
                          className=" !h-max rounded-none !bg-[#82C43C] px-8"
                        >
                          Accept Failed
                        </Button>
                      </div>
                      <div>
                        <Button
                          onClick={ShowProgress}
                          className=" !h-max rounded-none !bg-[#FF974A] px-8"
                        >
                          Reverse Lead
                        </Button>
                      </div>
                      <div>
                        <Button
                          onClick={ShowProgress}
                          className=" !h-max rounded-none !bg-[#FC5A5A] px-8"
                        >
                          Reject Failed
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-full items-center space-x-4 py-8">
                      <div>
                        <Button
                          onClick={ShowProgress}
                          className=" !h-max rounded-none !bg-[#82C43C] px-8"
                        >
                          Assign
                        </Button>
                      </div>
                      <div>
                        <Button
                          onClick={ShowProgress}
                          className=" !h-max rounded-none !bg-[#FF974A] px-8"
                        >
                          Reschedule
                        </Button>
                      </div>
                      <div>
                        <Button
                          onClick={ShowProgress}
                          className=" !h-max rounded-none !bg-[#FC5A5A] px-8"
                        >
                          Fail Lead
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="h-max w-[45%] space-y-4">
                  <div className="h-max w-full bg-tertiaryBackground px-6 py-4">
                    <div className="my-4 flex flex-col space-y-6 text-hoverColor">
                      <Label
                        htmlFor="terms"
                        className="flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[80%]">
                          Quoted Price :
                        </span>
                        <span className="inline-block w-full">18000/-</span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[80%]">
                          Quoted Price :
                        </span>
                        <span className="inline-block w-full">18000/-</span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[80%]">
                          Requote Price :
                        </span>
                        <span className="inline-block w-full">14000/-</span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[80%]">
                          Final Price :
                        </span>
                        <span className="inline-block w-full">15500/-</span>
                      </Label>
                    </div>
                  </div>
                  <div className="h-max w-full overflow-y-scroll bg-tertiaryBackground  px-6 py-4">
                    <div className="mt-4 flex flex-col space-y-6 text-hoverColor">
                      <Label
                        htmlFor="terms"
                        className="flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">Name :</span>
                        <span className="inline-block w-full">
                          Akshay salunke
                        </span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">Email :</span>
                        <span className="inline-block w-full">
                          salunkeakshay48@gmail.com
                        </span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">Phone :</span>
                        <span className="inline-block w-full">
                          919767774963
                        </span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">
                          Alternate :
                        </span>
                        <span className="inline-block w-full">
                          919767774963
                        </span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">
                          Address Type :
                        </span>
                        <span className="inline-block w-full">Home</span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">
                          Main Address :
                        </span>
                        <span className="inline-block w-full leading-6">
                          Flat no 12, Waterlily C,Sukhwani Campus, vallabhn,oppo
                          to Vallabhnagar Bus
                        </span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">Pincode :</span>
                        <span className="inline-block w-full">411018</span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">City :</span>
                        <span className="inline-block w-full">Pune</span>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" flex w-full space-x-4  "
                      >
                        <span className="inline-block w-[60%]">Payment :</span>
                        <span className="inline-block w-full">UPI</span>
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
              {varient == "failed" && (
                <div>
                  <div className=" bg-tertiaryBackground text-primaryText">
                    <h2 className=" font-secondary p-4 text-2xl font-bold">
                      Sold Device Elsewhere
                    </h2>
                  </div>
                  <div className="my-2 w-full">
                    <FailedImageGallery />
                  </div>
                </div>
              )}
              <div className="h-max w-full bg-tertiaryBackground pb-4">
                <div className="p-6 text-hoverColor">
                  <div>
                    <h1>Leads Logs :</h1>
                  </div>
                  <div className="my-6 flex flex-col space-y-6">
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023 :
                      </span>
                      <span className="inline-block w-full">
                        Called Customer - Told To Reschedule
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023 :
                      </span>
                      <span className="inline-block w-full">
                        Rescheduled For 2023/12/29 10:00 AM - 01:00 PM
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023 :
                      </span>
                      <span className="inline-block w-full">
                        Called Customer - Pickup Confirmed
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023:
                      </span>
                      <span className="inline-block w-full">
                        Out For Pickup
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023 :
                      </span>
                      <span className="inline-block w-full">
                        Requote - Box, Charger, Below Average
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023 :
                      </span>
                      <span className="inline-block w-full">
                        Requote - Box, Charger, Below Average, Screen Scratches
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023 :
                      </span>
                      <span className="inline-block w-full">
                        Failed - Requote Price Not Accepted
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        11:12:24 15/09/2023 :
                      </span>
                      <span className="inline-block w-full">
                        Failed Confirmed - Photos Accepted
                      </span>
                    </Label>
                  </div>
                </div>
                <div className="flex justify-center">
                  <TabelPagination />
                </div>
              </div>
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
