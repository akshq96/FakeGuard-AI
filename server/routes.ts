import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDemoRequestSchema, insertTransactionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Demo request submission endpoint
  app.post("/api/demo-requests", async (req, res) => {
    try {
      const validatedData = insertDemoRequestSchema.parse(req.body);
      const demoRequest = await storage.createDemoRequest(validatedData);
      res.json(demoRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get all demo requests (admin endpoint)
  app.get("/api/demo-requests", async (req, res) => {
    try {
      const requests = await storage.getAllDemoRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Transaction analysis endpoint
  app.post("/api/analyze-transaction", async (req, res) => {
    try {
      const transactionData = insertTransactionSchema.parse(req.body);
      
      // Create transaction record first
      const transaction = await storage.createTransaction(transactionData);
      
      // Then analyze it
      const analysis = await storage.analyzeTransaction(transactionData);
      
      res.json({
        transaction,
        analysis
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid transaction data", errors: error.errors });
      } else {
        console.error("Transaction analysis error:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get all transactions endpoint
  app.get("/api/transactions", async (req, res) => {
    try {
      const transactions = await storage.getAllTransactions();
      res.json(transactions);
    } catch (error) {
      console.error("Get transactions error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get specific transaction endpoint
  app.get("/api/transactions/:id", async (req, res) => {
    try {
      const transaction = await storage.getTransaction(req.params.id);
      if (!transaction) {
        res.status(404).json({ message: "Transaction not found" });
        return;
      }
      
      const analysis = await storage.getFraudAnalysis(transaction.id);
      res.json({ transaction, analysis });
    } catch (error) {
      console.error("Get transaction error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get fraud metrics endpoint
  app.get("/api/metrics", async (req, res) => {
    try {
      const metrics = await storage.getFraudMetrics();
      res.json(metrics);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
