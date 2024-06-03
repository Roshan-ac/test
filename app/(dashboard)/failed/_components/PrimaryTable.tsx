import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Dispatch, SetStateAction } from "react";

import { parseISO, format } from "date-fns";
import { deviceType } from "@/interfaces";
import { flexRender, type Table as TanstackTable } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { PrimaryPagination } from "./pagination/primaryPagination";
interface DataTableProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The table instance returned from useDataTable hook with pagination, sorting, filtering, etc.
   * @type TanstackTable<TData>
   */
  table: TanstackTable<TData>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  SetSelectedRow: Dispatch<
    SetStateAction<{ lead: string; devicetype: deviceType }>
  >;
  selectedRow: { lead: string; devicetype: deviceType };

  /**
   * The floating bar to render at the bottom of the table on row selection.
   * @default null
   * @type React.ReactNode | null
   * @example floatingBar={<TasksTableFloatingBar table={table} />}
   */
  floatingBar?: React.ReactNode | null;
}
export function PrimaryTable<TData, TValue>({
  setIsOpen,
  SetSelectedRow,
  table,
  selectedRow,
}: DataTableProps<TData, TValue>) {
  return (
    <ScrollArea className=" relative h-max w-full rounded-md">
      <div className={cn("w-full space-y-2.5 overflow-auto")}>
        <div className="rounded-md">
          <Table>
            <TableHeader className=" !sticky left-0  top-0 z-[1] w-full dark:hover:bg-hoverColor">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="bg-tertiaryBackground "
                >
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
                table?.getRowModel().rows.map((row: any) => (
                  <TableRow
                    key={row.id}
                    onClick={() => {
                      SetSelectedRow({
                        lead: `${row.original.id}`,
                        devicetype: row.original.devicetype,
                      });
                      setIsOpen((prev) => !prev);
                    }}
                    data-state={row.getIsSelected() && "selected"}
                    className={` ${selectedRow?.lead === row.original.id ? " bg-hoverColor text-black" : ""} group cursor-pointer border border-tableSeperator text-sm transition-all duration-300 ease-in-out hover:text-black dark:hover:bg-hoverColor dark:hover:bg-opacity-60`}
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
                    No results.
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
    </ScrollArea>
  );
}

export function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  // Extract components
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hour = String(date.getUTCHours()).padStart(2, "0");
  const minute = String(date.getUTCMinutes()).padStart(2, "0");
  const adjustedHour = (date.getUTCHours() + 5) % 24;
  const adjustedMinute = String((date.getUTCMinutes() + 30) % 60).padStart(
    2,
    "0",
  );
  // Construct the formatted string
  const formattedDateTime = `${year}-${month}-${day} - ${adjustedHour}:${adjustedMinute}`;
  return <time dateTime={dateString}>{formattedDateTime}</time>;
}
