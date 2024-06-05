import React from "react";
import SideMenus from "./_components/SideMenus";
import { ScrollArea } from "../ui/scroll-area";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-[50px] border-r-tertiaryBackground border-r-2 h-max w-[18%] bg-primaryBackground text-primaryText">
      <ScrollArea  className=" !scroll-w-0 relative h-screen pb-20 w-full rounded-md">
        <SideMenus />
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
