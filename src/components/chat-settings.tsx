'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';

import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Icons } from '~/components/icons';

export function ChatSettings() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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
        <form className='space-y-4'>
          <div className='space-y-1'>
            <Label htmlFor='chat_model'>Chat Model</Label>
            <Input id='chat_model' name='chat_model' placeholder='Chat Model' required />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='base_url'>Base Url</Label>
            <Input id='base_url' name='base_url' placeholder='Base Url' required />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='base_url'>Theme</Label>
            <Select value={theme} onValueChange={val => setTheme(val)}>
              <SelectTrigger>
                <SelectValue placeholder='Theme' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='light'>Light</SelectItem>
                <SelectItem value='dark'>Dark</SelectItem>
                <SelectItem value='system'>System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type='submit' className='w-full'>
            Save Changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
