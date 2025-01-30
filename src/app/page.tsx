import Link from 'next/link';

import { Button } from '~/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import { Chat } from '~/components/chat';
import { ChatSidebar } from '~/components/chat-sidebar';
import { Icons } from '~/components/icons';

export default function HomePage() {
  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background px-4 sm:hidden'>
        <Link href='/' className='flex items-center space-x-2'>
          <Icons.logo />
          <span className='font-semibold'>Ollama Chatbot UI</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon'>
              <Icons.menu />
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <ChatSidebar />
          </SheetContent>
        </Sheet>
      </div>
      <aside className='hidden h-screen w-64 border-r p-2 py-4 sm:block'>
        <ChatSidebar />
      </aside>
      <Chat />
    </div>
  );
}
