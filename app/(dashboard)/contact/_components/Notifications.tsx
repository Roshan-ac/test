import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const Notifications = () => {
  return (
    <div className="h-full px-2">
      <h4 className=" p-3 px-4 text-lg font-semibold tracking-wide">
        Notifications
      </h4>
      <ScrollArea className="relative border-t h-[70vh] py-3 w-[80%] rounded-2xl">
        <div className="gap-3 space-y-2 px-4">
          {Array.from({ length: 12 }).map((item, ind) => (
            <div
              key={ind}
              className=" flex w-full items-center justify-between space-x-4 rounded-lg bg-tertiaryBackground p-2 px-3"
            >
              <h6 className="opacity-60 truncate">
                Lorem ipsum dolor. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit.
              </h6>
              <Button className=" m-auto h-8 w-1/4 !bg-blue-600 !text-white !text-opacity-90">
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
