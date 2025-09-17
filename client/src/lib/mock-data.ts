export const mockMetrics = {
  fraudScore: 87,
  detectionRate: 99.7,
  responseTime: 42,
  threatsDetected: 847,
  transactionsPerMinute: 12300,
};

export const mockAlerts = [
  {
    id: "1",
    type: "High Risk Transaction",
    severity: "high",
    account: "****2847",
    amount: "$12,450",
    timeAgo: "2m ago",
    color: "chart-4"
  },
  {
    id: "2",
    type: "Unusual Pattern",
    severity: "medium",
    description: "Multiple location logins detected",
    timeAgo: "5m ago",
    color: "chart-3"
  },
  {
    id: "3",
    type: "Anomaly Detected",
    severity: "medium",
    description: "Device fingerprint mismatch",
    timeAgo: "8m ago",
    color: "primary"
  },
  {
    id: "4",
    type: "Transaction Approved",
    severity: "low",
    description: "Low risk score: 12%",
    timeAgo: "12m ago",
    color: "chart-2"
  }
];

export const mockTransaction = {
  accountId: "ACC-****-2847",
  amount: "$12,450.00",
  location: "Lagos, Nigeria",
  device: "iPhone 14 Pro",
  time: "3:42 AM UTC",
  merchant: "Online Electronics"
};

export const mockRiskFactors = [
  {
    name: "Unusual Location",
    impact: "+35%",
    icon: "map-marker-alt"
  },
  {
    name: "Off-hours Transaction",
    impact: "+25%",
    icon: "clock"
  },
  {
    name: "High Amount",
    impact: "+27%",
    icon: "dollar-sign"
  }
];

export const mockSystemStatus = [
  {
    name: "Anomaly Detection",
    status: "Active",
    color: "chart-2"
  },
  {
    name: "Pattern Recognition", 
    status: "Active",
    color: "chart-2"
  },
  {
    name: "Correlation Engine",
    status: "Active", 
    color: "chart-2"
  },
  {
    name: "API Health",
    status: "99.9%",
    color: "primary"
  }
];

export const mockTechStack = {
  aiFramework: [
    { name: "Python 3.9+", icon: "python" },
    { name: "TensorFlow 2.8", icon: "brain" },
    { name: "Scikit-Learn", icon: "chart-area" },
    { name: "Pandas & NumPy", icon: "database" }
  ],
  algorithms: [
    { name: "Isolation Forest", code: "IF" },
    { name: "LSTM Networks", code: "LSTM" },
    { name: "Random Forest", code: "RF" },
    { name: "XGBoost", code: "XG" }
  ],
  frontend: [
    { name: "React 18", icon: "react" },
    { name: "Chart.js", icon: "chart-line" },
    { name: "FastAPI", icon: "server" },
    { name: "AWS/GCP", icon: "cloud" }
  ]
};

export const mockPerformanceMetrics = [
  { label: "Accuracy", value: "99.7%", color: "primary" },
  { label: "Avg Response", value: "42ms", color: "chart-2" },
  { label: "TPS Capacity", value: "10K+", color: "chart-3" },
  { label: "Uptime", value: "99.9%", color: "chart-4" }
];
