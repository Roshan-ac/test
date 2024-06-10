"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { vendorDetails } from "./BasePage";
import PincodeTextArea from "./PincodeTextArea";
import SheetSkeleton from "@/components/sheetSkeleton";
import ImageGallery from "./ImageGallery";
import { Check, Pencil } from "lucide-react";

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
  SelectedRow: vendorDetails;
}) {
  const [progress, setProgress] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [logDetails, setLogDetails] = useState<LogDetails>();
  const [editMaxLead, setEditMaxLead] = useState<boolean>(false);

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



  return (
    <Sheet open={isOpen}>
      <SheetContent setIsOpen={setIsOpen} className=" h-full rounded  !border-none  !bg-secondaryBackground sm:max-w-[80%]">
        <ScrollArea className="!h-[100vh] pb-6">
          {SelectedRow ? (
            <div className="my-4  w-full space-y-4">
              <div className="flex h-full w-full gap-4">
                <PincodeTextArea vendorId={SelectedRow.id} />
                <div className="h-max w-[40%] space-y-4">
                  <div className="h-max w-full bg-tertiaryBackground px-6 py-4">
                    <div className="my-4 flex flex-col space-y-6 text-hoverColor">
                      <div className=" grid grid-cols-2 gap-2">
                        <Label>Available Credits :</Label>
                        <Label>{SelectedRow.creditsavailable}</Label>
                      </div>
                      <div className=" grid grid-cols-2 gap-2">
                        <Label>Max Leads :</Label>
                        <Label className="flex items-center gap-2">
                          <span className={`${editMaxLead ? ' w-20 rounded-md p-1 border-white border' : ''} duration-300 transition-all ease-in-out`} contentEditable={editMaxLead}>{SelectedRow.maxleads}</span>
                          <span className=" mx-1 cursor-pointer group">
                            {
                              !editMaxLead ? (
                                <Pencil onClick={() => {
                                  setEditMaxLead(true)
                                }} size={14} className=" group-hover:text-yellow-400" />
                              ) : (
                                <Check onClick={() => {
                                  setEditMaxLead(false)
                                }} size={18} className=" text-green-400 group-hover:text-green-500" />
                              )}
                          </span>
                        </Label>
                      </div>
                      <div className=" grid grid-cols-2 gap-2">
                        <Label>Vendor Type :</Label>
                        <Label className=" break-words tracking-wide leading-snug">{SelectedRow.deviceassigned}</Label>
                      </div>
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
                        <p className="inline-block min-w-max">
                          {" "}
                          Alternate :
                        </p>
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
                        <p className="inline-block min-w-max">
                          Shop Address :
                        </p>
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
                <div className="!h-56">
                  <ImageGallery
                    images={{
                      aadharcardimgback: SelectedRow.aadharcardimgback,
                      aadharcardimgfront: SelectedRow.aadharcardimgfront,
                      pancardimg: SelectedRow.pancardimg,
                      selfphoto: SelectedRow.selfphoto,
                      shopphoto: SelectedRow.shopphoto,
                    }}
                  />
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
                  <button className="bg-[#dee042] px-4 py-2">
                    {" "}
                    Hold{" "}
                  </button>
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
