import { useEffect, useState } from 'react';

export function useIsScrolledToBottom(ref: React.RefObject<HTMLElement>) {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { scrollTop, scrollHeight, clientHeight } = ref.current;

        const atBottom = scrollTop + clientHeight >= (scrollHeight - 1) * 0.95;
        setIsScrolledToBottom(atBottom);
      }
    };

    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref]);

  return isScrolledToBottom;
}
