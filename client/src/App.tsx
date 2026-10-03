import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/scroll-to-top";
import { PageTransition } from "@/components/page-transition";
import { PageTransitionAlt } from "@/components/page-transition-alt";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
// import Work from "@/pages/work";
import Company from "@/pages/company";
import Process from "@/pages/process";

function AnimatedRoute({ component: Component, duration, alt }: { component: React.ComponentType; duration?: number; alt?: boolean }) {
  if (alt) {
    return (
      <PageTransitionAlt>
        <Component />
      </PageTransitionAlt>
    );
  }
  return (
    <PageTransition duration={duration}>
      <Component />
    </PageTransition>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <AnimatedRoute component={Home} duration={0} />} />
      <Route path="/services" component={() => <AnimatedRoute component={Services} duration={3} />} />
      {/* <Route path="/work" component={() => <AnimatedRoute component={Work} alt />} /> */}
      <Route path="/company" component={() => <AnimatedRoute component={Company} duration={3} />} />
      <Route path="/contact" component={() => <AnimatedRoute component={Contact} alt />} />
      <Route path="/process" component={() => <AnimatedRoute component={Process} duration={3} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
