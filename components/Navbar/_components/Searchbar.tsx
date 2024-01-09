import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex items-center">
<Search />
    <Input
      className=" border-b border-none !bg-transparent"
      type="email"
      placeholder="Search Something..."
      />
      </div>
  );
}
