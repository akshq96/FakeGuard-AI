import { Card, CardContent } from "@/components/ui/card";
import { Bot, Cog, Code } from "lucide-react";
import { mockTechStack, mockPerformanceMetrics } from "@/lib/mock-data";

export function TechStack() {
  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Powered by Advanced Technology</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with industry-leading frameworks and cutting-edge machine learning libraries for maximum performance and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* AI/ML Stack */}
          <Card className="bg-card border border-border" data-testid="tech-stack-ai">
            <CardContent className="p-8">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Bot className="text-primary mr-2 w-5 h-5" />
                AI/ML Framework
              </h3>
              <div className="space-y-4">
                {mockTechStack.aiFramework.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`ai-tech-${index}`}>
                    <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                      <span className="text-primary text-xs">🐍</span>
                    </div>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ML Models */}
          <Card className="bg-card border border-border" data-testid="tech-stack-algorithms">
            <CardContent className="p-8">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Cog className="text-primary mr-2 w-5 h-5" />
                ML Algorithms
              </h3>
              <div className="space-y-4">
                {mockTechStack.algorithms.map((algo, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`algorithm-${index}`}>
                    <div className="w-8 h-8 bg-chart-2/20 rounded flex items-center justify-center">
                      <span className="text-chart-2 text-xs font-bold">{algo.code}</span>
                    </div>
                    <span className="font-medium">{algo.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Frontend & Infrastructure */}
          <Card className="bg-card border border-border" data-testid="tech-stack-frontend">
            <CardContent className="p-8">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Code className="text-primary mr-2 w-5 h-5" />
                Frontend & APIs
              </h3>
              <div className="space-y-4">
                {mockTechStack.frontend.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`frontend-tech-${index}`}>
                    <div className="w-8 h-8 bg-chart-3/20 rounded flex items-center justify-center">
                      <span className="text-chart-3 text-xs">⚛️</span>
                    </div>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <Card className="bg-card border border-border">
          <CardContent className="p-8">
            <h3 className="text-center text-lg font-semibold mb-8">System Performance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {mockPerformanceMetrics.map((metric, index) => (
                <div key={index} className="text-center" data-testid={`performance-metric-${index}`}>
                  <div className={`text-3xl font-bold text-${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
