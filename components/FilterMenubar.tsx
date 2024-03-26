import { Input } from "@/components/ui/input";
import { Cross, Plus, Search, X } from "lucide-react";

// export default FiltersBox;
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { deviceType } from "@/interfaces";
import { useState } from "react";
import { DatePicker } from "./Internals/DatePicker";

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
      city: string;
      status: string;
      fromDate: Date;
      toDate: Date;
      category: string;
    }>
  >;
  filterQueries: {
    search: string;
    city: string;
    status: string;
    fromDate: Date;
    toDate: Date;
    category: string;
  };
}) {
  const [selectQueries, setSelectQueries] = useState<{
    search: string;
    city: string;
    status: string;
    fromDate: Date;
    toDate: Date;
    category: string;
  }>({
    search: "",
    city: "",
    status: "",
    fromDate: undefined,
    toDate: undefined,
    category: "",
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
          {selectQueries.search.length < 1 ? (
            <Search
            
              onClick={() => {
                setFilterQueries({
                  ...filterQueries,
                  search: selectQueries.search,
                });
              }}
              className={` text-secondaryText ${!isApplied?' hover:text-green-400 cursor-pointer':' !opacity-20'}`}
            />
          ) : (
            <X
              onClick={() => {
                setSelectQueries({ ...selectQueries, search: "" });
                setFilterQueries({
                  ...filterQueries,
                  search: "",
                });
              }}
              className=" cursor-pointer text-secondaryText hover:text-green-400"
            />
          )}
        </div>
      </div>
      <div className=" ml-2 grid w-full grid-cols-6 gap-2">
        <Select
          value={selectQueries.status}
          onValueChange={(value) => {
            console.log(value);
            setSelectQueries({ ...selectQueries, status: value });
          }}
        >
          <SelectTrigger disabled={isApplied} className="w-full gap-2 rounded-[16px] !bg-tertiaryBackground">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className=" !bg-secondaryBackground">
            <SelectItem value="Generated">Generated</SelectItem>
            <SelectItem value="Cancelled by Customer">
              Cancelled by Customer
            </SelectItem>
            <SelectItem value="Failed">Failed</SelectItem>
            <SelectItem value="Out For Pickup">Out For Pickup</SelectItem>
            <SelectItem value="Cancelled by Cashkr">
              Cancelled by Cashkr
            </SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Assigned">Assigned</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={selectQueries.category}
          onValueChange={(value) => {
            console.log(value);
            setSelectQueries({ ...selectQueries, category: value });
          }}
        >
          <SelectTrigger disabled={isApplied} className="w-full gap-2 rounded-[16px] !bg-tertiaryBackground">
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
            console.log(value);
            setSelectQueries({ ...selectQueries, city: value });
          }}
        >
          <SelectTrigger disabled={isApplied} className="w-full gap-2 rounded-[16px] !bg-tertiaryBackground">
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
            selectQueries.category == "" &&
            selectQueries.city == "" &&
            selectQueries.fromDate == undefined &&
            selectQueries.toDate == undefined
          }
          onClick={() => {
            !isApplied
              ? (setFilterQueries({
                  search: selectQueries.search,
                  status: selectQueries.status,
                  category: selectQueries.category,
                  city: selectQueries.city,
                  fromDate: selectQueries.fromDate,
                  toDate: selectQueries.toDate,
                }),
                setIsApplied(true))
              : (setSelectQueries({
                  search: "",
                  city: "",
                  status: "",
                  fromDate: undefined,
                  toDate: undefined,
                  category: "",
                }),
                setFilterQueries({
                  search: "",
                  city: "",
                  status: "",
                  fromDate: undefined,
                  toDate: undefined,
                  category: "",
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
