import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { CreateLeadForm } from "./CreateLeadForm";
import { DispositionInterface } from "./LeadActions";

const LeadDialog = ({
  title,
  lead,
  isDialogOpen,
  setSelect,
  setDialogOpen,
}: {
  title: string;
  lead: any;
  setSelect: React.Dispatch<React.SetStateAction<DispositionInterface>>;
  isDialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Dialog
      onOpenChange={() => (
        setDialogOpen(false),
        setSelect({ disposition1: "", disposition2: "", remarks: "" })
      )}
      open={isDialogOpen}
    >
      <DialogContent className="text-white sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create Lead</DialogTitle>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4 ">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Owner Address
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-2"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Final Price
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-2"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Pickuptime
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-2"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Payment Method
            </Label>
            <Input
              id="username"
              color="dark"
              defaultValue="@peduarte"
              className=" col-span-2"
            />
          </div>
        </div> */}

        <CreateLeadForm lead={lead} />
      </DialogContent>
    </Dialog>
  );
};

export default LeadDialog;
