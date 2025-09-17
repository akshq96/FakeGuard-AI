import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Shield, AlertTriangle, CheckCircle, Clock, MapPin, Smartphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertTransaction } from "@shared/schema";

interface FraudAnalysisResult {
  transaction: any;
  analysis: {
    fraudScore: number;
    riskFactors: string[];
    status: string;
    analysisId: string;
  };
}

export default function FraudDetection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<InsertTransaction>({
    accountId: "",
    amount: "",
    location: "",
    device: "",
    merchant: "",
    fraudScore: 0,
    riskFactors: [],
    status: "pending",
    anomalyScore: null,
    patternScore: null,
    correlationScore: null,
    deviceFingerprint: null,
    ipAddress: null,
    userAgent: null
  });

  const [analysisResult, setAnalysisResult] = useState<FraudAnalysisResult | null>(null);

  const analyzeTransactionMutation = useMutation({
    mutationFn: async (data: InsertTransaction) => {
      const response = await apiRequest("POST", "/api/analyze-transaction", data);
      return response.json();
    },
    onSuccess: (result) => {
      setAnalysisResult(result);
      toast({
        title: "Analysis Complete",
        description: `Fraud score: ${result.analysis.fraudScore}% - ${result.analysis.status}`,
      });
    },
    onError: (error) => {
      toast({
        title: "Analysis Failed",
        description: "Failed to analyze transaction. Please try again.",
        variant: "destructive"
      });
      console.error("Analysis error:", error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.accountId || !formData.amount || !formData.location || !formData.device || !formData.merchant) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Generate additional IoT device data simulation
    const enhancedData = {
      ...formData,
      deviceFingerprint: `fp_${Math.random().toString(36).substr(2, 9)}`,
      ipAddress: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
      userAgent: `${formData.device} - ${navigator.userAgent.split(' ')[0]}`
    };

    analyzeTransactionMutation.mutate(enhancedData);
  };

  const handleInputChange = (field: keyof InsertTransaction, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "bg-green-500";
      case "flagged": return "bg-yellow-500";
      case "blocked": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved": return <CheckCircle className="w-4 h-4" />;
      case "flagged": return <AlertTriangle className="w-4 h-4" />;
      case "blocked": return <Shield className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Fraud Detection System</h1>
          <p className="text-muted-foreground">
            Enter transaction data to analyze fraud risk using our three-stage detection system
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="bg-card border border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="text-primary w-5 h-5" />
                <span>Transaction Data Input</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="fraud-detection-form">
                <div className="space-y-2">
                  <Label htmlFor="accountId">Account ID *</Label>
                  <Input
                    id="accountId"
                    type="text"
                    placeholder="ACC-****-1234"
                    value={formData.accountId}
                    onChange={(e) => handleInputChange("accountId", e.target.value)}
                    className="bg-background border border-border"
                    data-testid="input-account-id"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Transaction Amount *</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    placeholder="1000.00"
                    value={formData.amount}
                    onChange={(e) => handleInputChange("amount", e.target.value)}
                    className="bg-background border border-border"
                    data-testid="input-amount"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="New York, USA"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="bg-background border border-border"
                    data-testid="input-location"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="device">Device Type *</Label>
                  <Input
                    id="device"
                    type="text"
                    placeholder="iPhone 14 Pro"
                    value={formData.device}
                    onChange={(e) => handleInputChange("device", e.target.value)}
                    className="bg-background border border-border"
                    data-testid="input-device"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="merchant">Merchant *</Label>
                  <Input
                    id="merchant"
                    type="text"
                    placeholder="Amazon Online Store"
                    value={formData.merchant}
                    onChange={(e) => handleInputChange("merchant", e.target.value)}
                    className="bg-background border border-border"
                    data-testid="input-merchant"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={analyzeTransactionMutation.isPending}
                  data-testid="button-analyze"
                >
                  {analyzeTransactionMutation.isPending ? "Analyzing..." : "Analyze Transaction"}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">IoT Data Simulation</h4>
                <p className="text-sm text-muted-foreground">
                  Additional device fingerprint, IP address, and user agent data will be automatically generated 
                  to simulate IoT device data collection during analysis.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Results Display */}
          <Card className="bg-card border border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="text-primary w-5 h-5" />
                <span>Fraud Analysis Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {analysisResult ? (
                <div className="space-y-6">
                  {/* Overall Score */}
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2" data-testid="fraud-score-result">
                      {analysisResult.analysis.fraudScore}%
                    </div>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Badge 
                        className={`${getStatusColor(analysisResult.analysis.status)} text-white`}
                        data-testid="fraud-status-result"
                      >
                        {getStatusIcon(analysisResult.analysis.status)}
                        <span className="ml-1 uppercase">{analysisResult.analysis.status}</span>
                      </Badge>
                    </div>
                    <Progress 
                      value={analysisResult.analysis.fraudScore} 
                      className="w-full h-3"
                      data-testid="fraud-score-progress"
                    />
                  </div>

                  <Separator />

                  {/* Detection Methods */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Detection Method Results</h4>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center justify-between p-3 bg-background rounded-lg" data-testid="anomaly-detection-result">
                        <div className="flex items-center space-x-2">
                          <Shield className="text-primary w-4 h-4" />
                          <span className="text-sm">Anomaly Detection</span>
                        </div>
                        <Badge variant="outline">Isolation Forest</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-background rounded-lg" data-testid="pattern-recognition-result">
                        <div className="flex items-center space-x-2">
                          <Clock className="text-chart-2 w-4 h-4" />
                          <span className="text-sm">Pattern Recognition</span>
                        </div>
                        <Badge variant="outline">LSTM Networks</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-background rounded-lg" data-testid="correlation-analysis-result">
                        <div className="flex items-center space-x-2">
                          <MapPin className="text-chart-3 w-4 h-4" />
                          <span className="text-sm">Correlation Analysis</span>
                        </div>
                        <Badge variant="outline">Random Forest</Badge>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Risk Factors */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Risk Factors Detected</h4>
                    <div className="space-y-2">
                      {analysisResult.analysis.riskFactors.length > 0 ? (
                        analysisResult.analysis.riskFactors.map((factor, index) => (
                          <div 
                            key={index} 
                            className="flex items-center space-x-2 p-2 bg-destructive/10 rounded-lg"
                            data-testid={`risk-factor-${index}`}
                          >
                            <AlertTriangle className="text-destructive w-4 h-4" />
                            <span className="text-sm">{factor}</span>
                          </div>
                        ))
                      ) : (
                        <div className="flex items-center space-x-2 p-2 bg-green-500/10 rounded-lg">
                          <CheckCircle className="text-green-500 w-4 h-4" />
                          <span className="text-sm">No significant risk factors detected</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Transaction Details */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Transaction Details</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Amount:</span>
                        <div className="font-medium" data-testid="result-amount">${analysisResult.transaction.amount}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Location:</span>
                        <div className="font-medium" data-testid="result-location">{analysisResult.transaction.location}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Device:</span>
                        <div className="font-medium" data-testid="result-device">{analysisResult.transaction.device}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Merchant:</span>
                        <div className="font-medium" data-testid="result-merchant">{analysisResult.transaction.merchant}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Smartphone className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Enter transaction data and click "Analyze Transaction" to see fraud detection results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}