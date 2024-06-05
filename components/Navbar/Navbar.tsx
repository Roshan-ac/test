import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import { UserAvatar } from "./_components/Avatar";
import { SearchBar } from "./_components/Searchbar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" bg-primaryBackground border-b-tertiaryBackground border-b-2 text-primaryText fixed top-0 z-40 flex h-[50px] w-full items-center">
      <div className="flex w-full items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Link href={'/'} className="w-[250px]">
            <Image
            priority
              src={"/Images/NavbarLogo.svg"}
              alt=""
              height={30}
              width={112}
            />
          </Link>
          <div>
            <SearchBar />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <span>+</span>
            <span>Add</span>
          </div>
          <Bell />
          {/* <div className="flex items-center gap-2">
            <UserAvatar />
            <ChevronDown className=" cursor-pointer" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
