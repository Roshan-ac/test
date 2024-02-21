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
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { LeadActions } from "@/components/Internals/LeadActions";
import { Progress } from "@/components/ui/progress";
import { TabelPagination } from "@/components/Internals/TabelPagination";

type OrderDetails = {
  success: boolean;
  myBookings: {
    id: string;
    timestamp: string;
    devicename: string;
    devicebrandname: string;
    deviceimg: string;
    devicetype: string;
    deviceoriginalprice: string;
    devicegeneratedprice: string;
    devicefinalprice: number;
    deviceimei: number;
    ownername: string;
    owneraddress: string;
    city: string;
    ownerphoneno: string;
    owneremail: string;
    pincode: string;
    paymentmode: string;
    ordertype: string;
    assignedvendor: string;
    status: string;
    customersignature: string;
    creditpoints: number;
    pickupdate: string;
    pickuptime: string;
    upino: string;
    bankacno: number;
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
    devicestorage: string[];
    deviceram: string[];
    warrantystatus: string[];
    bodycondition: string[];
    deviceclassid: string[];
  };
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
    devicetype: string;
  };
}) {
  const [progress, setProgress] = useState(13);
  const [isLoading, setIsLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState<OrderDetails>();

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
      const OrderDetails = await res.json();
      setOrderDetails(OrderDetails);
      setIsLoading(false);
    })();
  }, [SelectedRow]);

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
          {orderDetails && orderDetails.myBookings && (
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
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Order ID :</span>
                      <span className="inline-block w-full">
                        {orderDetails?.myBookings.id}
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Pickup :</span>
                      <span className="inline-block w-full">
                        {orderDetails.myBookings.pickupdate}{" "}
                        {orderDetails.myBookings.pickuptime}
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Warranty :</span>
                      <span className="inline-block w-full">
                        {orderDetails.myBookings.warrantystatus}
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Screen :</span>
                      <span className="inline-block w-full">
                        {orderDetails.myBookings.screencondition}
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Body :</span>
                      <span className="inline-block w-full">
                        {orderDetails.myBookings.bodycondition}
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">
                        Accessories :
                      </span>
                      <span className="inline-block w-full">
                        {orderDetails.myBookings.accessoriesunavailable}
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Issues :</span>
                      <span className="inline-block w-full">
                        {/* {myBookings.} */}
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[40%]">Vendor :</span>
                      <span className="inline-block w-full">
                        {orderDetails.myBookings.assignedvendor}
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
                  </div>

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
                        className=" grid w-full grid-cols-3 items-center"
                      >
                        <p className="inline-block min-w-max"> Alternate :</p>
                        <p className=" col-span-2  w-full  whitespace-pre-wrap text-left leading-6">
                          {""}
                        </p>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className="  grid w-full  grid-cols-3 space-x-4  "
                      >
                        <p className="inline-block">Address Type :</p>
                        <p className=" col-span-2 inline-block w-full">{""}</p>
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
                          {orderDetails.myBookings.owneraddress
                            .split(", ")
                            .pop()}
                        </p>
                      </Label>
                      <Label
                        htmlFor="terms"
                        className=" grid w-full grid-cols-3 items-center"
                      >
                        <p className="inline-block min-w-max"> City :</p>
                        <p className=" col-span-2  w-full  whitespace-pre-wrap text-left leading-6">
                          {orderDetails.myBookings.owneraddress.split(", ")[5]}
                        </p>
                      </Label>
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
                    <Label
                      htmlFor="terms"
                      className=" grid w-full grid-cols-5 items-center"
                    >
                      <p className="inline-block min-w-max">
                        {" "}
                        11:12:24 15/09/2023 :
                      </p>
                      <p className=" col-span-4  w-full  whitespace-pre-wrap text-left leading-6">
                        Called Customer - Told To Reschedule
                      </p>
                    </Label>
                    <Label
                      htmlFor="terms"
                      className=" grid w-full grid-cols-5 items-center"
                    >
                      <p className="inline-block min-w-max">
                        {" "}
                        11:12:24 15/09/2023 :
                      </p>
                      <p className=" col-span-4  w-full  whitespace-pre-wrap text-left leading-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque exercitationem, pariatur laborum reprehenderit iure in a consequuntur, fuga aut magni minus porro delectus dignissimos consectetur maxime aperiam vero. Quae mollitia, asperiores beatae ipsum debitis quos alias doloribus accusantium laudantium molestiae ad voluptatibus aliquam id adipisci.
                      </p>
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
