import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export function TableSkeleton() {
  return (
    <div className="h-full w-full">
      <Skeleton className="h-[40px] w-full rounded-xl" />
      <div className="w-full h-full grid-rows-10 grid grid-cols-6 gap-1 my-1">
        {Array.from({ length: 48 }).map((item) => (
          <Skeleton color="#40b896" className="h-10 w-full text-[#40b896]" />
        ))}
      </div>
    </div>
  );
}
