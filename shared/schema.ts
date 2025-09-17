import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, integer, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const demoRequests = pgTable("demo_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  industry: text("industry").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const transactions = pgTable("transactions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  accountId: text("account_id").notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  location: text("location").notNull(),
  device: text("device").notNull(),
  merchant: text("merchant").notNull(),
  timestamp: timestamp("timestamp").defaultNow(),
  fraudScore: integer("fraud_score").notNull(),
  riskFactors: jsonb("risk_factors").$type<string[]>(),
  status: text("status").notNull(), // 'approved', 'blocked', 'flagged'
  anomalyScore: integer("anomaly_score"),
  patternScore: integer("pattern_score"),
  correlationScore: integer("correlation_score"),
  deviceFingerprint: text("device_fingerprint"),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
});

export const fraudAnalysisResults = pgTable("fraud_analysis_results", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  transactionId: varchar("transaction_id").notNull(),
  overallScore: integer("overall_score").notNull(),
  anomalyDetectionResult: jsonb("anomaly_detection_result").$type<{score: number; outliers: string[]; confidence: number}>(),
  patternRecognitionResult: jsonb("pattern_recognition_result").$type<{score: number; patterns: string[]; timeSeriesData: number[]}>(),
  correlationAnalysisResult: jsonb("correlation_analysis_result").$type<{score: number; correlations: string[]; crossValidation: boolean}>(),
  finalDecision: text("final_decision").notNull(), // 'approved', 'blocked', 'flagged'
  processingTime: integer("processing_time_ms"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDemoRequestSchema = createInsertSchema(demoRequests).omit({
  id: true,
  createdAt: true,
});

export const insertTransactionSchema = createInsertSchema(transactions).omit({
  id: true,
  timestamp: true,
});

export const insertFraudAnalysisSchema = createInsertSchema(fraudAnalysisResults).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertDemoRequest = z.infer<typeof insertDemoRequestSchema>;
export type DemoRequest = typeof demoRequests.$inferSelect;
export type InsertTransaction = z.infer<typeof insertTransactionSchema>;
export type Transaction = typeof transactions.$inferSelect;
export type InsertFraudAnalysis = z.infer<typeof insertFraudAnalysisSchema>;
export type FraudAnalysisResult = typeof fraudAnalysisResults.$inferSelect;
