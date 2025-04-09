import { useState, useEffect } from 'react';

export function useReadingTime() {
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const text = document.body.innerText;
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    setReadingTime(Math.ceil(words / wordsPerMinute));
  }, []);

  return readingTime;
}