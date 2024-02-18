import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabelPagination } from "./TabelPagination";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Dispatch, SetStateAction } from "react";

type DataType = {
  order: string;
  model: string;
  city: string;
  type: string;
  status:
    | "Generated"
    | "Cancelled"
    | "Failed"
    | "Out For Pickup"
    | "Assigned"
    | "Completed";
}[];

const invoices: DataType = [
  {
    order: "2023-12-29 11:06:32 am",
    model: "OnePlus 9 Pro 5G 128/8",
    city: "Pune",
    type: "Phone",
    status: "Generated",
  },
  {
    order: "2023-12-29 11:06:32 am",
    model: "OnePlus 9 Pro 5G 128/8",
    city: "Pune",
    type: "Phone",
    status: "Assigned",
  },
  {
    order: "2023-12-29 11:06:32 am",
    model: "OnePlus 9 Pro 5G 128/8",
    city: "Pune",
    type: "Phone",
    status: "Cancelled",
  },
  {
    order: "2023-12-29 11:06:32 am",
    model: "OnePlus 9 Pro 5G 128/8",
    city: "Pune",
    type: "Phone",
    status: "Completed",
  },
  {
    order: "2023-12-29 11:06:32 am",
    model: "OnePlus 9 Pro 5G 128/8",
    city: "Pune",
    type: "Phone",
    status: "Failed",
  },
  {
    order: "2023-12-29 11:06:32 am",
    model: "OnePlus 9 Pro 5G 128/8",
    city: "Pune",
    type: "Phone",
    status: "Out For Pickup",
  },
  {
    order: "2023-12-29 11:06:32 am",
    model: "OnePlus 9 Pro 5G 128/8",
    city: "Pune",
    type: "Phone",
    status: "Failed",
  },
];

export function PrimaryTable({setIsOpen}:{setIsOpen:Dispatch<SetStateAction<boolean>>}) {
  return (
    <ScrollArea className="relative h-[70vh] w-full rounded-md">
      <Table>
        <TableHeader className=" dark:hover:bg-hoverColor  !sticky left-0 top-0 w-full">
          <TableRow className="bg-tertiaryBackground ">
            <TableHead className="w-max">Order Date</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>City</TableHead>
            <TableHead className="text-center">Type</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="w-full">
          {invoices.map((invoice,index) => (
            <TableRow
            onClick={()=>{
              setIsOpen(prev=>!prev)
            }}
              className="border-tableSeperator transition-all duration-300 ease-in-out dark:hover:bg-hoverColor dark:hover:bg-opacity-60 text-sm cursor-pointer border hover:text-black group"
              key={index}
            >
              <TableCell className="border-r-tableSeperator border-r">
                {invoice.order}
              </TableCell>
              <TableCell className="border-r-tableSeperator border-r">
                {invoice.model}
              </TableCell>
              <TableCell className="border-r-tableSeperator border-r">
                {invoice.city}
              </TableCell>
              <TableCell className="border-r-tableSeperator flex justify-center  border-r">
                <span className="h-max w-max !text-white rounded-[18px] bg-purple-600 p-1 px-4 text-center">
                  {invoice.type}
                </span>
              </TableCell>
              <TableCell className="">
                <span
                  className={`inline-block rounded-[18px] px-4 text-center h-max min-w-[100px]  ${
                    invoice.status == "Generated"
                      ? "bg-white"
                      : invoice.status == "Cancelled"
                        ? "bg-[#FFA0A0]"
                        : invoice.status == "Failed"
                          ? "bg-[#F64848] text-white"
                          : invoice.status == "Assigned"
                            ? "bg-[#FF974A]"
                            : invoice.status == "Completed"
                              ? "bg-[#82C43C]"
                              : invoice.status == "Out For Pickup" &&
                                "bg-[#92B7FF]"
                  } p-1 px-2 text-black  `}
                >
                  {invoice.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="border-t-tableSeperator  sticky bottom-0 flex w-full flex-col items-end border-t bg-primaryBackground">
        <TabelPagination />
      </div>
    </ScrollArea>
  );
}
