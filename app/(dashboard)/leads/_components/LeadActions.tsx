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
import { Textarea } from "../../../../components/ui/textarea";
import { Button } from "../../../../components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "../../../../components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Dialog } from "../../../../components/ui/dialog";
import LeadDialog from "@/app/(dashboard)/leads/_components/LeadDialog";
import { useProgressContext } from "@/context/progressContext";

export interface DispositionInterface {
  disposition1: string;
  disposition2: string;
  remarks: string;
}

export function LeadActions({
  lead,
  setLogsUpdate,
}: {
  lead: any;
  setLogsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { register, handleSubmit } = useForm<DispositionInterface>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [select, setSelect] = React.useState<DispositionInterface>({
    disposition1: "",
    disposition2: "",
    remarks: "",
  });

  const [isDialogOpen, setDialogOpen] = React.useState<boolean>(false);
  const { showProgress } = useProgressContext();
  const submitHandler = async (data: DispositionInterface) => {
    const desposition = `${select.disposition1}-${select.disposition2}-(${data.remarks.length > 0 ? data.remarks : "no remarks"})`;
    const res = await fetch("/api/updateDesposition", {
      method: "POST",
      body: JSON.stringify({
        leadid: lead.id,
        desposition: desposition,
      }),
    });
    const result = await res.json();
    if (result.success) {
      showProgress()
      toast({
        title: "Success",
        description: <p className=" text-green-500">{result.message}</p>,
      });
    } else {
      toast({
        title: "Unable to update",
        description: <p className=" text-[#dd9999]">{result.message}</p>,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} className=" space-y-2 py-2">
        <Select
          // {...register("disposition1")}
          onValueChange={(value) => {
            setSelect({
              ...select,
              disposition1: value as string,
            });
            if (value === "Cl") {
              setDialogOpen(true);
            }
          }}
        >
          <SelectTrigger className="dark:!bg-primary w-full">
            <SelectValue placeholder="Disposition 1" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup {...register("disposition1")}>
              <SelectItem value="Con">Connected</SelectItem>
              <SelectItem value="Nc">Not Connected</SelectItem>
              <SelectItem value="Cl">Create Lead</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {select.disposition1 === "Con" && (
          <Select
            onValueChange={(value) =>
              setSelect({
                ...select,
                disposition2: value as string,
              })
            }
          >
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

        {select.disposition1 === "Nc" && (
          <Select
            onValueChange={(value) =>
              setSelect({
                ...select,
                disposition2: value as string,
              })
            }
          >
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

        {!isDialogOpen && (
          <>
            <Textarea
              placeholder="Remarks"
              className="resize-none"
              {...register("remarks")}
            />
            <Button
              disabled={select.disposition1 == "" || select.disposition2 == ""}
              className=" !h-max rounded-none !bg-[#82C43C] px-8"
            >
              {isLoading ? "Updating" : "Update"}
            </Button>
          </>
        )}
      </form>
      <LeadDialog
        title="Create Lead"
        lead={lead}
        setSelect={setSelect}
        isDialogOpen={isDialogOpen}
        setDialogOpen={setDialogOpen}
      />
    </>
  );
}
