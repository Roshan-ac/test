import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
const PaymentActions = ({ id, vendorId }: { id: number; vendorId: number }) => {
  
    const updateVendorPayment = async (
    paymentId: number,
    vendorid: number,
    action: "approve" | "reject",
  ) => {
    const res = await fetch("/api/updatevendorpayment", {
      method: "POST",
      body: JSON.stringify({
        id: paymentId?.toString(),
        vendorid: vendorid,
        action: action,
      }),
    });

    const data = await res.json();
    if ((await data.success) === true) {
      toast({
        title: "Success",
        description: (
          <p className=" text-green-500">Vendor Payements Status Changed</p>
        ),
      });
    }
  };
  return (
    <div className="flex items-center gap-3">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className=" !h-max rounded-none !bg-[#82C43C] px-8 !text-white">
            Approve
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-white">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => updateVendorPayment(id, vendorId, "approve")}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className=" !h-max rounded-none !bg-[#c4603c] px-8 !text-white">
            Reject
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-white">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => updateVendorPayment(id, vendorId, "reject")}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default PaymentActions;
