"use client";
import { Input } from "@/components/ui/input";
import { Cross, Plus, Search, X } from "lucide-react";

// export default FiltersBox;
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { deviceType } from "@/interfaces";
import { useState } from "react";
import { DatePicker } from "@/components/Internals/DatePicker";
import { Button } from "@/components/ui/button";

export function FilterMenubar({
  setFilterQueries,
  isLoading,
  filterQueries,
  setIsApplied,
  isApplied,
}: {
  isApplied: boolean;
  isLoading: boolean;
  setIsApplied: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterQueries: React.Dispatch<
    React.SetStateAction<{
      search: string;
      type: string;
      brand: string;
    }>
  >;
  filterQueries: {
    search: string;
    type: string;
    brand: string;
  };
}) {
  const [selectQueries, setSelectQueries] = useState<{
    search: string;
    type: string;
    brand: string;
  }>({
    search: "",
    brand: "",
    type: "",
  });

  return (
    <div className=" flex h-max  items-center bg-secondaryBackground px-8  py-2">
      <div className=" h-[38px] rounded-[16px] !bg-tertiaryBackground px-6">
        <div className="flex h-max items-center">
          <Input
            className=" !disabled:bg-secondaryBackground border-b border-none !bg-transparent"
            type="search"
            disabled={isApplied}
            value={selectQueries?.search ?? ""}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                setFilterQueries({
                  ...filterQueries,
                  search: selectQueries.search,
                });
              }
            }}
            placeholder="Search"
            onChange={(e) => {
              setSelectQueries({ ...selectQueries, search: e.target.value });
            }}
          />
          <Search className={` text-secondaryText`} />
        </div>
      </div>
      <div className=" ml-2 grid w-full grid-cols-6 gap-2">
        <Select
          value={selectQueries.type}
          onValueChange={(value) => {
            console.log(value);
            setSelectQueries({ ...selectQueries, type: value });
          }}
        >
          <SelectTrigger
            disabled={isApplied}
            className="w-full gap-2 rounded-[16px] !bg-tertiaryBackground"
          >
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent className=" !bg-secondaryBackground">
            <SelectItem value="mobile">mobile</SelectItem>
            <SelectItem value="watch">watch</SelectItem>
            <SelectItem value="tablet">tablet</SelectItem>
            <SelectItem value="laptop">laptop</SelectItem>
            <SelectItem value="mac">mac</SelectItem>
            <SelectItem value="headphone">headphone</SelectItem>
            <SelectItem value="console">console</SelectItem>
            <SelectItem value="ac">ac</SelectItem>
            <SelectItem value="desktop">desktop</SelectItem>
            <SelectItem value="tv">tv</SelectItem>
            <SelectItem value="drone">drone</SelectItem>
            <SelectItem value="drone">camera</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={selectQueries.brand}
          onValueChange={(value) => {
            console.log(value);
            setSelectQueries({ ...selectQueries, brand: value });
          }}
        >
          <SelectTrigger
            disabled={isApplied}
            className="w-full gap-2 rounded-[16px] !bg-tertiaryBackground"
          >
            <SelectValue placeholder="Brand" />
          </SelectTrigger>

          <SelectContent className=" !bg-secondaryBackground">
            <SelectItem value="mobile">mobile</SelectItem>
            <SelectItem value="watch">watch</SelectItem>
            <SelectItem value="tablet">tablet</SelectItem>
            <SelectItem value="laptop">laptop</SelectItem>
            <SelectItem value="mac">mac</SelectItem>
            <SelectItem value="headphone">headphone</SelectItem>
            <SelectItem value="console">console</SelectItem>
            <SelectItem value="ac">ac</SelectItem>
            <SelectItem value="desktop">desktop</SelectItem>
            <SelectItem value="tv">tv</SelectItem>
            <SelectItem value="drone">drone</SelectItem>
            <SelectItem value="drone">camera</SelectItem>
          </SelectContent>
        </Select>

        <Button
          disabled={
            selectQueries.brand == "" &&
            selectQueries.brand == "" &&
            selectQueries.search == ""
          }
          onClick={() => {
            !isApplied
              ? (setFilterQueries({
                  search: selectQueries.search,
                  brand: selectQueries.brand,
                  type: selectQueries.type,
                }),
                setIsApplied(true))
              : (setSelectQueries({
                  search: "",
                  type: "",
                  brand: "",
                }),
                setFilterQueries({
                  search: "",
                  type: "",
                  brand: "",
                }),
                setIsApplied(false));
          }}
          className={` flex items-center space-x-2 rounded-[16px] ${isApplied ? "!bg-red-700 !text-white" : "!bg-[#82C43C]"}  font-semibold tracking-wide`}
        >
          <span>{isApplied ? "Clear" : "Apply"}</span>
          {isApplied && <X size={18} />}
        </Button>
      </div>
    </div>
  );
}
