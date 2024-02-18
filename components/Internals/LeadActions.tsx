import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";

export function LeadActions() {
  return (
    <div className=" space-y-1">
      <Select>
        <SelectTrigger className="dark:!bg-primary w-[180px]">
          <SelectValue placeholder="Disposition.." />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup>
            <SelectItem value="Disposition">Disposition</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Textarea placeholder="Remarks" className="resize-none" />
    </div>
  );
}
