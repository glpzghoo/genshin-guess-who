'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MessageSquare } from 'lucide-react';
import { QuestionPanel } from '@/components/question-panel';

export function MobileQASheet() {
  return (
    <div className="lg:hidden fixed bottom-4 right-4 z-40">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="rounded-full h-12 w-12 shadow-lg">
            <MessageSquare className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="h-[75vh] p-0 bg-slate-900/95 border-slate-700"
        >
          <SheetHeader className="px-4 pt-4 pb-2">
            <SheetTitle>Questions & Answers</SheetTitle>
          </SheetHeader>
          <div className="p-4 overflow-y-auto">
            <QuestionPanel />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
