import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Date } from "./PrimaryTable";
import { ColumnDef } from "@tanstack/react-table";
import PaymentImageViewer from "./PaymentImageViewer";
import PaymentActions from "./PaymentActions";

export function getPaymentTableColumns(): ColumnDef<any>[] {
  return [
    {
      accessorKey: "vendorname",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Vendor Name" />
      ),
      cell: ({ row }) => (
        <div className="flex space-x-2">
          <span className="max-w-[20rem] truncate font-medium">
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
            <span className="w-[8rem] truncate font-medium">
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
      return <PaymentImageViewer src={row.getValue("screenshot")} />;
    },
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => {
      return <PaymentActions vendorId={row.original.vendorId} id={row.original.id} />;
    },
  },
    ];
}
