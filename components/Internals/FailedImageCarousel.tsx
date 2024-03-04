"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";

type ResponseImageType = {
  success: true;
  imgdevicefront: string;
  imgdeviceback: string;
  imgdeviceside1: string;
  imgdeviceside2: string;
  imgdeviceside3: string;
  imgdeviceside4: string;
};

export function FailedImageGallery({ leadId }: { leadId: number }) {
  const [images, setImages] = useState<ResponseImageType>();
  useEffect(() => {
    (async function () {
      const res = await fetch("/api/getDeviceConditionImage", {
        method: "POST",
        body: JSON.stringify({ leadid: leadId }),
        cache: "no-cache",
      });
      if (!res.ok) {
        console.log("Error :", res);
      }
      const data = await res.json();
      console.log(data);
      setImages(data);
    })();
  }, []);

  return (
    <div className="flex !flex-wrap gap-2 p-2">
      {images && images.success && (
        <>
          <Card className="w-full cursor-pointer rounded-md border-2 border-white transition-all duration-500 ease-in-out hover:scale-[1.05] md:basis-1/6 lg:basis-1/6 ">
            <CardContent className="flex w-full flex-col justify-start overflow-hidden rounded !p-0">
              <h3 className="w-full bg-tertiaryBackground p-2 text-center text-xs  font-semibold">
                {"Font Image"}
              </h3>
              <Image
                className=" h-full w-full"
                height={100}
                width={100}
                src={images?.imgdevicefront}
                alt=""
              ></Image>
            </CardContent>
          </Card>
          <Card className="w-full cursor-pointer rounded-md border-2 border-white transition-all duration-500 ease-in-out hover:scale-[1.05] md:basis-1/6 lg:basis-1/6 ">
            <CardContent className="flex w-full flex-col justify-start overflow-hidden rounded !p-0">
              <h3 className="w-full bg-tertiaryBackground p-2 text-center text-xs  font-semibold">
                {"Back Image"}
              </h3>
              <Image
                className=" h-full w-full"
                height={100}
                width={100}
                src={images?.imgdeviceback}
                alt=""
              ></Image>
            </CardContent>
          </Card>
          <Card className="w-full cursor-pointer rounded-md border-2 border-white transition-all duration-500 ease-in-out hover:scale-[1.05] md:basis-1/6 lg:basis-1/6 ">
            <CardContent className="flex w-full flex-col justify-start overflow-hidden rounded !p-0">
              <h3 className="w-full bg-tertiaryBackground p-2 text-center text-xs  font-semibold">
                {"Side 1"}
              </h3>
              <Image
                className=" h-full w-full"
                height={100}
                width={100}
                src={images?.imgdeviceside1}
                alt=""
              ></Image>
            </CardContent>
          </Card>
          <Card className="w-full cursor-pointer rounded-md border-2 border-white transition-all duration-500 ease-in-out hover:scale-[1.05] md:basis-1/6 lg:basis-1/6 ">
            <CardContent className="flex w-full flex-col justify-start overflow-hidden rounded !p-0">
              <h3 className="w-full bg-tertiaryBackground p-2 text-center text-xs  font-semibold">
                {"Side 2"}
              </h3>
              <Image
                className=" h-full w-full"
                height={100}
                width={100}
                src={images?.imgdeviceside2}
                alt=""
              ></Image>
            </CardContent>
          </Card>
          <Card className="w-full cursor-pointer rounded-md border-2 border-white transition-all duration-500 ease-in-out hover:scale-[1.05] md:basis-1/6 lg:basis-1/6 ">
            <CardContent className="flex w-full flex-col justify-start overflow-hidden rounded !p-0">
              <h3 className="w-full bg-tertiaryBackground p-2 text-center text-xs  font-semibold">
                {"Side 3"}
              </h3>
              <Image
                className=" h-full w-full"
                height={100}
                width={100}
                src={images.imgdeviceside3}
                alt=""
              ></Image>
            </CardContent>
          </Card>
          <Card className="w-full cursor-pointer rounded-md border-2 border-white transition-all duration-500 ease-in-out hover:scale-[1.05] md:basis-1/6 lg:basis-1/6 ">
            <CardContent className="flex w-full flex-col justify-start overflow-hidden rounded !p-0">
              <h3 className="w-full bg-tertiaryBackground p-2 text-center text-xs  font-semibold">
                {"Side 4"}
              </h3>
              <Image
                className=" h-full w-full"
                height={100}
                width={100}
                src={images?.imgdeviceside4}
                alt=""
              ></Image>
            </CardContent>
          </Card>
        </>
      )}
      {!images ||
        (!images.success && (
          <div className="font-semibold text-white">NO Image Available</div>
        ))}
    </div>
  );
}
