"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/constants";
import { PlusIcon, XCircleIcon } from "lucide-react";
import { useState } from "react";
import { useAgentsFilters } from "../../hooks/use-agents-filters";
import { AgentsSearchFilters } from "./agents-search-filters";
import { NewAgentDialog } from "./new-agent-dialog";

export const AgentsListHeader = () => {
  const [filters, setFilters] = useAgentsFilters();
  const [open, setOpen] = useState(false);

  const isAnyFilterModified = !!filters.search;
  const onClearFilters = () => {
    setFilters({ search: "", page: DEFAULT_PAGE, pageSize: DEFAULT_PAGE_SIZE });
  };

  const handleSearch = (value: string) => {
    setFilters({ ...filters, search: value });
  };

  return (
    <>
      <NewAgentDialog open={open} onOpenChange={setOpen} />
      <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl">My Agents</h5>
          <Button onClick={() => setOpen((prev) => !prev)}>
            <PlusIcon className="" />
            New Agent
          </Button>
        </div>
        <ScrollArea>
          <div className="flex items-center gap-x-2 py-1">
            <AgentsSearchFilters />
            {isAnyFilterModified && (
              <Button variant="outline" size="icon" onClick={onClearFilters}>
                <XCircleIcon className="size-4" />
              </Button>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};
