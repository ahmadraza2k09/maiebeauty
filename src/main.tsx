import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router'
import { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'

// Create a single router instance to avoid replacing it on every App render
const router = getRouter();

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

function App() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const check = () => {
      const active = document.activeElement;
      const isInput = !!(active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || (active as HTMLElement).isContentEditable));
      const hidden = document.visibilityState === 'hidden';
      setReduceMotion(isInput || hidden);
      if (!hidden) window.dispatchEvent(new Event('resize'));
    };

    const onFocusIn = () => check();
    const onFocusOut = () => setTimeout(check, 0);
    const onVisibility = () => check();

    window.addEventListener('focusin', onFocusIn);
    window.addEventListener('focusout', onFocusOut);
    document.addEventListener('visibilitychange', onVisibility);
    check();
    return () => {
      window.removeEventListener('focusin', onFocusIn);
      window.removeEventListener('focusout', onFocusOut);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <MotionConfig reducedMotion={reduceMotion}>
      <RouterProvider router={router} />
    </MotionConfig>
  );
}

const root = createRoot(rootElement)
root.render(<App />)
