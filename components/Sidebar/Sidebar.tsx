import React from "react";
import SideMenus from "./_components/SideMenus";

const Sidebar = () => {
  return (
    <div className="bg-primaryBackground text-primaryText border-t-tertiaryBackground fixed w-[15%]  left-0 top-[50px] h-screen border-t-2">
      <SideMenus />
    </div>
  );
};

export default Sidebar;
