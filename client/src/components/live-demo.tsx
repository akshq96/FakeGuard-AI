import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Network, Shield } from "lucide-react";
import { mockTransaction, mockRiskFactors } from "@/lib/mock-data";

export function LiveDemo() {
  return (
    <section id="demo" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Live Demo</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our fraud detection system in action with real-time transaction analysis and risk scoring.
          </p>
        </div>

        <Card className="bg-card border border-border">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Sample Transaction Data */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Incoming Transaction</h3>
                <div className="space-y-4">
                  <Card className="bg-background">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Account ID:</span>
                          <div className="font-mono" data-testid="demo-account-id">
                            {mockTransaction.accountId}
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Amount:</span>
                          <div className="font-bold" data-testid="demo-amount">
                            {mockTransaction.amount}
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Location:</span>
                          <div data-testid="demo-location">{mockTransaction.location}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Device:</span>
                          <div data-testid="demo-device">{mockTransaction.device}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Time:</span>
                          <div data-testid="demo-time">{mockTransaction.time}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Merchant:</span>
                          <div data-testid="demo-merchant">{mockTransaction.merchant}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Real-time Analysis */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Analysis in Progress</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm" data-testid="analysis-anomaly">
                        <span className="flex items-center space-x-2">
                          <Search className="text-primary w-4 h-4" />
                          <span>Anomaly Detection</span>
                        </span>
                        <Badge variant="destructive" className="text-xs">Risk: High</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm" data-testid="analysis-pattern">
                        <span className="flex items-center space-x-2">
                          <TrendingUp className="text-chart-2 w-4 h-4" />
                          <span>Pattern Analysis</span>
                        </span>
                        <Badge variant="outline" className="text-xs border-chart-3 text-chart-3">
                          Unusual Pattern
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm" data-testid="analysis-correlation">
                        <span className="flex items-center space-x-2">
                          <Network className="text-chart-3 w-4 h-4" />
                          <span>Correlation Check</span>
                        </span>
                        <Badge variant="destructive" className="text-xs">Multiple Flags</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time Fraud Scoring */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Risk Assessment</h3>
                <div className="space-y-6">
                  {/* Overall Fraud Score */}
                  <Card className="bg-background">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-medium">Overall Fraud Score</span>
                        <span className="text-2xl font-bold text-chart-4" data-testid="overall-fraud-score">
                          87%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div 
                          className="bg-chart-4 h-3 rounded-full transition-all duration-1000" 
                          style={{width: "87%"}}
                        />
                      </div>
                      <div className="mt-2 text-sm text-chart-4 font-medium" data-testid="fraud-decision">
                        HIGH RISK - TRANSACTION BLOCKED
                      </div>
                    </CardContent>
                  </Card>

                  {/* Risk Factors */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Risk Factors Detected</h4>
                    <div className="space-y-3">
                      {mockRiskFactors.map((factor, index) => (
                        <Card 
                          key={index} 
                          className="bg-chart-4/10 border border-chart-4/20"
                          data-testid={`risk-factor-${index}`}
                        >
                          <CardContent className="p-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="text-chart-4">
                                  {factor.icon === 'map-marker-alt' && '📍'}
                                  {factor.icon === 'clock' && '🕐'}
                                  {factor.icon === 'dollar-sign' && '💰'}
                                </div>
                                <span className="text-sm">{factor.name}</span>
                              </div>
                              <span className="text-sm font-medium text-chart-4">
                                {factor.impact}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Action Taken */}
                  <Card className="bg-chart-4/10 border border-chart-4">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <Shield className="text-chart-4 w-4 h-4" />
                        <span className="font-semibold text-chart-4">Action Taken</span>
                      </div>
                      <p className="text-sm text-muted-foreground" data-testid="action-description">
                        Transaction automatically blocked and flagged for manual review. User notified via SMS and email.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
