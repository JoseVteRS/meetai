"use client";

import { Button } from "@/components/ui/button";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/constants";
import { PlusIcon, XCircleIcon } from "lucide-react";
import { useState } from "react";
import { NewMeetingDialog } from "./new-meeting-dialog";


export const MeetingsListHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
    <NewMeetingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl">My Meetings</h5>
          <Button onClick={() => setIsDialogOpen(true)}>
            <PlusIcon className="" />
            New Meeting
          </Button>
        </div>
        <div className="flex items-center gap-x-2 py-1">

        </div>
      </div>
    </>
  );
};
