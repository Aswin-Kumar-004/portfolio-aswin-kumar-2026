import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>Aswin Kumar Portfolio | ML Engineer & Full-Stack Developer</title>
        <meta name="description" content="Explore my portfolio showcasing immersive web experiences, 3D graphics, and innovative applications. Full-stack developer specializing in React, Three.js, and modern web technologies." />
        <meta name="keywords" content="web developer, full-stack developer, React developer, Three.js, portfolio, 3D graphics, UI/UX designer" />
        <meta property="og:title" content="Aswin Kumar Portfolio" />
        <meta property="og:description" content="Immersive web experiences with cutting-edge technologies. Full-stack developer passionate about 3D graphics and animations." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
