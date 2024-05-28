"use client";
import React from "react";
import {
  BadgeCent,
  BadgeDollarSign,
  Bell,
  Contact,
  LandPlot,
  LayoutDashboard,
  Luggage,
  ShieldX,
  Smartphone,
  UserPlus,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideMenus = () => {
  const pathname = usePathname();
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="w-full space-y-6 py-6">
      <Link
        href={"/dashboard"}
        scroll={false}
        className={`${
          pathname == "/dashboard"
            ? "font-bold"
            : "font-normal text-secondaryText"
        } group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:bg-tertiaryBackground hover:font-bold hover:text-primaryText`}
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
        onClick={() => scrollToTop}
        scroll={false}
        className={`${
          pathname == "/orders" ? "font-bold" : "font-normal text-secondaryText"
        } group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:bg-tertiaryBackground hover:font-bold hover:text-primaryText`}
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
        scroll={false}
        className={`${
          pathname == "/leads" ? "font-bold" : "font-normal text-secondaryText"
        } group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:bg-tertiaryBackground hover:font-bold hover:text-primaryText`}
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
        scroll={false}
        className={`${
          pathname == "/failed" ? "font-bold" : "font-normal text-secondaryText"
        } group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:bg-tertiaryBackground hover:font-bold hover:text-primaryText`}
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
            : "font-normal text-secondaryText"
        } group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:bg-tertiaryBackground hover:font-bold hover:text-primaryText`}
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
            : "font-normal text-secondaryText"
        } group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:bg-tertiaryBackground hover:font-bold hover:text-primaryText`}
      >
        <span
          className={`${
            pathname == "/payments" ? "bg-[#82C43C]" : " bg-transparent"
          } h-[32px] w-[3px] rounded-[0px_100px_100px_0px] group-hover:bg-[#82C43C] `}
        ></span>
        <BadgeCent />
        <span>Payments</span>
      </Link>
      <Link
        href={"/area"}
        className={`${
          pathname == "/area" ? "font-bold" : "font-normal text-secondaryText"
        } group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:bg-tertiaryBackground hover:font-bold hover:text-primaryText`}
      >
        <span
          className={`${
            pathname == "/area" ? "bg-[#82C43C]" : " bg-transparent"
          } h-[32px] w-[3px] rounded-[0px_100px_100px_0px] group-hover:bg-[#82C43C] `}
        ></span>
        <LandPlot />
        <span>Area</span>
      </Link>
      <Link
        href={"/products"}
        className={`${
          pathname == "/products"
            ? "font-bold "
            : "font-normal text-secondaryText"
        } group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:bg-tertiaryBackground hover:font-bold hover:text-primaryText`}
      >
        <span
          className={`${
            pathname == "/products" ? "bg-[#82C43C]" : " bg-transparent"
          } h-[32px] w-[3px] rounded-[0px_100px_100px_0px] group-hover:bg-[#82C43C] `}
        ></span>
        <Smartphone />
        <span>Products</span>
      </Link>
      <Link
        href={"/contact"}
        className={`${
          pathname == "/contact"
            ? "font-bold"
            : "font-normal text-secondaryText"
        } group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:bg-tertiaryBackground hover:font-bold hover:text-primaryText`}
      >
        <span
          className={`${
            pathname == "/contact" ? "bg-[#82C43C]" : " bg-transparent"
          } h-[32px] w-[3px] rounded-[0px_100px_100px_0px] group-hover:bg-[#82C43C] `}
        ></span>
        <Contact />
        <span>Contact</span>
      </Link>
      <Link
        href={"/notification"}
        className={`${
          pathname == "/notification"
            ? "font-bold"
            : "font-normal text-secondaryText"
        } group flex cursor-pointer items-center gap-4 py-1 transition-all duration-500 ease-in-out hover:bg-tertiaryBackground hover:font-bold hover:text-primaryText`}
      >
        <span
          className={`${
            pathname == "/notification" ? "bg-[#82C43C]" : " bg-transparent"
          } h-[32px] w-[3px] rounded-[0px_100px_100px_0px] group-hover:bg-[#82C43C] `}
        ></span>
        <Bell />
        <span>Push Notification</span>
      </Link>
    </div>
  );
};

export default SideMenus;
