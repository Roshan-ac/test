import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { flexRender, type Table as TanstackTable } from "@tanstack/react-table";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { parseISO, format } from "date-fns";
import { cn } from "@/lib/utils";
// import { PrimaryPagination } from "./primaryPagination";
import { toast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import Image from "next/image";
import { VendorPayementsInterface } from "./VendorPayment";
import { PrimaryPagination } from "./primaryPagination";
interface DataTableProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The table instance returned from useDataTable hook with pagination, sorting, filtering, etc.
   * @type TanstackTable<TData>
   */
  table: TanstackTable<TData>;
  /**
   * The floating bar to render at the bottom of the table on row selection.
   * @default null
   * @type React.ReactNode | null
   * @example floatingBar={<TasksTableFloatingBar table={table} />}
   */
  floatingBar?: React.ReactNode | null;
}
export function PrimaryTable<TData, TValue>({
  table,
}: DataTableProps<TData, TValue>) {
  const [viewImage, setViewImage] = useState<{
    state: boolean;
    src: string;
  }>({
    state: false,
    src: "",
  });
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
    <div className={cn("w-full space-y-2.5 overflow-hidden")}>
      {viewImage.state && viewImage.src !== "" && (
        <Card className=" absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black">
          <X
            onClick={() => {
              setViewImage({ state: false, src: "" });
            }}
            className=" fixed  right-8 top-8 z-50 cursor-pointer text-white hover:text-red-400"
          />
          <div className=" aspect-square h-full w-1/2 rounded-md p-1 ">
            <Image
              src={viewImage.src}
              alt="Self photo"
              height={100}
              width={100}
              className="m-auto aspect-square h-full w-full object-contain p-2"
            />
          </div>
        </Card>
      )}
      <div className="rounded-md">
        <Table>
          <TableHeader className=" !sticky left-0  top-0 z-[1] w-full dark:hover:bg-hoverColor">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-tertiaryBackground ">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table?.getRowModel().rows?.length ? (
              table?.getRowModel().rows.map((row: any, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={`group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      className="!w-max truncate text-nowrap"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-24 text-center"
                >
                  No Records Found !
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col gap-2.5">
        <PrimaryPagination table={table} />
      </div>
    </div>
  );
}

export function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
