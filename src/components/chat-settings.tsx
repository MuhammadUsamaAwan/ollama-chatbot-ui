'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';

import { useStore } from '~/lib/store';
import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Icons } from '~/components/icons';

export function ChatSettings() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { chatSettings, setChatSettings } = useStore();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className='flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-muted'>
          <Icons.settings className='h-5 w-5' />
          <span>Settings</span>
        </button>
      </DialogTrigger>
      <DialogContent className='max-h-[80dvh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className='space-y-4'>
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
          <div className='space-y-1'>
            <Label htmlFor='model'>Model</Label>
            <Input
              id='model'
              placeholder='Model'
              value={chatSettings.model}
              onChange={e => setChatSettings({ ...chatSettings, model: e.target.value })}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='baseUrl'>Base Url</Label>
            <Input
              id='baseUrl'
              placeholder='Base Url'
              value={chatSettings.baseUrl}
              onChange={e => setChatSettings({ ...chatSettings, baseUrl: e.target.value })}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='microstat'>Mirostat</Label>
            <Input
              id='microstat'
              placeholder='Mirostat'
              type='number'
              value={chatSettings.mirostat}
              onChange={e => setChatSettings({ ...chatSettings, mirostat: Number(e.target.value) })}
              step={1}
              min={0}
              max={2}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='mirostatEta'>Mirostat Eta</Label>
            <Input
              id='mirostatEta'
              placeholder='Mirostat Eta'
              type='number'
              value={chatSettings.mirostatEta}
              onChange={e => setChatSettings({ ...chatSettings, mirostatEta: Number(e.target.value) })}
              step={0.1}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='mirostatTau'>Mirostat Tau</Label>
            <Input
              id='mirostatTau'
              placeholder='Mirostat Tau'
              type='number'
              value={chatSettings.mirostatTau}
              onChange={e => setChatSettings({ ...chatSettings, mirostatTau: Number(e.target.value) })}
              step={0.1}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='numCtx'>Num Ctx</Label>
            <Input
              id='numCtx'
              placeholder='Num Ctx'
              type='number'
              value={chatSettings.numCtx}
              onChange={e => setChatSettings({ ...chatSettings, numCtx: Number(e.target.value) })}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='numGqa'>Num GQA</Label>
            <Input
              id='numGqa'
              placeholder='Num GQA'
              type='number'
              value={chatSettings.numGqa}
              onChange={e => setChatSettings({ ...chatSettings, numGqa: Number(e.target.value) })}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='numGpu'>Num GPU</Label>
            <Input
              id='numGpu'
              placeholder='Num GPU'
              type='number'
              value={chatSettings.numGpu}
              onChange={e => setChatSettings({ ...chatSettings, numGpu: Number(e.target.value) })}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='numThread'>Num Thread</Label>
            <Input
              id='numThread'
              placeholder='Num Thread'
              type='number'
              value={chatSettings.numThread}
              onChange={e => setChatSettings({ ...chatSettings, numThread: Number(e.target.value) })}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='repeatLastN'>Repeat Last N</Label>
            <Input
              id='repeatLastN'
              placeholder='Repeat Last N'
              type='number'
              value={chatSettings.repeatLastN}
              onChange={e => setChatSettings({ ...chatSettings, repeatLastN: Number(e.target.value) })}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='repeatPenalty'>Repeat Penalty</Label>
            <Input
              id='repeatPenalty'
              placeholder='Repeat Penalty'
              type='number'
              value={chatSettings.repeatPenalty}
              onChange={e => setChatSettings({ ...chatSettings, repeatPenalty: Number(e.target.value) })}
              step={0.1}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='temperature'>Temperature</Label>
            <Input
              id='temperature'
              placeholder='Temperature'
              type='number'
              value={chatSettings.temperature}
              onChange={e => setChatSettings({ ...chatSettings, temperature: Number(e.target.value) })}
              step={0.1}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='tfsZ'>Tfs Z</Label>
            <Input
              id='tfsZ'
              placeholder='Tfs Z'
              type='number'
              value={chatSettings.tfsZ}
              onChange={e => setChatSettings({ ...chatSettings, tfsZ: Number(e.target.value) })}
              step={0.1}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='topK'>Top K</Label>
            <Input
              id='topK'
              placeholder='Top K'
              type='number'
              value={chatSettings.topK}
              onChange={e => setChatSettings({ ...chatSettings, topK: Number(e.target.value) })}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='topP'>Top P</Label>
            <Input
              id='topP'
              placeholder='Top P'
              type='number'
              value={chatSettings.topP}
              onChange={e => setChatSettings({ ...chatSettings, topP: Number(e.target.value) })}
              step={0.1}
            />
          </div>
          <Button
            type='submit'
            className='w-full'
            onClick={() =>
              setChatSettings({
                model: 'llama2',
                baseUrl: 'http://localhost:11434',
                mirostat: 0,
                mirostatEta: 0.1,
                mirostatTau: 5.0,
                numCtx: 2048,
                numGqa: 1,
                numGpu: 50,
                numThread: 8,
                repeatLastN: 64,
                repeatPenalty: 1.1,
                temperature: 0.8,
                tfsZ: 1,
                topK: 40,
                topP: 0.9,
              })
            }
            variant='destructive'
          >
            Reset Default
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
