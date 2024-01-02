import Link from 'next/link';

import { ScrollArea } from '~/components/ui/scroll-area';
import { Icons } from '~/components/icons';

export function ChatSidebar() {
  return (
    <>
      <Link href='/' className='flex items-center space-x-2 rounded-lg p-2 hover:bg-muted'>
        <Icons.logo />
        <span className='font-semibold'>Ollama Chatbot UI</span>
      </Link>
      <ScrollArea className='h-[calc(100dvh-158px-40px)]'>
        {/* {chatFiles.map(file => (
          <ChatFile key={file.id} file={file} chatId={chat.id} />
        ))} */}
      </ScrollArea>
    </>
  );
}
