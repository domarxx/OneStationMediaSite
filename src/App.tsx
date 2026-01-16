import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QuemSomos from "./pages/QuemSomos";
import Estudos from "./pages/Estudos";
import EstudoDetalhe from "./pages/EstudoDetalhe";
import ScrollToAnchor from "@/components/ScrollToAnchor";
import WhatsAppButton from "@/components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToAnchor />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/QuemSomos" element={<QuemSomos />} />
            <Route path="/estudos" element={<Estudos />} />
            <Route path="/estudos/:slug" element={<EstudoDetalhe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Botão flutuante do WhatsApp */}
          <WhatsAppButton />

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;