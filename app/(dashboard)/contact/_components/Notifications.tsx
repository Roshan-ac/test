import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const Notifications = () => {
  return (
    <ScrollArea className="relative h-[70vh] w-full rounded-md">
    <div className="p-4 h-full">
      <h4 className=" px-4 py-2 text-lg font-semibold tracking-wide">
        Notifications
      </h4>
      <div className="gap-3 p-4 grid grid-cols-3">
        {Array.from({ length: 12 }).map((item, ind) => (
          <div key={ind} className=" bg-tertiaryBackground p-2 px-3 space-y-2 rounded-lg">
            <h5>Title</h5>
            <h6>Lorem ipsum dolor.</h6>
            <Button className=" !text-white !bg-green-800 w-1/2 m-auto" >Notify</Button>
          </div>
        ))}
      </div>
    </div>
    </ScrollArea>
  );
};

export default Notifications;
