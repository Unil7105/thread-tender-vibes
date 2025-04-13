
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Category from "./pages/Category";
import ThreadDetail from "./pages/ThreadDetail";
import Explore from "./pages/Explore";
import MyThreads from "./pages/MyThreads";
import Profile from "./pages/Profile";
import ViewAll from "./pages/ViewAll";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/thread/:id" element={<ThreadDetail />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/my-threads" element={<MyThreads />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/view-all/:type" element={<ViewAll />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
