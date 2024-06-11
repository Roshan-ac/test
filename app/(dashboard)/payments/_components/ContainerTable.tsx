"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { DataTableSkeleton } from "@/components/data-table-skeleton";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const ContainerTable = () => {

  return (
    <div>
   

      {/* {vendorPayment ? (
      <Table className="text-white">
        <TableHeader className=" !sticky left-0 top-0  z-[1] w-full !rounded-md dark:hover:bg-hoverColor">
          <TableRow className="bg-tertiaryBackground">
            <TableHead className="w-max">Vendor Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Screenshot</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vendorPayment.map((item) => (
            <TableRow key={item.id}>
              <TableCell> {item.vendorname} </TableCell>
              <TableCell> {item.amount} </TableCell>
              <TableCell>
                <span
                  onClick={() => {
                    setViewImage({
                      state: true,
                      src: item.screenshot,
                    });
                  }}
                  className=" cursor-pointer text-sm font-semibold uppercase underline"
                >
                  view
                </span>
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
                          updateVendorPayment(
                            item.id,
                            item.vendorId,
                            "approve",
                          )
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
                          updateVendorPayment(
                            item.id,
                            item.vendorId,
                            "reject",
                          )
                        }
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {vendorPayment?.length < 1 && (
          <div className="">
            <p className=" py-3 text-xl">No Search Results Found.</p>
          </div>
        )}
      </Table>
    ) : (
      <DataTableSkeleton
        columnCount={5}
        searchableColumnCount={1}
        filterableColumnCount={2}
        cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
        shrinkZero
      />
    )} */}

    </div>
  );
};

export default ContainerTable;
