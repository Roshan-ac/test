"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
// import { TabelPagination } from "@/components/Internals/TabelPagination";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import EvaluationReport from "@/components/EvaluateReport/EvaluateReport";
import { deviceType } from "@/interfaces";

import SheetSkeleton from "@/components/sheetSkeleton";
import { Input } from "@/components/ui/input";
import { allDeviceType } from "@/interfaces/devicetype";
import { FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
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

export function SheetDemo({
  isOpen,
  setIsOpen,
  invoice,
  setIsUpdated,
}: {
  isOpen: boolean;
  invoice: {
    pid: string;
    pvalue: string;
    city: string;
    state: string;
    devicetype: deviceType;
    status: string;
  };
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [progress, setProgress] = useState(1);
  const [newpincode, setNewPincode] = useState<{
    pincode: string;
    city: string;
    state: string;
  }>();
  const [isLoading, setIsLoading] = useState(false);
  const [LogDetails, setLogDetails] = useState<any>();
  async function updateAreaStatus({status}){
    setIsUpdated(true);
    const res = await fetch("/api/updateAreaStatus",{
      method:"POST",
      body:JSON.stringify({
        status:status,
        pid:invoice.pid
      })
    })
    const result = await res.json()
    if(res.ok){
      setIsUpdated(false);
      toast({
        description: (
          <p className={`${result.success?' text-green-500':' text-red-500'}`}>{result.message}</p>
        ),
      });
    }
  }
  return (
    <Sheet open={isOpen}>
      <SheetContent
        className=" h-full rounded  !border-none  !bg-secondaryBackground sm:max-w-[80%]"
        setIsOpen={setIsOpen}
      >
        <ScrollArea className="!h-[100vh] pb-6">
          <div className=" space-y-6">
            <div className=" flex items-start space-x-4">
              <div className="w-max space-y-3">
                <div className=" flex justify-between px-2 text-white">
                  <Label className=" px-2 text-base font-semibold text-white">
                    Device Type
                  </Label>
                  <Label className=" px-2 text-base font-semibold text-white">
                    Current Status : Hold
                  </Label>
                </div>
                <div className="rounded-xl bg-tertiaryBackground">
                  <div className=" grid grid-cols-4 grid-rows-4 gap-5 p-6 text-white">
                    {allDeviceType.map((item, index) => (
                      <div
                        key={index}
                        className=" flex w-max items-center space-x-2"
                      >
                        <Checkbox
                        // checked={field.value?.includes(item.id)}
                        // onCheckedChange={(checked) => {
                        //   return checked
                        //     ? field.onChange([...field.value, item.id])
                        //     : field.onChange(
                        //         field.value?.filter(
                        //           (value) => value !== item.id
                        //         )
                        //       )
                        // }}
                        />

                        <Label className="text-sm font-normal">{item}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" space-x-6 px-4">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className=" !h-max rounded-none !bg-[#cc6336] px-8 !text-white">
                        Update
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">
                          Are you sure want to change status ?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          You can change status any time.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="text-white">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            // updateAreaStatus();
                          }}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className=" !h-max rounded-none !bg-[#236f1e] px-8 !text-white">
                        Go Live
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">
                          Are you sure want to change status ?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          You can change status any time.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="text-white">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            updateAreaStatus({status:"active"});
                          }}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className=" !h-max rounded-none !bg-[#ea433a] px-8 !text-white">
                        Hold
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">
                          Are you sure want to change status ?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          You can change status any time.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="text-white">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            updateAreaStatus({status:"hold"});
                          }}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
            <div>
              <div className="h-full w-full rounded-xl bg-tertiaryBackground pb-4">
                <div className="p-6 text-hoverColor">
                  <div>
                    <h1>Area Logs :</h1>
                  </div>

                  <div className="my-6 flex flex-col space-y-6">
                    {LogDetails && LogDetails.data ? (
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
                    ) : (
                      <p>No Logs Found !</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
