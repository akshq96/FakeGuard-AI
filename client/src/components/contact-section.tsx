import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertDemoRequest } from "@shared/schema";

export function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<InsertDemoRequest>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    industry: "",
    message: ""
  });

  const demoRequestMutation = useMutation({
    mutationFn: async (data: InsertDemoRequest) => {
      const response = await apiRequest("POST", "/api/demo-requests", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Demo Request Submitted",
        description: "We will contact you within 24 hours to schedule your demo.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        industry: "",
        message: ""
      });
      queryClient.invalidateQueries({ queryKey: ["/api/demo-requests"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive"
      });
      console.error("Demo request error:", error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName || !formData.lastName) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    demoRequestMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertDemoRequest, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Protect Your Business?</h2>
        <p className="text-xl text-muted-foreground mb-12">
          Get started with our AI fraud detection system today and safeguard your transactions from sophisticated threats.
        </p>
        
        <Card className="bg-card border border-border max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6">Request a Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-4" data-testid="demo-request-form">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="bg-background border border-border"
                  data-testid="input-first-name"
                  required
                />
                <Input
                  type="text"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="bg-background border border-border"
                  data-testid="input-last-name"
                  required
                />
              </div>
              <Input
                type="email"
                placeholder="Business Email *"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-background border border-border"
                data-testid="input-email"
                required
              />
              <Input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="bg-background border border-border"
                data-testid="input-company"
              />
              <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                <SelectTrigger className="bg-background border border-border" data-testid="select-industry">
                  <SelectValue placeholder="Select Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fintech">Fintech</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="banking">Banking</SelectItem>
                  <SelectItem value="insurance">Insurance</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Tell us about your fraud detection needs..."
                rows={4}
                value={formData.message || ""}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="bg-background border border-border resize-none"
                data-testid="textarea-message"
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={demoRequestMutation.isPending}
                data-testid="button-schedule-demo"
              >
                {demoRequestMutation.isPending ? "Submitting..." : "Schedule Demo"}
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="flex items-center space-x-2" data-testid="button-call-sales">
                  <Phone className="w-4 h-4" />
                  <span>Call Sales: 1-800-FRAUD-AI</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2" data-testid="button-email-demo">
                  <Mail className="w-4 h-4" />
                  <span>Email: demo@fraudguard.ai</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
