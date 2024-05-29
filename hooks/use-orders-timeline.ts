"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import type { DataTableFilterField } from "@/types";
import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type PaginationState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";
import { z } from "zod";

import { useDebounce } from "@/hooks/use-debounce";
import { deviceType } from "@/interfaces";
import { InvoiceInterface } from "@/app/(dashboard)/orders/_components/BasePage";

interface UseDataTableProps<TData, TValue> {
  /**
   * The data for the table.
   * @default []
   * @type TData[]
   */

  /**
   * The columns of the table.
   * @default []
   * @type ColumnDef<TData, TValue>[]
   */
  columns: ColumnDef<TData, TValue>[];

  /**
   * The number of pages in the table.
   * @type number
   */

  /**
   * The default number of rows per page.
   * @default 10
   * @type number | undefined
   * @example 20
   */
  defaultPerPage?: number;

  /**
   * The default sort order.
   * @default undefined
   * @type `${Extract<keyof TData, string | number>}.${"asc" | "desc"}` | undefined
   * @example "createdAt.desc"
   */
  defaultSort?: `${Extract<keyof TData, string | number>}.${"asc" | "desc"}`;

  /**
   * Defines filter fields for the table. Supports both dynamic faceted filters and search filters.
   * - Faceted filters are rendered when `options` are provided for a filter field.
   * - Otherwise, search filters are rendered.
   *
   * The indie filter field `value` represents the corresponding column name in the database table.
   * @default []
   * @type { label: string, value: keyof TData, placeholder?: string, options?: { label: string, value: string, icon?: React.ComponentType<{ className?: string }> }[] }[]
   * @example
   * ```ts
   * // Render a search filter
   * const filterFields = [
   *   { label: "Title", value: "title", placeholder: "Search titles" }
   * ];
   * // Render a faceted filter
   * const filterFields = [
   *   {
   *     label: "Status",
   *     value: "status",
   *     options: [
   *       { label: "Todo", value: "todo" },
   *       { label: "In Progress", value: "in-progress" },
   *       { label: "Done", value: "done" },
   *       { label: "Canceled", value: "canceled" }
   *     ]
   *   }
   * ];
   * ```
   */

  /**
   * Enable notion like column filters.
   * Advanced filters and column filters cannot be used at the same time.
   * @default false
   * @type boolean
   */
  enableAdvancedFilter?: boolean;
}

const schema = z.object({
  page: z.coerce.number().default(1),
  per_page: z.coerce.number().optional(),
  sort: z.string().optional(),
});

export function useOrdersTimelineTableData<TData, TValue>({
  columns,
  defaultPerPage = 10,
  defaultSort,
  enableAdvancedFilter = false,
}: UseDataTableProps<TData, TValue>) {
  const router = useRouter();
  const pathname = usePathname();
  const [isData, setIsData] = React.useState(false);
  const searchParams = useSearchParams();
  // Search params
  const search = schema.parse(Object.fromEntries(searchParams));
  const page = search.page;
  const perPage = search.per_page ?? defaultPerPage;
  const sort = search.sort ?? defaultSort;
  const [column, order] = sort?.split(".") ?? [];

  // Create query string
  const createQueryString = React.useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams],
  );

  // Initial column filters

  // Table states
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  // Handle server-side pagination
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: page - 1,
      pageSize: perPage,
    });

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [data, setData] = React.useState<InvoiceInterface<TData, TValue>>();
  const [isUpdated, setIsUpdated] = React.useState<boolean>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [filterQueries, setFilterQueries] = React.useState<{
    search: string;
    city: string;
    status: string;
    fromDate: Date;
    toDate: Date;
    category: string;
  }>({
    search: "",
    city: "",
    status: "",
    fromDate: undefined,
    toDate: undefined,
    category: "",
  });
  const [currentOrderPage, setCurrentOrderPage] = React.useState<number>(1);
  const [currentLeadPage, setCurrentLeadPage] = React.useState<number>(1);
  const [isApplied, setIsApplied] = React.useState(false);
  const [SelectedRow, SetSelectedRow] = React.useState<{
    lead: string;
    devicetype: deviceType;
  }>();

  React.useEffect(() => {
    setData(undefined);
    setIsData(false);
    setIsLoading(true);
    (async function () {
      const res = await fetch(`/api/getallorders`, {
        method: "POST",
        body: JSON.stringify({
          orderPage: 1,
          leadPage: pageIndex + 1,
          search: filterQueries.search,
          city: filterQueries.city,
          status: filterQueries.status,
          fromDate: filterQueries.fromDate,
          toDate: filterQueries.toDate,
          category: filterQueries.category,
        }),
      });
      const data = await res.json();
      setData(data);
      setIsData(true);
      setIsLoading(false);
    })();
  }, [currentLeadPage, currentOrderPage, isUpdated, filterQueries, pageIndex]);

  React.useEffect(() => {
    router.push(
      `${pathname}?${createQueryString({
        page: pageIndex + 1,
        per_page: pageSize,
      })}`,
      {
        scroll: false,
      },
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex, pageSize]);

  // Handle server-side sorting
  const [sorting, setSorting] = React.useState<SortingState>([
    {
      id: column ?? "",
      desc: order === "desc",
    },
  ]);

  React.useEffect(() => {
    router.push(
      `${pathname}?${createQueryString({
        page,
        sort: sorting[0]?.id
          ? `${sorting[0]?.id}.${sorting[0]?.desc ? "desc" : "asc"}`
          : null,
      })}`,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting]);

  const [mounted, setMounted] = React.useState(false);

  const table = useReactTable({
    data: data?.leads.data,
    columns,
    pageCount: data?.leads.pagelimit,
    state: {
      pagination,
      sorting,
      columnVisibility,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
  });

  return {
    table,
    isData,
    data,
    currentLeadPage,
    currentOrderPage,
    setIsUpdated,
    isOpen,
    isUpdated,
    filterQueries,
    isApplied,
    setIsApplied,
    isLoading,
    setFilterQueries,
    SetSelectedRow,
    setCurrentOrderPage,
    setIsOpen,
    SelectedRow,
  };
}
