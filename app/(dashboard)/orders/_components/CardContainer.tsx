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
type cardData = {
  completedOrdersCount: number;
  availableOrdersCount: number;
  assignedOrdersCount: number;
  failedOrdersCount: number;
};
export function CardContainer({ cardsValues }: { cardsValues: cardData }) {
  return (
    <div className="grid h-[30vh] grid-cols-4 gap-6">
      <Card className="flex w-full items-center justify-center rounded-[16px] !bg-primaryBackground">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-8">
            <Image
              src={"/Images/Ok.svg"}
              width={40}
              quality={100}
              height={40}
              alt=""
            />
            <h1 className=" text-3xl font-medium tabular-nums">
              {cardsValues.availableOrdersCount}
            </h1>
          </div>

          <h6 className=" w-full text-right text-2xl text-secondaryText">
            Available
          </h6>
        </div>
      </Card>
      <Card className="flex w-full items-center justify-center rounded-[16px] !bg-primaryBackground">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-8">
            <Image
              src={"/Images/Refresh.svg"}
              width={40}
              quality={100}
              height={40}
              alt=""
            />
            <h1 className=" text-3xl font-medium tabular-nums">
              {cardsValues.completedOrdersCount}
            </h1>
          </div>

          <h6 className=" w-full text-right text-2xl text-secondaryText">
            Completed
          </h6>
        </div>
      </Card>
      <Card className="flex w-full items-center justify-center rounded-[16px] !bg-primaryBackground">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-8">
            <Image
              src={"/Images/call.svg"}
              width={40}
              quality={100}
              height={40}
              alt=""
            />
            <h1 className=" text-3xl font-medium tabular-nums">
              {cardsValues.assignedOrdersCount}
            </h1>
          </div>

          <h6 className=" w-full text-right text-2xl text-secondaryText">
            Assigned
          </h6>
        </div>
      </Card>
      <Card className="flex w-full items-center justify-center rounded-[16px] !bg-primaryBackground">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-8">
            <Image
              src={"/Images/cancel.svg"}
              width={40}
              quality={100}
              height={40}
              alt=""
            />
            <h1 className=" text-3xl font-medium tabular-nums">
              {cardsValues.assignedOrdersCount}
            </h1>
          </div>

          <h6 className=" w-full text-right text-2xl text-secondaryText">
            Failed
          </h6>
        </div>
      </Card>
    </div>
  );
}
