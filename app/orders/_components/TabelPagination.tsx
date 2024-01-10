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

export function TabelPagination() {
  return (
    <Pagination className=" mx-0 w-max px-4 pt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            className=" bg-hoverColor h-8 text-black  !rounded-none !dark:hover:bg-hoverColor"
            href="#"
          >
            <ChevronLeft size={18} />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className=" bg-hoverColor h-8  text-black !rounded-none !dark:hover:bg-hoverColor"
            href="#"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className=" bg-hoverColor h-8  !rounded-none text-black !dark:hover:bg-hoverColor"
            href="#"
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className=" bg-hoverColor h-8  !rounded-none text-black  !dark:hover:bg-hoverColor"
            href="#"
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className=" bg-hoverColor h-8  !rounded-none text-black !dark:hover:bg-hoverColor"
            href="#"
          >
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className=" bg-hoverColor h-8  !rounded-none text-black !dark:hover:bg-hoverColor"
            href="#"
          >
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className=" bg-hoverColor h-8 !rounded-none text-black !dark:hover:bg-hoverColor"
            href="#"
          >
            <ChevronRight size={18} />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
