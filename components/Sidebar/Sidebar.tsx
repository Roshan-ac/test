import React from "react";
import SideMenus from "./_components/SideMenus";

const Sidebar = () => {
  return (
    <div className="bg-primaryBackground text-primaryText border-t-tertiaryBackground fixed  left-0 top-[70px] h-screen w-[250px] border-t-2">
      <SideMenus />
    </div>
  );
};

export default Sidebar;
