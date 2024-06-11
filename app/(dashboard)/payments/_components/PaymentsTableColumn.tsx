import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Date } from "./PrimaryTable";
import { ColumnDef } from "@tanstack/react-table";

export function getPaymentTableColumns(): ColumnDef<any>[] {
  return [
    {
      accessorKey: "vendorname",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Vendor Name" />
      ),
      cell: ({ row }) => (
        <div className="flex space-x-2">
          <span className="max-w-[31.25rem] truncate font-medium">
            {row.getValue("vendorname")}
          </span>
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Amount" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="w-[10.25rem] truncate font-medium">
              {row.getValue("amount")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "screenshot",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="screenshot" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex w-[6.25rem] items-center">
            <span>{row.getValue("screenshot")}</span>
          </div>
        );
      },
    },
  ];
}
