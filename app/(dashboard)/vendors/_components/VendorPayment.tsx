import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";

interface VendorPaymentInterface {
  id: number;
  vendorId: number;
  amount: number;
  paymentDate: string;
  screenshot: string;
  isApproved: 0 | 1;
}

const VendorPayment = () => {
  const [vendorPayment, setVendorPayment] =
    useState<VendorPaymentInterface[]>();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch("/api/getvendorpayments", {
        method: "GET",
        
      });

      if (!res.ok) {
        console.log("error");
      }

      const data = await res.json();
      console.log(data);
      setVendorPayment(data.payments);
      setIsLoading(false);
    }

    if (!vendorPayment) {
      fetchData();
    }
  }, [vendorPayment]);

  const updateVendorPayment = async (
    paymentId: number,
    vendorid: number,
    action: "approve" | "reject",
  ) => {
    console.log(
      JSON.stringify({
        id: paymentId?.toString(),
        vendorid: vendorid,
        action: action,
      }),
    );
    setIsLoading(true);
    const res = await fetch("/api/updatevendorpayment", {
      method: "POST",
      body: JSON.stringify({
        id: paymentId?.toString(),
        vendorid: vendorid,
        action: action,
      }),
    });

    if (!res.ok) {
      console.log("error");
    }

    const data = await res.json();
    console.log(data);
    if ((await data.success) === true) {
      toast({
        title: "Success",
        description: (
          <p className=" text-green-500">Vendor Payements Status Changed</p>
        ),
      });
      router.refresh();
    }
    setIsLoading(false);
  };

  // console.log(vendorPayment);
  if (isLoading && !vendorPayment) {
    return (
      <Table className="animate-pulse">
        <TableRow className="bg-tertiaryBackground">
          <TableHead className="h-[36.5px] w-max"></TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
        </TableRow>
        <TableBody className="h-[46.5px] bg-tertiaryBackground">
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableBody>
      </Table>
    );
  } else if (vendorPayment)
    return (
      <Table className="text-white">
        <TableRow className="bg-tertiaryBackground">
          <TableHead className="w-max">Vendor Name</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Screenshot</TableHead>
          <TableHead></TableHead>
        </TableRow>
        {vendorPayment.map((item) => (
          <TableBody key={item.id}>
            <TableCell> {item.vendorId} </TableCell>
            <TableCell> {item.amount} </TableCell>
            <TableCell>
              <button>view</button>
            </TableCell>
            <TableCell className="flex gap-2 text-black">
              <button
                className="bg-[#82C43C] px-3 py-1"
                onClick={() =>
                  updateVendorPayment(item.id, item.vendorId, "approve")
                }
              >
                Approve
              </button>
              <button
                className="bg-[#FC5A5A] px-3 py-1"
                onClick={() =>
                  updateVendorPayment(item.id, item.vendorId, "reject")
                }
              >
                Reject
              </button>
            </TableCell>
          </TableBody>
        ))}
      </Table>
    );
};

export default VendorPayment;
