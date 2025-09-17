import { Card, CardContent } from "@/components/ui/card";
import { Database, Search, TrendingUp, Network, Calculator, HelpCircle, Flag, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Data Ingestion",
      description: "Real-time collection of transaction and behavioral data from multiple sources"
    },
    {
      number: "2", 
      title: "Multi-Model Analysis",
      description: "Parallel processing through three specialized ML algorithms"
    },
    {
      number: "3",
      title: "Score Calculation", 
      description: "Weighted aggregation of all model outputs into unified fraud score"
    },
    {
      number: "4",
      title: "Decision Making",
      description: "Threshold-based classification with immediate action triggers"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">How Our AI System Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow the complete fraud detection process from data ingestion to final decision making using advanced machine learning algorithms.
          </p>
        </div>

        {/* Flowchart Visualization */}
        <Card className="bg-card border border-border rounded-2xl mb-12">
          <CardContent className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Sensor Data */}
              <div className="lg:col-span-3 flex justify-center mb-8">
                <div className="flowchart-node px-6 py-4 rounded-lg text-center" data-testid="sensor-data-node">
                  <Database className="text-primary text-xl mb-2 mx-auto" />
                  <div className="font-semibold">Sensor Data</div>
                </div>
              </div>

              {/* Three Analysis Paths */}
              <div className="text-center" data-testid="anomaly-detection-path">
                <div className="flowchart-node px-4 py-3 rounded-lg mb-4">
                  <Search className="text-primary mb-2 mx-auto w-4 h-4" />
                  <div className="font-medium text-sm">Anomaly Detection</div>
                </div>
                <div className="text-xs text-muted-foreground mb-4">↓</div>
                <Card className="bg-background border border-border">
                  <CardContent className="px-4 py-3">
                    <Flag className="text-chart-4 mb-2 mx-auto w-4 h-4" />
                    <div className="font-medium text-sm">Outlier Detection</div>
                    <div className="text-xs text-muted-foreground">Isolation Forest</div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center" data-testid="pattern-recognition-path">
                <div className="flowchart-node px-4 py-3 rounded-lg mb-4">
                  <TrendingUp className="text-chart-2 mb-2 mx-auto w-4 h-4" />
                  <div className="font-medium text-sm">Pattern Recognition</div>
                </div>
                <div className="text-xs text-muted-foreground mb-4">↓</div>
                <Card className="bg-background border border-border">
                  <CardContent className="px-4 py-3">
                    <TrendingUp className="text-chart-2 mb-2 mx-auto w-4 h-4" />
                    <div className="font-medium text-sm">Time Series Analysis</div>
                    <div className="text-xs text-muted-foreground">LSTM Networks</div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center" data-testid="correlation-analysis-path">
                <div className="flowchart-node px-4 py-3 rounded-lg mb-4">
                  <Network className="text-chart-3 mb-2 mx-auto w-4 h-4" />
                  <div className="font-medium text-sm">Correlation Analysis</div>
                </div>
                <div className="text-xs text-muted-foreground mb-4">↓</div>
                <Card className="bg-background border border-border">
                  <CardContent className="px-4 py-3">
                    <Network className="text-chart-3 mb-2 mx-auto w-4 h-4" />
                    <div className="font-medium text-sm">Cross-Sensor Validation</div>
                    <div className="text-xs text-muted-foreground">Random Forest</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Convergence to Fraud Score */}
            <div className="text-center mb-8">
              <div className="text-xs text-muted-foreground mb-4">↓ ↓ ↓</div>
              <div className="inline-block bg-primary/20 border border-primary px-6 py-4 rounded-lg" data-testid="fraud-score-node">
                <Calculator className="text-primary text-xl mb-2 mx-auto" />
                <div className="font-semibold">Fraud Score</div>
              </div>
            </div>

            {/* Decision Logic */}
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-4">↓</div>
              <div className="inline-block bg-background border border-border px-6 py-4 rounded-lg mb-8" data-testid="decision-node">
                <HelpCircle className="text-foreground mb-2 mx-auto w-4 h-4" />
                <div className="font-medium">Score {'>'} Threshold?</div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-center" data-testid="flag-suspicious-path">
                  <div className="text-sm text-chart-2 font-medium mb-2">Yes</div>
                  <div className="text-xs text-muted-foreground mb-4">↓</div>
                  <Card className="bg-chart-4/20 border border-chart-4">
                    <CardContent className="px-4 py-3">
                      <Flag className="text-chart-4 mb-2 mx-auto w-4 h-4" />
                      <div className="font-medium text-sm text-chart-4">Flag as Suspicious</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center" data-testid="mark-valid-path">
                  <div className="text-sm text-chart-2 font-medium mb-2">No</div>
                  <div className="text-xs text-muted-foreground mb-4">↓</div>
                  <Card className="bg-chart-2/20 border border-chart-2">
                    <CardContent className="px-4 py-3">
                      <CheckCircle className="text-chart-2 mb-2 mx-auto w-4 h-4" />
                      <div className="font-medium text-sm text-chart-2">Mark as Valid</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center" data-testid={`process-step-${index}`}>
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">{step.number}</span>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
