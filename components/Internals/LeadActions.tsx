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
import { Button } from "../ui/button";

export function LeadActions() {
  return (
    <div className=" space-y-2 py-2">
      <Select>
        <SelectTrigger className="dark:!bg-primary w-full">
          <SelectValue placeholder="Disposition 1" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup>
            <SelectItem value="Disposition">Disposition</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="dark:!bg-primary w-full">
          <SelectValue placeholder="Disposition 2" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup>
            <SelectItem value="Disposition">Disposition</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Textarea placeholder="Remarks" className="resize-none" />
      <div>
        <Button
        
          className=" !h-7 rounded-none !bg-[#82C43C] px-8 !text-xs"
        >
          Update
        </Button>
      </div>
    </div>
  );
}
