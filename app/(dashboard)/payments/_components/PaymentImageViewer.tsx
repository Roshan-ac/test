import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const PaymentImageViewer = ({ src }: { src: string }) => {
  const [viewImage, setViewImage] = useState<{
    state: boolean;
    src: string;
  }>({
    state: false,
    src: "",
  });
  return (
    <div>
      {" "}
      {viewImage.state && viewImage.src !== "" && (
        <Card className=" absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black">
          <X
            onClick={() => {
              setViewImage({ state: false, src: "" });
            }}
            className=" fixed  right-8 top-8 z-50 cursor-pointer text-white hover:text-red-400"
          />
          <div className=" aspect-square h-full w-1/2 rounded-md p-1 ">
            <Image
              src={viewImage.src}
              alt="Self photo"
              height={100}
              width={100}
              className="m-auto aspect-square h-full w-full object-contain p-2"
            />
          </div>
        </Card>
      )}
      <span onClick={()=>{
        setViewImage({
            state:true,
            src:src
        })
      }} className=" p-1 bg-slate-500 px-6 rounded-md text-white hover:text-green-500">View</span>
    </div>
  );
};

export default PaymentImageViewer;
