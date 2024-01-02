import { type Message } from 'ai';
import rehypeHighlight from 'rehype-highlight';

import { useRelativeTime } from '~/hooks/useRelativeTime';
import { Avatar, AvatarFallback } from '~/components/ui/avatar';
import { Icons } from '~/components/icons';
import { MemoizedReactMarkdown } from '~/components/markdown';

import 'highlight.js/styles/github-dark.css';

type Props = {
  message: Message;
};

export function ChatMessage({ message }: Props) {
  const relativeTime = useRelativeTime(message.createdAt);

  return (
    <div className='flex space-x-2'>
      <Avatar>
        <AvatarFallback>
          {message.role === 'user' ? <Icons.user className='h-5 w-5' /> : <Icons.bot className='h-5 w-5' />}
        </AvatarFallback>
      </Avatar>
      <div>
        <div className='font-semibold'>
          {message.role === 'user' ? 'You' : 'ChatDocs AI'}{' '}
          <span className='text-sm font-normal text-muted-foreground'>({relativeTime} ago)</span>
        </div>
        <MemoizedReactMarkdown
          className='prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0'
          rehypePlugins={[rehypeHighlight]}
          components={{
            p({ children }) {
              return <p className='mb-2 last:mb-0'>{children}</p>;
            },
          }}
        >
          {message.content}
        </MemoizedReactMarkdown>
      </div>
    </div>
  );
}
