"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { date } from "zod";

export function DatePicker({
  name,
  setUpdateDate,
  selectQueries,
  isApplied,
}: {
  name: string;
  isApplied: boolean;
  setUpdateDate: React.Dispatch<
    React.SetStateAction<{
      fromDate: Date;
      toDate: Date;
    }>
  >;
  selectQueries: {
    search: string;
    city: string;
    status: string;
    fromDate: Date;
    toDate: Date;
    category: string;
  };
}) {
  return (
    <Popover>
      <PopoverTrigger
        disabled={isApplied}
        className="w-full gap-2 overflow-hidden rounded-[16px] !bg-tertiaryBackground"
        asChild
      >
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-wrap text-left text-xs font-normal",
            !selectQueries.fromDate && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />

          {name === "fromDate" ? (
            selectQueries.fromDate ? (
              format(selectQueries.fromDate, "PPP")
            ) : (
              <span>From Date</span>
            )
          ) : selectQueries.toDate ? (
            format(selectQueries.toDate, "PPP")
          ) : (
            <span>To Date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto !bg-secondaryBackground p-0">
        <Calendar
          className="!bg-secondaryBackground"
          mode="single"
          selected={
            name === "fromDate" ? selectQueries.fromDate : selectQueries.toDate
          }
          onSelect={(value) => {
            {
              name === "fromDate"
                ? setUpdateDate({ ...selectQueries, fromDate: value })
                : setUpdateDate({ ...selectQueries, toDate: value });
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
