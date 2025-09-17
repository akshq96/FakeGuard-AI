import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="text-primary text-xl" />
              <h3 className="text-lg font-bold">FraudGuard AI</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Advanced AI fraud detection system protecting businesses from sophisticated threats with real-time analysis and prevention.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="space-y-2 text-sm">
              <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#dashboard" className="block text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">API Documentation</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Careers</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-muted rounded flex items-center justify-center hover:bg-primary transition-colors">
                <span className="text-sm">𝕏</span>
              </a>
              <a href="#" className="w-8 h-8 bg-muted rounded flex items-center justify-center hover:bg-primary transition-colors">
                <span className="text-sm">💼</span>
              </a>
              <a href="#" className="w-8 h-8 bg-muted rounded flex items-center justify-center hover:bg-primary transition-colors">
                <span className="text-sm">⚡</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2024 FraudGuard AI. All rights reserved. | Protecting over 10,000+ businesses worldwide.
        </div>
      </div>
    </footer>
  );
}
