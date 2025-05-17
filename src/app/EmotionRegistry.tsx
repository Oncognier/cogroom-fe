'use client';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';

export default function EmotionRegistry({ children }: { children: React.ReactNode }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'css', prepend: true });
    cache.compat = true;

    return {
      cache,
      flush: () => {
        const inserted = cache.inserted;
        cache.inserted = {};
        return inserted;
      },
    };
  });

  useServerInsertedHTML(() => {
    const inserted = flush();
    const names = Object.keys(inserted);
    if (names.length === 0) return null;

    let styles = '';
    for (const name of names) {
      if (typeof inserted[name] === 'string') {
        styles += inserted[name];
      }
    }

    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
