import { Search, TrendingUp, Network, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FeatureHighlights() {
  const features = [
    {
      icon: Search,
      title: "Anomaly Detection",
      color: "primary",
      description: "Advanced Isolation Forest algorithms identify unusual patterns and suspicious behavior in real-time, flagging potential fraud before it impacts your business.",
      capabilities: [
        "Real-time outlier detection",
        "Behavioral analysis", 
        "Automated risk scoring"
      ]
    },
    {
      icon: TrendingUp,
      title: "Pattern Recognition",
      color: "chart-2",
      description: "LSTM neural networks analyze time-series data to learn from historical patterns and predict fraudulent activities with exceptional accuracy.",
      capabilities: [
        "Time-series analysis",
        "Predictive modeling",
        "Continuous learning"
      ]
    },
    {
      icon: Network,
      title: "Correlation Analysis", 
      color: "chart-3",
      description: "Random Forest algorithms correlate multiple data points including location, transaction history, and device information for comprehensive risk assessment.",
      capabilities: [
        "Cross-sensor validation",
        "Multi-dimensional analysis",
        "Risk correlation matrix"
      ]
    }
  ];

  return (
    <section id="features" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Comprehensive Fraud Detection</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI system employs multiple advanced techniques to identify and prevent fraudulent activities across all touchpoints.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border border-border card-hover" data-testid={`feature-card-${index}`}>
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-${feature.color}/10 rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className={`text-${feature.color} w-8 h-8`} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
                <div className="space-y-3">
                  {feature.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center space-x-2">
                      <CheckCircle className={`text-${feature.color} w-4 h-4`} />
                      <span className="text-sm">{capability}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
