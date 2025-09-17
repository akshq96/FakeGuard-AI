import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Bot, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="inline-flex items-center px-4 py-2 mb-6 border-primary/20 bg-primary/10">
              <Bot className="text-primary mr-2 w-4 h-4" />
              <span className="text-sm font-medium text-primary">AI-Powered Technology</span>
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Advanced <span className="gradient-text">AI Fraud Detection</span> System
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Protect your business with our cutting-edge AI system that uses multiple ML models for real-time fraud detection, anomaly identification, and pattern recognition across all transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => window.location.href = '/detect'}
                data-testid="button-start-detection"
              >
                <Play className="mr-2 w-4 h-4" />
                Start Detection
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-see-demo"
              >
                <Eye className="mr-2 w-4 h-4" />
                See Live Demo
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary" data-testid="stat-accuracy">99.7%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary" data-testid="stat-response-time">&lt;50ms</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary" data-testid="stat-fraud-prevented">$2.4B+</div>
                <div className="text-sm text-muted-foreground">Fraud Prevented</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-gradient-to-br from-card to-muted rounded-2xl p-8 border border-border">
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-primary rounded-full pulse-animation"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="text-primary w-4 h-4" />
                    <span className="font-medium">Real-time Monitoring</span>
                  </div>
                  <div className="text-primary font-bold" data-testid="status-active">ACTIVE</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary" data-testid="threats-blocked">847</div>
                    <div className="text-sm text-muted-foreground">Threats Blocked</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-chart-2" data-testid="transactions-per-min">12.3K</div>
                    <div className="text-sm text-muted-foreground">Transactions/min</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Fraud Risk Score</span>
                    <span className="text-primary" data-testid="risk-score">23%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: "23%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
