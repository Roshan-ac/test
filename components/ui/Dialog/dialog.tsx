import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialogProviders";

export interface DialogInterface {
  children: ReactNode;
  className: string;
  title: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DialogPopup = ({
  children,
  className,
  isOpen,
  setIsOpen,
  title,
  ...props
}: DialogInterface) => {
  return (
    <Dialog {...props} open={isOpen} onOpenChange={setIsOpen}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogPopup;
