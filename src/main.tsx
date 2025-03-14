import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import App from './App.tsx'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'

const root = createRoot(document.getElementById("root")!);

root.render(
  <ErrorBoundary>
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <App />
    </Suspense>
  </ErrorBoundary>
);
