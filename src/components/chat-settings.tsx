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
            <Label htmlFor='microstat' className='inline-flex items-center'>
              Mirostat
              <span
                className='ml-2 cursor-pointer'
                title='Enable Mirostat sampling for controlling perplexity. (default: 0, 0 = disabled, 1 = Mirostat, 2 =
                  Mirostat 2.0)'
              >
                <Icons.info className='h-4 w-4' />
              </span>
            </Label>
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
            <Label htmlFor='mirostatEta' className='inline-flex items-center'>
              Mirostat Eta
              <span
                className='ml-2 cursor-pointer'
                title='Influences how quickly the algorithm responds to feedback from the generated text. A lower learning rate will result in slower adjustments, while a higher learning rate will make the algorithm more responsive. (Default: 0.1)'
              >
                <Icons.info className='h-4 w-4' />
              </span>
            </Label>
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
            <Label htmlFor='mirostatTau' className='inline-flex items-center'>
              Mirostat Tau
              <span
                className='ml-2 cursor-pointer'
                title='Controls the balance between coherence and diversity of the output. A lower value will result in more focused and coherent text. (Default: 5.0)'
              >
                <Icons.info className='h-4 w-4' />
              </span>
            </Label>
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
            <Label htmlFor='numCtx' className='inline-flex items-center'>
              Num Ctx
              <span
                className='ml-2 cursor-pointer'
                title='Sets the size of the context window used to generate the next token. (Default: 2048)	'
              >
                <Icons.info className='h-4 w-4' />
              </span>
            </Label>
            <Input
              id='numCtx'
              placeholder='Num Ctx'
              type='number'
              value={chatSettings.numCtx}
              onChange={e => setChatSettings({ ...chatSettings, numCtx: Number(e.target.value) })}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='numGqa' className='inline-flex items-center'>
              Num GQA
              <span
                className='ml-2 cursor-pointer'
                title='The number of GQA groups in the transformer layer. Required for some models, for example it is 8 for llama2:70b'
              >
                <Icons.info className='h-4 w-4' />
              </span>
            </Label>
            <Input
              id='numGqa'
              placeholder='Num GQA'
              type='number'
              value={chatSettings.numGqa}
              onChange={e => setChatSettings({ ...chatSettings, numGqa: Number(e.target.value) })}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='numGpu' className='inline-flex items-center'>
              Num GPU
              <span
                className='ml-2 cursor-pointer'
                title='The number of layers to send to the GPU(s). On macOS it defaults to 1 to enable metal support, 0 to disable.'
              >
                <Icons.info className='h-4 w-4' />
              </span>
            </Label>
            <Input
              id='numGpu'
              placeholder='Num GPU'
              type='number'
              value={chatSettings.numGpu}
              onChange={e => setChatSettings({ ...chatSettings, numGpu: Number(e.target.value) })}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='numThread' className='inline-flex items-center'>
              Num Thread
              <span
                className='ml-2 cursor-pointer'
                title='Sets the number of threads to use during computation. By default, Ollama will detect this for optimal performance. It is recommended to set this value to the number of physical CPU cores your system has (as opposed to the logical number of cores).'
              >
                <Icons.info className='h-4 w-4' />
              </span>
            </Label>
            <Input
              id='numThread'
              placeholder='Num Thread'
              type='number'
              value={chatSettings.numThread}
              onChange={e => setChatSettings({ ...chatSettings, numThread: Number(e.target.value) })}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='repeatLastN' className='inline-flex items-center'>
              Repeat Last N
              <span
                className='ml-2 cursor-pointer'
                title='Sets how far back for the model to look back to prevent repetition. (Default: 64, 0 = disabled, -1 = num_ctx)	'
              >
                <Icons.info className='h-4 w-4' />
              </span>
            </Label>
            <Input
              id='repeatLastN'
              placeholder='Repeat Last N'
              type='number'
              value={chatSettings.repeatLastN}
              onChange={e => setChatSettings({ ...chatSettings, repeatLastN: Number(e.target.value) })}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='repeatPenalty' className='inline-flex items-center'>
              Repeat Penalty
              <span
                className='ml-2 cursor-pointer'
                title='Sets how strongly to penalize repetitions. A higher value (e.g., 1.5) will penalize repetitions more strongly, while a lower value (e.g., 0.9) will be more lenient. (Default: 1.1)'
              >
                <Icons.info className='h-4 w-4' />
              </span>
            </Label>
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
            <Label htmlFor='temperature' className='inline-flex items-center'>
              Temperature
              <span
                className='ml-2 cursor-pointer'
                title='The temperature of the model. Increasing the temperature will make the model answer more creatively. (Default: 0.8)'
              >
                <Icons.info className='h-4 w-4' />
              </span>
            </Label>
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
            <Label htmlFor='tfsZ' className='inline-flex items-center'>
              Tfs Z
              <span
                className='ml-2 cursor-pointer'
                title='Tail free sampling is used to reduce the impact of less probable tokens from the output. A higher value (e.g., 2.0) will reduce the impact more, while a value of 1.0 disables this setting. (default: 1)'
              >
                <Icons.info className='h-4 w-4' />
              </span>
            </Label>
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
            <Label htmlFor='topK' className='inline-flex items-center'>
              Top K
              <span
                className='ml-2 cursor-pointer'
                title='Reduces the probability of generating nonsense. A higher value (e.g. 100) will give more diverse answers, while a lower value (e.g. 10) will be more conservative. (Default: 40)'
              >
                <Icons.info className='h-4 w-4' />
              </span>
            </Label>
            <Input
              id='topK'
              placeholder='Top K'
              type='number'
              value={chatSettings.topK}
              onChange={e => setChatSettings({ ...chatSettings, topK: Number(e.target.value) })}
            />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='topP' className='inline-flex items-center'>
              Top P
              <span
                className='ml-2 cursor-pointer'
                title='Works together with top-k. A higher value (e.g., 0.95) will lead to more diverse text, while a lower value (e.g., 0.5) will generate more focused and conservative text. (Default: 0.9)'
              >
                <Icons.info className='h-4 w-4' />
              </span>
            </Label>
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
