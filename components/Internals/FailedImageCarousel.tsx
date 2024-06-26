"use client";

import { ResponseImageType } from "@/app/(dashboard)/failed/_components/sheet";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";



export function FailedImageGallery({ images }: { images:ResponseImageType  }) {

  return (
    <PhotoProvider>
      <div className="flex !flex-wrap gap-2 p-2">
        {images && images.success && (
          <>
            <Card className="w-full cursor-pointer rounded-md border-2 border-white transition-all duration-500 ease-in-out hover:scale-[1.05] md:basis-1/6 lg:basis-1/6 ">
              <CardContent className="flex w-full flex-col justify-start overflow-hidden rounded !p-0">
                <h3 className="w-full bg-tertiaryBackground p-2 text-center text-xs  font-semibold">
                  {"Font Image"}
                </h3>
                <PhotoView  src={`${images?.imgdevicefront}`}>
                  <Image
                    className=" h-full w-full object-fill"
                    height={100}
                    width={100}
                    src={`${images?.imgdevicefront}`}
                    alt=""
                  ></Image>
                </PhotoView>
              </CardContent>
            </Card>
            <Card className="w-full cursor-pointer rounded-md border-2 border-white transition-all duration-500 ease-in-out hover:scale-[1.05] md:basis-1/6 lg:basis-1/6 ">
              <CardContent className="flex w-full flex-col justify-start overflow-hidden rounded !p-0">
                <h3 className="w-full bg-tertiaryBackground p-2 text-center text-xs  font-semibold">
                  {"Back Image"}
                </h3>
                <PhotoView  src={`${images?.imgdeviceback}`}>
                  <Image
                    className=" h-full w-full object-fill"
                    height={100}
                    width={100}
                    src={`${images?.imgdeviceback}`}
                    alt=""
                  ></Image>
                </PhotoView>
              </CardContent>
            </Card>
            <Card className="w-full cursor-pointer rounded-md border-2 border-white transition-all duration-500 ease-in-out hover:scale-[1.05] md:basis-1/6 lg:basis-1/6 ">
              <CardContent className="flex w-full flex-col justify-start overflow-hidden rounded !p-0">
                <h3 className="w-full bg-tertiaryBackground p-2 text-center text-xs  font-semibold">
                  {"Side 1"}
                </h3>
                <PhotoView  src={`${images?.imgdeviceside1}`}>
                  <Image
                    className=" h-full w-full object-fill"
                    height={100}
                    width={100}
                    src={`${images?.imgdeviceside1}`}
                    alt=""
                  ></Image>
                </PhotoView>
              </CardContent>
            </Card>
            <Card className="w-full cursor-pointer rounded-md border-2 border-white transition-all duration-500 ease-in-out hover:scale-[1.05] md:basis-1/6 lg:basis-1/6 ">
              <CardContent className="flex w-full flex-col justify-start overflow-hidden rounded !p-0">
                <h3 className="w-full bg-tertiaryBackground p-2 text-center text-xs  font-semibold">
                  {"Side 2"}
                </h3>
                <PhotoView  src={`${images?.imgdeviceside2}`}>
                  <Image
                    className=" h-full w-full object-fill"
                    height={100}
                    width={100}
                    src={`${images?.imgdeviceside2}`}
                    alt=""
                  ></Image>
                </PhotoView>
              </CardContent>
            </Card>
            <Card className="w-full cursor-pointer rounded-md border-2 border-white transition-all duration-500 ease-in-out hover:scale-[1.05] md:basis-1/6 lg:basis-1/6 ">
              <CardContent className="flex w-full flex-col justify-start overflow-hidden rounded !p-0">
                <h3 className="w-full bg-tertiaryBackground p-2 text-center text-xs  font-semibold">
                  {"Side 3"}
                </h3>
                <PhotoView  src={`${images?.imgdeviceside3}`}>
                  <Image
                    className=" h-full w-full object-fill"
                    height={100}
                    width={100}
                    src={`${images?.imgdeviceside3}`}
                    alt=""
                  ></Image>
                </PhotoView>
              </CardContent>
            </Card>
            <Card className="w-full cursor-pointer rounded-md border-2 border-white transition-all duration-500 ease-in-out hover:scale-[1.05] md:basis-1/6 lg:basis-1/6 ">
              <CardContent className="flex w-full flex-col justify-start overflow-hidden rounded !p-0">
                <h3 className="w-full bg-tertiaryBackground p-2 text-center text-xs  font-semibold">
                  {"Side 4"}
                </h3>
                <PhotoView  src={`${images?.imgdeviceside4}`}>
                  <Image
                    className=" h-full w-full object-fill"
                    height={100}
                    width={100}
                    src={`${images?.imgdeviceside4}`}
                    alt=""
                  ></Image>
                </PhotoView>
              </CardContent>
            </Card>
          </>
        )}
        {!images ||
          (!images.success && (
            <div className="font-semibold text-white">NO Image Available</div>
          ))}
      </div>
    </PhotoProvider>
    // <></>
  );
}
