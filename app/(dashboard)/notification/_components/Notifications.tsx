import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const Notifications = () => {
  return (
    <div className="h-full px-4 my-2 space-y-2">
      <h4 className=" p-3 px-4 text-lg font-semibold tracking-wide">
      Push  Notifications
      </h4>
      <ScrollArea className="relative h-full w-full rounded-2xl">
        <div className="gap-3 px-4 grid grid-cols-2">
          {Array.from({ length: 12 }).map((item, ind) => (
            <div
              key={ind}
              className=" flex w-full items-center justify-between space-x-4 rounded-lg bg-hoverColor p-2 px-3"
            >
              <h6 className="opacity-60 truncate text-black">
                {ind+1}.
              </h6>
              <Button className=" m-auto h-8 w-1/4 !bg-orange-300 !text-black !text-opacity-90">
                Notify
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Notifications;
