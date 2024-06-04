import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Date } from "./PrimaryTable";
import { ColumnDef } from "@tanstack/react-table";

export function getVendorTableColumns(): ColumnDef<any>[] {
  return [
    {
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Vendor Id" />
      ),
      cell: ({ row }) => <div className="flex space-x-2">
        <span className="max-w-[31.25rem] truncate font-medium">
          {row.getValue("id")}
        </span>
      </div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Vendor Name" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="w-[10.25rem] truncate font-medium">
              {row.getValue("name")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "phone",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Contact" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex w-[6.25rem] items-center">
            <span className="capitalize">{row.getValue("phone")}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "city",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="City" />
      ),
      cell: ({ row }) => (
        <div className="flex w-[5rem] items-start">
          <span
            className={`inline-block h-max min-w-full rounded-[18px] p-1 text-start text-xs !text-white opacity-90`}
          >
            {row.getValue("city") ?? 'empty'}
          </span>
        </div>
      ),
    },    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="email" />
      ),
      cell: ({ row }) => (
        <div className="flex w-[13rem] items-start">
          <span
            className={`inline-block h-max min-w-full rounded-[18px] p-1 text-left text-xs !text-white opacity-90`}
          >
            {row.getValue("email") ?? 'empty'}
          </span>
        </div>
      ),
    },

    {
      accessorKey: "applicationStatus",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = row?.getValue('applicationStatus')
        return (
          <span
            className={`inline-block h-max min-w-[100px] rounded-[18px] text-sm px-3 text-center ${status == '1' ? '!bg-[#82C43C]' : status == '0' ? 'bg-[#B5B5BE]' : 'bg-[#FC5A5A]'}
            p-1 px-2 text-black  `
            }
          >
            {status === "0" && "Applied"}
            {status === "1" && "Live"}
            {status === "-1" && "Dismissed"}
          </span>
        );
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
  ];
}