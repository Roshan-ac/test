"use client";
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
import { TableSkeleton } from "@/components/Internals/tableSkeleton";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { DataTableSkeleton } from "@/components/data-table-skeleton";
interface VendorPaymentInterface {
  id: number;
  vendorId: number;
  amount: number;
  vendorname: string;
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

      const data = await res.json();
      setVendorPayment(data.payments);
      setIsLoading(false);
    }

    if (!vendorPayment) {
      fetchData();
    }
  }, [vendorPayment]);
  console.log(vendorPayment)
  const updateVendorPayment = async (
    paymentId: number,
    vendorid: number,
    action: "approve" | "reject",
  ) => {
    setIsLoading(true);
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
      router.refresh();
    }
    setIsLoading(false);
  };

  return (
    <div className="p-4 my-2">
      {
        vendorPayment ? (<Table className="text-white">
          <TableHeader className=" !sticky left-0 top-0  z-[1] w-full !rounded-md dark:hover:bg-hoverColor">
            <TableRow className="bg-tertiaryBackground">
              <TableHead className="w-max">Vendor Name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Screenshot</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          {
            vendorPayment.map((item) => (
              <TableBody key={item.id} className="">
                <TableCell> {item.vendorname} </TableCell>
                <TableCell> {item.amount} </TableCell>
                <TableCell>
                  <PhotoProvider>
                    <PhotoView src={item.screenshot}>
                      <span className=" cursor-pointer text-sm font-semibold uppercase underline">
                        view
                      </span>
                    </PhotoView>
                  </PhotoProvider>
                </TableCell>
                <TableCell className="flex gap-2 text-black">
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
                        <AlertDialogCancel className="text-white">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() =>
                            updateVendorPayment(item.id, item.vendorId, "approve")
                          }
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className=" !h-max rounded-none !bg-[#82C43C] px-8 !text-white">
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
                        <AlertDialogCancel className="text-white">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() =>
                            updateVendorPayment(item.id, item.vendorId, "reject")
                          }
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableBody>
            ))
          }
          {vendorPayment?.length < 1 && (
            <div className="">
              <p className=" py-3 text-xl">No Search Results Found.</p>
            </div>
          )}
        </Table>) : (
          <DataTableSkeleton
            columnCount={5}
            searchableColumnCount={1}
            filterableColumnCount={2}
            cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
            shrinkZero
          />
        )
      }

    </div>
  );
};

export default VendorPayment;
