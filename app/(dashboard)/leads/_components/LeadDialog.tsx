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
        <CreateLeadForm lead={lead} />
      </DialogContent>
    </Dialog>
  );
};

export default LeadDialog;
