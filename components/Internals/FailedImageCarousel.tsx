import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function FailedImageGallery() {
  return (
    <div className="flex !flex-wrap gap-2 p-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <Card key={index} className="w-full cursor-pointer border-2 border-white rounded-md transition-all duration-500 ease-in-out hover:scale-[1.05] md:basis-1/6 lg:basis-1/6 ">
          <CardContent className="flex w-full flex-col justify-start overflow-hidden rounded !p-0">
            <h3 className="w-full bg-tertiaryBackground p-2 text-center text-xs  font-semibold">
              {"Font Image"}
            </h3>
            <Image
              className=" h-full w-full"
              height={100}
              width={100}
              src={"/images/phone-break.jpg"}
              alt=""
            ></Image>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
