"use client";
import React from "react";
import {
  BadgeCent,
  BadgeDollarSign,
  LayoutDashboard,
  Luggage,
  ShieldX,
  UserPlus,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideMenus = () => {
  const pathname = usePathname();
  return (
    <div className="w-full space-y-6 py-6">
      <Link
        href={"/dashboard"}
        className={`${
          pathname == "/dashboard"
            ? "font-bold"
            : "text-secondaryText font-normal"
        } hover:bg-tertiaryBackground hover:text-primaryText group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:font-bold`}
      >
        <span
          className={`${
            pathname == "/dashboard" ? "bg-[#82C43C]" : " bg-transparent"
          } h-[32px] w-[3px] rounded-[0px_100px_100px_0px] group-hover:bg-[#82C43C] `}
        ></span>
        <LayoutDashboard />
        <span>Dashboard</span>
      </Link>
      <Link
        href={"/orders"}
        className={`${
          pathname == "/orders" ? "font-bold" : "text-secondaryText font-normal"
        } hover:bg-tertiaryBackground hover:text-primaryText group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:font-bold`}
      >
        <span
          className={`${
            pathname == "/orders" ? "bg-[#82C43C]" : " bg-transparent"
          } h-[32px] w-[3px] rounded-[0px_100px_100px_0px] group-hover:bg-[#82C43C] `}
        ></span>
        <BadgeDollarSign />
        <span>Orders</span>
      </Link>
      <Link
        href={"/leads"}
        className={`${
          pathname == "/leads" ? "font-bold" : "text-secondaryText font-normal"
        } hover:bg-tertiaryBackground hover:text-primaryText group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:font-bold`}
      >
        <span
          className={`${
            pathname == "/leads" ? "bg-[#82C43C]" : " bg-transparent"
          } h-[32px] w-[3px] rounded-[0px_100px_100px_0px] group-hover:bg-[#82C43C] `}
        ></span>
        <UserPlus />
        <span>Leads</span>
      </Link>
      <Link
        href={"/failed"}
        className={`${
          pathname == "/failed" ? "font-bold" : "text-secondaryText font-normal"
        } hover:bg-tertiaryBackground hover:text-primaryText group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:font-bold`}
      >
        <span
          className={`${
            pathname == "/failed" ? "bg-[#82C43C]" : " bg-transparent"
          } h-[32px] w-[3px] rounded-[0px_100px_100px_0px] group-hover:bg-[#82C43C] `}
        ></span>
        <ShieldX />
        <span>Failed</span>
      </Link>
      <Link
        href={"/vendors"}
        className={`${
          pathname == "/vendors"
            ? "font-bold"
            : "text-secondaryText font-normal"
        } hover:bg-tertiaryBackground hover:text-primaryText group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:font-bold`}
      >
        <span
          className={`${
            pathname == "/vendors" ? "bg-[#82C43C]" : " bg-transparent"
          } h-[32px] w-[3px] rounded-[0px_100px_100px_0px] group-hover:bg-[#82C43C] `}
        ></span>
        <Luggage />
        <span>Vendors</span>
      </Link>
      <Link
        href={"/payments"}
        className={`${
          pathname == "/payments"
            ? "font-bold"
            : "text-secondaryText font-normal"
        } hover:bg-tertiaryBackground hover:text-primaryText group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:font-bold`}
      >
        <span
          className={`${
            pathname == "/payments" ? "bg-[#82C43C]" : " bg-transparent"
          } h-[32px] w-[3px] rounded-[0px_100px_100px_0px] group-hover:bg-[#82C43C] `}
        ></span>
        <BadgeCent />
        <span>Payments</span>
      </Link>
    </div>
  );
};

export default SideMenus;
