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
import { useForm } from "react-hook-form";

interface DispositionInterface {
  disposition1: string;
  disposition2: string;
  remarks: string;
}

export function LeadActions() {
  const { register, handleSubmit } = useForm<DispositionInterface>();

  const [select, setSelect] = React.useState<DispositionInterface>({
    disposition1: "",
    disposition2: "",
    remarks: "",
  });

  const [isDialogOpen, setDialogOpen] = React.useState<boolean>(false);

  // console.log(select);

  if (select.disposition1 === "create lead") {
    setDialogOpen(true);
  }

  const submitHandler = (data: DispositionInterface) => {
    // console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className=" space-y-2 py-2">
      <Select
        // {...register("disposition1")}
        onValueChange={(value) =>
          setSelect({
            disposition1: value as string,
            disposition2: "" as string,
            remarks: "" as string,
          })
        }
      >
        <SelectTrigger className="dark:!bg-primary w-full">
          <SelectValue placeholder="Disposition 1" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup {...register("disposition1")}>
            <SelectItem value="connected">Connected</SelectItem>
            <SelectItem value="not connected">Not Connected</SelectItem>
            <SelectItem value="create lead">Create Lead</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {select.disposition1 === "connected" && (
        <Select>
          <SelectTrigger className="dark:!bg-primary w-full">
            <SelectValue
              {...register("disposition2")}
              placeholder="Disposition 2"
            />
          </SelectTrigger>
          <SelectContent className="">
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
          </SelectContent>
        </Select>
      )}

      {select.disposition1 === "not connected" && (
        <Select>
          <SelectTrigger className="dark:!bg-primary w-full">
            <SelectValue placeholder="Disposition 2" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup {...register("disposition2")}>
              <SelectItem value="swiched off">Swiched Off</SelectItem>
              <SelectItem value="not reachable">Not Reachable</SelectItem>

              <SelectItem value="ringing">Ringing</SelectItem>

              <SelectItem value="wrong number">Wrong Number</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}

      {/* changes here*/}
      {/* {select.disposition1 === "create leads" && isDialogOpen && (
        <Dialog
          title="Create Lead"
          isOpen={isDialogOpen}
          setIsOpen={setDialogOpen}
        >
          <div className="flex flex-col gap-3">
            <label>
              Owner Address
              <input
                placeholder=""
                //  value={lead.owneraddress}
              />
            </label>

            <label>
              Final Price
              <input placeholder="give final price" />
            </label>

            <label>
              Pickup Date
              <input placeholder="give final price" type="date" />
            </label>

            <label>
              Pickuptime
              <select>
                <option selected> Select Pickup time</option>
              </select>
            </label>

            <label>
              Payment Method
              <select>
                <option selected> Select Payment Method</option>
              </select>
            </label>
          </div>
        </Dialog>
      )} */}

      <Textarea
        placeholder="Remarks"
        className="resize-none"
        {...register("remarks")}
      />
      <Button className=" !h-7 rounded-md !bg-[#82C43C] px-8 !text-xs">
        Update
      </Button>
    </form>
  );
}
