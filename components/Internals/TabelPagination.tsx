import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function TabelPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination className=" mx-0 w-max px-4 pt-4">
      <PaginationContent>
        <PaginationLink
          className=" !dark:hover:bg-hoverColor  group !rounded-none bg-hoverColor text-black"
          href={``}
        >
          <ChevronLeft
            className=" !dark:hover:bg-hoverColor h-6 w-full !rounded-none text-black  group-hover:!text-hoverColor"
            size={18}
          />
        </PaginationLink>

        <PaginationLink
          className=" !dark:hover:bg-hoverColor  !rounded-none bg-hoverColor text-black"
          href="#"
        >
          1
        </PaginationLink>
        <PaginationLink
          className=" !dark:hover:bg-hoverColor  !rounded-none bg-hoverColor text-black"
          href="#"
        >
          2
        </PaginationLink>
        <PaginationLink
          className=" !dark:hover:bg-hoverColor  !rounded-none bg-hoverColor text-black"
          href="#"
        >
          3
        </PaginationLink>
        <PaginationLink
          className=" !dark:hover:bg-hoverColor  !rounded-none bg-hoverColor text-black"
          href="#"
        >
          4
        </PaginationLink>
        <PaginationLink
          className=" !dark:hover:bg-hoverColor group  !rounded-none bg-hoverColor text-black"
          href={`?page=${currentPage}`}
        >
          <ChevronRight
            className=" !dark:hover:bg-hoverColor h-6 w-full !rounded-none text-black group-hover:!text-hoverColor"
            size={18}
          />
        </PaginationLink>
      </PaginationContent>
    </Pagination>
  );
}
