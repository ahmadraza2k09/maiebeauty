import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router'
import { useEffect } from 'react'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

function App() {
  useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        // Trigger a resize event so components relying on measurements refresh
        window.dispatchEvent(new Event('resize'));
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return <RouterProvider router={getRouter()} />;
}

const root = createRoot(rootElement)
root.render(<App />)
