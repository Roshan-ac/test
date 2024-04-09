import * as React from "react";
import {
  Card,
} from "@/components/ui/card";
import Image from "next/image";
type cardData = {
  acceptedLeads: number;
  pendingLeads: number;
  rejectedLeads: number;
};
export function CardContainer({ cardsValues }: { cardsValues: cardData }) {
  return (
    <div className="grid h-[40vh] grid-cols-3 gap-6">
      <Card className="flex w-full items-center justify-center rounded-[16px] !bg-primaryBackground">
        <div className="flex space-x-10">
          <div>
            <Image
              src={"/Images/Cancel.svg"}
              width={60}
              quality={200}
              height={60}
              alt=""
            />
          </div>
          <div className="space-y-4 py-1">
            <h1 className=" text-5xl font-medium">
              {cardsValues.rejectedLeads}
            </h1>
            <h6 className=" text-xl text-secondaryText">Rejected</h6>
          </div>
        </div>
      </Card>
      <Card className="flex w-full items-center justify-center rounded-[16px] !bg-primaryBackground">
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
              {cardsValues.acceptedLeads}
            </h1>
            <h6 className=" text-xl text-secondaryText">Reversed</h6>
          </div>
        </div>
      </Card>
      <Card className="flex w-full items-center justify-center rounded-[16px] !bg-primaryBackground">
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
              {cardsValues.pendingLeads}
            </h1>
            <h6 className=" text-xl text-secondaryText">Pending</h6>
          </div>
        </div>
      </Card>
    </div>
  );
}
