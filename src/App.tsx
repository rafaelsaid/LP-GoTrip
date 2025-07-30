
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { StagewiseToolbar } from "@stagewise/toolbar-react";
import ReactPlugin from "@stagewise-plugins/react";
import { Suspense, lazy } from "react";

// Lazy load all pages except Index for immediate load
import Index from "./pages/Index";
const Aventura = lazy(() => import("./pages/Aventura"));
const Cultural = lazy(() => import("./pages/Cultural"));
const Espiritual = lazy(() => import("./pages/Espiritual"));
const LuaDeMel = lazy(() => import("./pages/LuaDeMel"));
const ViagensCorporativas = lazy(() => import("./pages/ViagensCorporativas"));
const ConsultoriaPersonalizada = lazy(() => import("./pages/ConsultoriaPersonalizada"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Contato = lazy(() => import("./pages/Contato"));
const Destinos = lazy(() => import("./pages/Destinos"));

const queryClient = new QueryClient();

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {import.meta.env.DEV && <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />}
      <HashRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/aventura" element={<Aventura />} />
            <Route path="/cultural" element={<Cultural />} />
            <Route path="/espiritual" element={<Espiritual />} />
            <Route path="/lua-de-mel" element={<LuaDeMel />} />
            <Route path="/viagens-corporativas" element={<ViagensCorporativas />} />
            <Route path="/consultoria-personalizada" element={<ConsultoriaPersonalizada />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/destinos" element={<Destinos />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
