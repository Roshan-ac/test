import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

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

export function FilterMenubar({
  setFilterQueries,
  filterQueries,
}: {
  setFilterQueries: React.Dispatch<
    React.SetStateAction<{
      search: string;
      city: string;
      status: string;
      fromDate: string;
      toDate: string;
      category: string;
    }>
  >;
  filterQueries: {
    search: string;
    city: string;
    status: string;
    fromDate: string;
    toDate: string;
    category: string;
  };
}) {
  const [searchText, setSearchText] = useState<string>();
  return (
    <div className=" flex h-max  items-center bg-secondaryBackground px-8  py-2">
      <div className=" h-[38px] rounded-[16px] !bg-tertiaryBackground px-6">
        <div className="flex h-max items-center">
          <Input
            className=" border-b border-none !bg-transparent"
            type="email"
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <Search
            onClick={() => {
              setFilterQueries({ ...filterQueries, search: searchText });
            }}
            className=" cursor-pointer text-secondaryText hover:text-green-400"
          />
        </div>
      </div>
      <div className=" ml-2 grid w-full grid-cols-6 gap-2">
        <Select>
          <SelectTrigger className="w-full gap-2 rounded-[16px] !bg-tertiaryBackground">
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
        <Select>
          <SelectTrigger className="w-full gap-2 rounded-[16px] !bg-tertiaryBackground">
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
        <Select>
          <SelectTrigger className="w-full gap-2 rounded-[16px] !bg-tertiaryBackground">
            <SelectValue placeholder="City" />
          </SelectTrigger>

          <SelectContent className=" !bg-secondaryBackground ">
            {/* <SelectItem value="mobile">mobile</SelectItem>
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
            <SelectItem value="drone">camera</SelectItem> */}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full gap-2 rounded-[16px] !bg-tertiaryBackground">
            <SelectValue placeholder="From Date" />
          </SelectTrigger>

          <SelectContent className=" !bg-secondaryBackground"></SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full gap-2 rounded-[16px] !bg-tertiaryBackground">
            <SelectValue placeholder="To Date" />
          </SelectTrigger>

          <SelectContent className=" !bg-secondaryBackground"></SelectContent>
        </Select>
        <Button className=" rounded-[16px] !bg-[#82C43C] font-semibold tracking-wide">
          Apply
        </Button>
      </div>
    </div>
  );
}
