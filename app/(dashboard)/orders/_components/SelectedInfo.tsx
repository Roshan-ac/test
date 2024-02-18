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
import { Dispatch, SetStateAction } from "react";
import { TabelPagination } from "./TabelPagination";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { LeadActions } from "@/components/Internals/LeadActions";

export function SheetDemo({
  isOpen,
  varient,
  setIsOpen,
}: {
  isOpen: boolean;
  varient: "lead" | "orders";
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Sheet open={isOpen}>
      <SheetContent
        className="h-full rounded !border-none !bg-secondaryBackground sm:max-w-[80%]"
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
                    <span className="inline-block w-[40%]">Accessories :</span>
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
                {varient == "lead" ? (
                  <div>
                    <LeadActions />
                  </div>
                ) : (
                  <div className="flex w-full items-center space-x-4 py-8">
                    <div>
                      <Button className=" !h-max rounded-none !bg-[#82C43C] px-8">
                        Assign
                      </Button>
                    </div>
                    <div>
                      <Button className=" !h-max rounded-none !bg-[#FF974A] px-8">
                        Reschedule
                      </Button>
                    </div>
                    <div>
                      <Button className=" !h-max rounded-none !bg-[#FC5A5A] px-8">
                        Fail Lead
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              <div className="h-max w-[45%] space-y-4">
                <div className="h-max w-full bg-tertiaryBackground px-6 py-4">
                  <div className="my-4 flex flex-col space-y-6 text-hoverColor">
                    <Label htmlFor="terms" className="flex w-full space-x-4  ">
                      <span className="inline-block w-[80%]">
                        Quoted Price :
                      </span>
                      <span className="inline-block w-full">18000/-</span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[80%]">
                        Quoted Price :
                      </span>
                      <span className="inline-block w-full">18000/-</span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[80%]">
                        Requote Price :
                      </span>
                      <span className="inline-block w-full">14000/-</span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[80%]">
                        Final Price :
                      </span>
                      <span className="inline-block w-full">15500/-</span>
                    </Label>
                  </div>
                </div>
                <div className="h-max w-full overflow-y-scroll bg-tertiaryBackground  px-6 py-4">
                  <div className="mt-4 flex flex-col space-y-6 text-hoverColor">
                    <Label htmlFor="terms" className="flex w-full space-x-4  ">
                      <span className="inline-block w-[60%]">Name :</span>
                      <span className="inline-block w-full">
                        Akshay salunke
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[60%]">Email :</span>
                      <span className="inline-block w-full">
                        salunkeakshay48@gmail.com
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[60%]">Phone :</span>
                      <span className="inline-block w-full">919767774963</span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[60%]">Alternate :</span>
                      <span className="inline-block w-full">919767774963</span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[60%]">
                        Address Type :
                      </span>
                      <span className="inline-block w-full">Home</span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[60%]">
                        Main Address :
                      </span>
                      <span className="inline-block w-full leading-6">
                        Flat no 12, Waterlily C,Sukhwani Campus, vallabhn,oppo
                        to Vallabhnagar Bus
                      </span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[60%]">Pincode :</span>
                      <span className="inline-block w-full">411018</span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[60%]">City :</span>
                      <span className="inline-block w-full">Pune</span>
                    </Label>
                    <Label htmlFor="terms" className=" flex w-full space-x-4  ">
                      <span className="inline-block w-[60%]">Payment :</span>
                      <span className="inline-block w-full">UPI</span>
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
                    <span className="inline-block w-full">Out For Pickup</span>
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
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
