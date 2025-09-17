import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Shield className="text-primary text-2xl" />
            <h1 className="text-xl font-bold">FraudGuard AI</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-home"
            >
              Home
            </a>
            <a 
              href="/detect"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-detect"
            >
              Fraud Detection
            </a>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-demo"
            >
              Demo
            </button>
          </div>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => window.location.href = '/detect'}
            data-testid="button-get-started"
          >
            Start Detection
          </Button>
        </div>
      </div>
    </nav>
  );
}
