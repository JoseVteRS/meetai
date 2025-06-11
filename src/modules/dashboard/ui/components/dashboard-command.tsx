import {
  CommandInput,
  CommandItem,
  CommandList,
  CommandResponsiveDialog,
} from "@/components/ui/command";
import type { Dispatch, SetStateAction } from "react";

interface DashBoardCommandProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashBoardCommand = ({ open, setOpen }: DashBoardCommandProps) => {
  return (
    <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a meeting or agent" />
      <CommandList>
        <CommandItem>Jose</CommandItem>
        <CommandItem>josep</CommandItem>
        <CommandItem>alba</CommandItem>
      </CommandList>
    </CommandResponsiveDialog>
  );
};
