import { useEffect, useState } from 'react';
import { type Dayjs } from 'dayjs';

import { getRelativeTime } from '~/lib/utils';

export function useRelativeTime(date?: string | number | Date | Dayjs | null | undefined) {
  const [relativeTime, setRelativeTime] = useState(getRelativeTime(date));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRelativeTime(getRelativeTime(date));
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return relativeTime;
}
