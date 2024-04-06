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
  pincodes: number;
  areaCovered: number;
};
export function ProgressSection({ cardsValues }: { cardsValues: cardData }) {
  return (
    <div className="space-y-4">
      <Card className="flex h-max py-8 w-full items-center justify-center rounded-[16px] !bg-primaryBackground">
        <div className="flex space-x-10">
          <div>
            <Image
              src={"/Images/Return.svg"}
              width={60}
              quality={200}
              height={60}
              alt=""
            />
          </div>
          <div className="space-y-4 py-1">
            <h1 className=" text-5xl font-medium">
              {cardsValues.pincodes}
            </h1>
            <h6 className=" text-xl text-secondaryText">Pincodes</h6>
          </div>
        </div>
      </Card>
      <Card className="flex w-full py-8 items-center justify-center rounded-[16px] !bg-primaryBackground">
        <div className="flex space-x-10">
          <div>
            <Image
              src={"/Images/Clock.svg"}
              width={60}
              quality={200}
              height={60}
              alt=""
            />
          </div>
          <div className="space-y-4 py-1">
            <h1 className=" text-5xl font-medium">
              {cardsValues.areaCovered}
            </h1>
            <h6 className=" text-xl text-secondaryText">Pending</h6>
          </div>
        </div>
      </Card>
    </div>
  );
}
