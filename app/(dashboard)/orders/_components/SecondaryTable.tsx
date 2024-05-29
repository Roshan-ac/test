import React, { Dispatch, SetStateAction } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { TabelPagination } from "@/components/Internals/TabelPagination";

type leadsData = {
  id: string;
  pickupdate: string;
  devicename: string;
  pickuptime: string;
  devicetype: string;
  status: string | null;
  assignedvendor: string;
};
const SecondaryTable = ({
  leads,
  currentPage,
  totalPage,
  setCurrentPage,
}: {
  leads: leadsData[];
  currentPage: number;
  totalPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <ScrollArea className="relative h-max w-full rounded-md">
      <Table>
        <TableHeader className=" !sticky  left-0 top-0 w-full dark:hover:bg-hoverColor">
          <TableRow className="bg-tertiaryBackground ">
            <TableHead className="w-max">Date</TableHead>
            <TableHead>Slot</TableHead>
            <TableHead>Model</TableHead>
            <TableHead className="text-center">Lead Id</TableHead>
            <TableHead className="text-center">Type</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="w-full">
          {leads &&
            leads.map((invoice, index) => (
              <TableRow
                className="group border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60"
                key={index}
              >
                <TableCell className="!w-max border-r border-r-tableSeperator">
                  {invoice.pickupdate}
                </TableCell>
                <TableCell className="border-r border-r-tableSeperator">
                  {invoice.pickuptime}
                </TableCell>
                <TableCell className="max-w-[280px] overflow-hidden truncate border-r  border-r-tableSeperator">
                  {invoice.devicename}
                </TableCell>
                <TableCell className="border-r  border-r-tableSeperator">
                  {invoice.id}
                </TableCell>
                <TableCell className="border-r border-r-tableSeperator">
                  <span
                    className={`inline-block h-max min-w-full rounded-[18px] bg-purple-600 p-1 px-2 text-center !text-white opacity-90`}
                  >
                    {invoice.devicetype}
                  </span>
                </TableCell>
                <TableCell className="">
                  <span
                    className={`m-auto inline-block h-max min-w-max rounded-[18px] px-4 text-center opacity-90
                    
                    ${
                      invoice.status == null && invoice.assignedvendor !== null
                        ? "!bg-[#3495eb]"
                        : invoice.assignedvendor == null &&
                            invoice.status == null
                          ? "bg-[#ebd834]"
                          : invoice.status.startsWith("Cn-")
                            ? "!bg-[#c14646] text-white"
                            : invoice.status?.startsWith("F-") ||
                                invoice.status?.startsWith("FC-")
                              ? "!bg-[#F64848] text-white"
                              : invoice.status == "Assigned"
                                ? "!bg-[#FF974A]"
                                : invoice.status?.startsWith("C-")
                                  ? "!bg-[#82C43C]"
                                  : invoice.status.startsWith("V-") &&
                                    "!bg-[#3446eb] text-white"
                    } p-1 px-2 text-black  `}
                  >
                    {invoice.status == null && invoice.assignedvendor == null
                      ? "Generated"
                      : invoice.status == null &&
                          invoice.assignedvendor !== null
                        ? "Assigned to Vendor"
                        : invoice.status?.startsWith("Cn-")
                          ? invoice.status?.replace("Cn-", "")
                          : invoice.status?.startsWith("F-")
                            ? invoice.status?.replace("F-", "")
                            : invoice.status?.startsWith("C-")
                              ? "Completed"
                              : invoice.status.startsWith("V-")
                                ? "In Progress"
                                : invoice.status.startsWith("FC-")
                                  ? invoice.status.replace("FC-", "")
                                  : invoice.status?.split("-")[1]}
                  </span>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="sticky bottom-0 flex w-full flex-col border-t border-t-tableSeperator bg-primaryBackground">
        {leads.length !== 0 ? (
          // <TabelPagination
          //   tableType="Secondary"
          //   totalPage={totalPage}
          //   currentPage={currentPage}
          //   setCurrentPage={setCurrentPage}
          // />
          <></>
        ):(
          <div className=" p-4">No Records Found !</div>
        )}
      </div>
    </ScrollArea>
  );
};

export default SecondaryTable;
