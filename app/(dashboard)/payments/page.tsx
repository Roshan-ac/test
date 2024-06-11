import React, { use } from "react";
import VendorPayment from "./_components/VendorPayment";
import { UserType, getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import PageNotAccessible from "@/components/Internals/PageNotAccessible";

const page = async () => {
  const user: UserType = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }
  if (user.role === "Admin" || user.role === "Sales") {
    return (
      <div className="h-full w-full ">
        <VendorPayment />
      </div>
    );
  } else {
    return <PageNotAccessible />;
  }
};

export default page;
