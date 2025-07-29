
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { StagewiseToolbar } from "@stagewise/toolbar-react";
import ReactPlugin from "@stagewise-plugins/react";
import Index from "./pages/Index";
import Aventura from "./pages/Aventura";
import Cultural from "./pages/Cultural";
import Espiritual from "./pages/Espiritual";
import LuaDeMel from "./pages/LuaDeMel";
import Ecoturismo from "./pages/Ecoturismo";
import Gastronomia from "./pages/Gastronomia";
import NotFound from "./pages/NotFound";
import Contato from "./pages/Contato";
import Destinos from "./pages/Destinos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aventura" element={<Aventura />} />
          <Route path="/cultural" element={<Cultural />} />
          <Route path="/espiritual" element={<Espiritual />} />
          <Route path="/lua-de-mel" element={<LuaDeMel />} />
          <Route path="/ecoturismo" element={<Ecoturismo />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/destinos" element={<Destinos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
