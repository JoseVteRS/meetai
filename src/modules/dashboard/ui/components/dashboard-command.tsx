import { CommandDialog, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import type { Dispatch, SetStateAction } from "react";

interface DashBoardCommandProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashBoardCommand = ({ open, setOpen }: DashBoardCommandProps) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a meeting or agent" />
      <CommandList>
        <CommandItem>
            Test
        </CommandItem>
        <CommandItem>
            Test
        </CommandItem>
        <CommandItem>
            Test
        </CommandItem>
      </CommandList>
    </CommandDialog>
  );
};
