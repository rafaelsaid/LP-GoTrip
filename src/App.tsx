
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Aventura from "./pages/Aventura";
import Cultural from "./pages/Cultural";
import Espiritual from "./pages/Espiritual";
import LuaDeMel from "./pages/LuaDeMel";
import Ecoturismo from "./pages/Ecoturismo";
import Gastronomia from "./pages/Gastronomia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aventura" element={<Aventura />} />
          <Route path="/cultural" element={<Cultural />} />
          <Route path="/espiritual" element={<Espiritual />} />
          <Route path="/lua-de-mel" element={<LuaDeMel />} />
          <Route path="/ecoturismo" element={<Ecoturismo />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
