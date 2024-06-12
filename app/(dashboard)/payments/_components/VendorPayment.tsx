"use client";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { getVendorTableColumns } from "../../vendors/_components/vendorTableColumns";
import { usePaymentsTable } from "@/hooks/use-payments-tables";
import ContainerTable from "./ContainerTable";
import { PrimaryTable } from "./PrimaryTable";
import { DataTableSkeleton } from "@/components/data-table-skeleton";
import { getPaymentTableColumns } from "./PaymentsTableColumn";

// export interface VendorPaymentInterface<TData, TValue> {
//   id: number;
//   vendorId: number;
//   amount: number;
//   vendorname: string;
//   paymentDate: string;
//   screenshot: string;
//   isApproved: 0 | 1;
// }

export interface VendorPayementsInterface<TData, TValue> {
  success: false;
  payments: TData[];
  message: string;
}

const VendorPayment = () => {
  const columns = useMemo(() => getPaymentTableColumns(), []);
  const { data, table } = usePaymentsTable({
    columns,
  });
 
  return (
    <div className="my-2  space-y-6 p-4 px-8">
      <div className="w-full rounded-[12px]  bg-primaryBackground">
        <h4 className=" px-4 py-2 text-lg font-semibold tracking-wide">
          All Payements
        </h4>
        {data && table ? (
          <PrimaryTable table={table} />
        ) : (
          <DataTableSkeleton
            columnCount={5}
            searchableColumnCount={1}
            filterableColumnCount={2}
            cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
            shrinkZero
          />
        )}
      </div>
    </div>
  );
};

export default VendorPayment;
