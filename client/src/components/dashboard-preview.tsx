import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockMetrics, mockAlerts, mockSystemStatus } from "@/lib/mock-data";

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Real-time Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor fraud detection metrics, alerts, and system performance through our comprehensive dashboard interface.
          </p>
        </div>
        
        <Card className="bg-card border border-border">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Key Metrics */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Key Metrics</h3>
                <div className="space-y-4">
                  <Card className="bg-background">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Fraud Score</span>
                        <Badge variant="destructive" className="text-xs">High Risk</Badge>
                      </div>
                      <div className="text-2xl font-bold text-chart-4" data-testid="fraud-score">
                        {mockMetrics.fraudScore}%
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
                        <div 
                          className="bg-chart-4 h-2 rounded-full" 
                          style={{width: `${mockMetrics.fraudScore}%`}}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-background">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Detection Rate</span>
                        <span className="text-sm font-medium text-chart-2">
                          {mockMetrics.detectionRate}%
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-chart-2" data-testid="threats-detected">
                        {mockMetrics.threatsDetected}
                      </div>
                      <div className="text-sm text-muted-foreground">threats detected today</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-background">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Response Time</span>
                        <Badge variant="outline" className="text-xs border-primary text-primary">
                          Optimal
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold text-primary" data-testid="response-time">
                        {mockMetrics.responseTime}ms
                      </div>
                      <div className="text-sm text-muted-foreground">average response</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Live Alerts */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Live Alerts</h3>
                <div className="space-y-3">
                  {mockAlerts.map((alert) => (
                    <Card 
                      key={alert.id} 
                      className={`bg-${alert.color}/10 border border-${alert.color}/20`}
                      data-testid={`alert-${alert.id}`}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-sm font-medium text-${alert.color}`}>
                            {alert.type}
                          </span>
                          <span className="text-xs text-muted-foreground">{alert.timeAgo}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {alert.account && `Account: ${alert.account} | Amount: ${alert.amount}`}
                          {alert.description}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* System Status */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">System Status</h3>
                <div className="space-y-4">
                  {mockSystemStatus.map((system, index) => (
                    <Card key={index} className="bg-background" data-testid={`system-status-${index}`}>
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 bg-${system.color} rounded-full ${system.status === 'Active' ? 'pulse-animation' : ''}`} />
                            <span className="text-sm">{system.name}</span>
                          </div>
                          <span className={`text-sm font-medium text-${system.color}`}>
                            {system.status}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
