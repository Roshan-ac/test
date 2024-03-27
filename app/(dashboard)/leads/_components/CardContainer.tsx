import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { LargeNumberLike } from "crypto";

interface CardInterface {
  Ringing: number;
  Callback: number;
  SwitchedOff: number;
  Pending: number;
  Converted: number;
}

export function CardContainer({
  Ringing,
  Callback,
  SwitchedOff,
  Pending,
  Converted,
}: CardInterface) {
  return (
    <div className="grid h-[40vh] grid-cols-3 gap-6">
      <Card className="flex w-full items-center justify-center rounded-[16px] !bg-primaryBackground">
        <div className="flex space-x-10">
          <div>
            <Image
              src={"/Images/Ok.svg"}
              width={60}
              quality={200}
              height={60}
              alt=""
            />
          </div>
          <div className="space-y-4 py-1">
            <h1 className=" text-5xl font-medium">{Ringing}</h1>
            <h6 className=" text-xl text-secondaryText">Ringing</h6>
          </div>
        </div>
      </Card>
      <Card className="flex w-full items-center justify-center rounded-[16px] !bg-primaryBackground">
        <div className="flex space-x-10">
          <div>
            <Image
              src={"/Images/Refresh.svg"}
              width={60}
              quality={200}
              height={60}
              alt=""
            />
          </div>
          <div className="space-y-4 py-1">
            <h1 className=" text-5xl font-medium">{Callback}</h1>
            <h6 className=" text-xl text-secondaryText">Callback</h6>
          </div>
        </div>
      </Card>
      <Card className="flex w-full items-center justify-center rounded-[16px] !bg-primaryBackground">
        <div className="flex space-x-10">
          <div>
            <Image
              src={"/Images/call.svg"}
              width={60}
              quality={200}
              height={60}
              alt=""
            />
          </div>
          <div className="space-y-4 py-1">
            <h1 className=" text-5xl font-medium">{SwitchedOff}</h1>
            <h6 className=" text-xl text-secondaryText">Switched Off</h6>
          </div>
        </div>
      </Card>
      <Card className="flex w-full items-center justify-center rounded-[16px] !bg-primaryBackground">
        <div className="flex space-x-10">
          <div>
            <Image
              src={"/Images/call.svg"}
              width={60}
              quality={200}
              height={60}
              alt=""
            />
          </div>
          <div className="space-y-4 py-1">
            <h1 className=" text-5xl font-medium">{Converted}</h1>
            <h6 className=" text-xl text-secondaryText">Converted</h6>
          </div>
        </div>
      </Card>
      <Card className="flex w-full items-center justify-center rounded-[16px] !bg-primaryBackground">
        <div className="flex space-x-10">
          <div>
            <Image
              src={"/Images/call.svg"}
              width={60}
              quality={200}
              height={60}
              alt=""
            />
          </div>
          <div className="space-y-4 py-1">
            <h1 className=" text-5xl font-medium">{Pending}</h1>
            <h6 className=" text-xl text-secondaryText">Pending</h6>
          </div>
        </div>
      </Card>
    </div>
  );
}
