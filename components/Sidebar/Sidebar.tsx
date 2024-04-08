import React from "react";
import SideMenus from "./_components/SideMenus";
import { ScrollArea } from "../ui/scroll-area";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-[50px] h-max w-[18%] border-t-2 border-t-tertiaryBackground bg-primaryBackground text-primaryText">
      <ScrollArea  className=" !scroll-w-0 relative h-screen pb-20 w-full rounded-md">
        <SideMenus />
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
