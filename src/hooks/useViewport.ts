import { useEffect, useState } from 'react';

type Viewport = 'mobile' | 'tablet' | 'desktop';

export function useViewport(): Viewport {
  const [viewport, setViewport] = useState<Viewport>('desktop');

  useEffect(() => {
    function update() {
      const width = window.innerWidth;
      if (width < 640) setViewport('mobile');
      else if (width < 1024) setViewport('tablet');
      else setViewport('desktop');
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return viewport;
}
