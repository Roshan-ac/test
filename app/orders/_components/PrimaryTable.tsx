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

export function PrimaryTable() {
  return (
    <ScrollArea className="relative h-[60vh] w-max rounded-md">
      <Table>
        <TableHeader className=" dark:hover:bg-hoverColor !sticky left-0 top-0 w-full">
          <TableRow className="bg-tertiaryBackground">
            <TableHead className="w-max">Order Date</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>City</TableHead>
            <TableHead className="text-right">Type</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="w-full">
          {invoices.map((invoice) => (
            <TableRow
              className=" border-tableSeperator dark:hover:bg-hoverColor cursor-pointer border hover:text-black"
              key={invoice.order}
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
              <TableCell className="border-r-tableSeperator border-r">
                <span className="h-max w-max bg-purple-600 p-2 px-4">
                  {invoice.type}
                </span>
              </TableCell>
              <TableCell className=" font-medium">
                <span
                  className={`inline-block h-max min-w-full  ${
                    invoice.status == "Generated"
                      ? "bg-white"
                      : invoice.status == "Cancelled"
                        ? "bg-[#FFA0A0]"
                        : invoice.status == "Failed"
                          ? "bg-[#F64848]"
                          : invoice.status == "Assigned"
                            ? "bg-[#FF974A]"
                            : invoice.status == "Completed"
                              ? "bg-[#82C43C]"
                              : invoice.status == "Out For Pickup" &&
                                "bg-[#92B7FF]"
                  } p-2 px-4 text-black  `}
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
