'use client';
import { DoorOpenIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog';

const LeaveConfirm = ({ onGoHome }: { onGoHome: () => void }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className=" flex items-center gap-2 text-red-300 cursor-pointer">
          <DoorOpenIcon /> <div>Leave</div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Are you sure you wanna leave the match?</DialogTitle>
        <Button onClick={onGoHome}>Yes</Button>
      </DialogContent>
    </Dialog>
  );
};

export default LeaveConfirm;
