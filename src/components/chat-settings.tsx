'use client';

import { useState } from 'react';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import { Icons } from '~/components/icons';

export function ChatSettings() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className='flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-muted'>
          <Icons.settings className='h-5 w-5' />
          <span>Settings</span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
