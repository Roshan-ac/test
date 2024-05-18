import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { returnPaginationRange } from "@/lib/utils/returnPaginationRange";
import { Dispatch, SetStateAction } from "react";

export function TabelPagination({
  currentPage,
  tableType,
  totalPage,
  setCurrentPage,
}: {
  currentPage: number;
  totalPage: number;
  tableType: "Primary" | "Secondary";
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) {

  const array = returnPaginationRange({
    totalPage: totalPage,
    page: currentPage,
    siblings: 1,
  });

  return (
    <Pagination className=" flex w-full justify-start p-4">
      <PaginationContent className="">
        <PaginationItem className=" cursor-pointer" hidden={currentPage === 1}>
          <PaginationPrevious
            onClick={() => {
              setCurrentPage(currentPage - 1);
              window.scrollTo({ top: tableType == "Primary" ? 0 : 900 });
            }}
          />
        </PaginationItem>

        {array.map((item, index) => {
          return (
            <PaginationItem
            key={index}
              className=" cursor-pointer"
              aria-current={currentPage === index + 1 ? "page" : undefined}
            >
              <PaginationLink
                onClick={() => {
                  setCurrentPage(index + 1);
                  window.scrollTo({ top: tableType == "Primary" ? 0 : 900 });
                }}
                isActive={currentPage == index + 1}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem
          className=" cursor-pointer"
          hidden={currentPage === totalPage}
        >
          <PaginationNext
            onClick={() => {
              setCurrentPage(currentPage + 1);
              window.scrollTo({ top: tableType == "Primary" ? 0 : 900 });
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
