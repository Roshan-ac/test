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
      city: string;
      status: string;
      fromDate: string,
      toDate: string,
    }>
  >;
  filterQueries: {
    search: string;
    type: string;
    city: string;
    status: string;
    fromDate: string,
    toDate: string,
  };
}) {
  const [selectQueries, setSelectQueries] = useState<{
    search: string;
    type: string;
    city: string;
    status: string;
    fromDate: string,
    toDate: string,
  }>({
    search: "",
    status: "",
    city: "",
    type:"",
    fromDate: undefined,
    toDate: undefined,
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
          value={selectQueries.status}
          onValueChange={(value) => {
            setSelectQueries({ ...selectQueries, status: value });
          }}
        >
          <SelectTrigger
            disabled={isApplied}
            className="w-full gap-2 rounded-[16px] !bg-tertiaryBackground"
          >
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className=" !bg-secondaryBackground">
            <SelectGroup>
              <SelectItem value="Callback">Callback</SelectItem>
              <SelectItem value="Sold Elsewhere">Sold Elsewhere</SelectItem>

              <SelectItem value="Getting Better Price Elsewhere">
                Getting Better Price Elsewhere
              </SelectItem>
              <SelectItem value="Higher Expectations">
                Higher Expectations
              </SelectItem>
              <SelectItem value="Was Just Checking">
                Was Just Checking
              </SelectItem>
              <SelectItem value="Do not Want to Sell it Anymore">
                Do not Want to Sell it Anymore
              </SelectItem>
              <SelectItem value="Out of Town">Out of Town</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectItem value="swiched off">Swiched Off</SelectItem>
              <SelectItem value="not reachable">Not Reachable</SelectItem>

              <SelectItem value="ringing">Ringing</SelectItem>

              <SelectItem value="wrong number">Wrong Number</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          value={selectQueries.type}
          onValueChange={(value) => {
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
          value={selectQueries.city}
          onValueChange={(value) => {
            setSelectQueries({ ...selectQueries, city: value });
          }}
        >
          <SelectTrigger
            disabled={isApplied}
            className="w-full gap-2 rounded-[16px] !bg-tertiaryBackground"
          >
            <SelectValue placeholder="City" />
          </SelectTrigger>

          <SelectContent className=" !bg-secondaryBackground ">
            <SelectItem value="Mumbai">Mumbai</SelectItem>
            <SelectItem value="Delhi">Delhi</SelectItem>
            <SelectItem value="Pune">Pune</SelectItem>
            <SelectItem value="Gujrat">Gujrat</SelectItem>
          </SelectContent>
        </Select>
        <DatePicker
          isApplied={isApplied}
          selectQueries={selectQueries}
          name="fromDate"
          setUpdateDate={setSelectQueries}
        />
        <DatePicker
          isApplied={isApplied}
          selectQueries={selectQueries}
          name="toDate"
          setUpdateDate={setSelectQueries}
        />
        <Button
          disabled={
            selectQueries.status == "" &&
            selectQueries.type == "" &&
            selectQueries.city == "" &&
            selectQueries.search == "" &&
            selectQueries.fromDate == undefined &&
            selectQueries.toDate == undefined
          }
          onClick={() => {
            !isApplied
              ? (setFilterQueries({
                  search: selectQueries.search,
                  status: selectQueries.status,
                  type:selectQueries.type,
                  city: selectQueries.city,
                  fromDate: selectQueries.fromDate,
                  toDate: selectQueries.toDate,
                }),
                setIsApplied(true))
              : (setSelectQueries({
                  search: "",
                  city: "",
                  status: "",
                  type:"",
                  fromDate: undefined,
                  toDate: undefined,
                }),
                setFilterQueries({
                  search: "",
                  city: "",
                  status: "",
                  fromDate: undefined,
                  toDate: undefined,
                  type:"",
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
