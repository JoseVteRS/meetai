"use client";

import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import { BanIcon, VideoIcon } from "lucide-react";
import Link from "next/link";

interface ActiveStateProps {
  meetingId: string;
  onCancelMeeting: () => void;
  isCancelling: boolean;
}

export const ActiveState = ({
  meetingId,
  onCancelMeeting,
  isCancelling,
}: ActiveStateProps) => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center">
      <EmptyState
        image="/upcoming.svg"
        title="Meeting in progress"
        description="The meeting is currently in progress. You can end it by clicking the button below."
      />
      <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-2 w-full">
        <Button
          asChild
          className="w-full lg:w-auto"
          disabled={isCancelling}
        >
          <Link href={`/call/${meetingId}`} >
            <VideoIcon />
            Join meeting
          </Link>
        </Button>
      </div>
      
    </div>
  );
};
