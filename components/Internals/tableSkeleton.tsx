import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export function TableSkeleton({ skeleton }: { skeleton: number }) {
  return (
    <div>
      {Array.from({ length: 20 }).map((item, index) => (
        <TableRow
          className=" !gap-2 border !border-tableSeperator text-sm"
          key={index}
        >
          {Array.from({ length: skeleton }).map((item, index) => (
            <TableCell
            key={index}
              className={`!h-8 w-1/${skeleton} animate-pulse border-r !border-r-tableSeperator !bg-tertiaryBackground `}
            ></TableCell>
          ))}
        </TableRow>
      ))}
    </div>
  );
}
