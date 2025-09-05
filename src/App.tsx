import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Shield, Eye, BarChart3, FileText, AlertTriangle, Users, Zap, Cloud, Lock, CheckCircle, Star, ArrowRight } from "lucide-react";
import exampleImage from 'figma:asset/d5562842b2f2e096e24402d3e9f1982ab61bf666.png';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-semibold">BrokEase</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground">Features</a>
              <a href="#technology" className="text-muted-foreground hover:text-foreground">Technology</a>
              <a href="#demo" className="text-muted-foreground hover:text-foreground">Demo</a>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Compliance & Surveillance Simplified</Badge>
              <h1 className="mb-6">
                Cloud-Based Compliance Platform for Small & Mid-Size Brokers
              </h1>
              <p className="mb-8 text-muted-foreground">
                Automate compliance checks, monitor client behavior, and generate regulator-ready reports with our affordable, 
                lightweight platform designed specifically for growing brokerage firms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex items-center">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">Schedule Demo</Button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm">No Heavy IT Infrastructure</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm">Plug & Play Solution</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1748439281934-2803c6a3ee36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NzA5MjIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Financial Technology Dashboard"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Key Features</Badge>
            <h2 className="mb-4">Everything You Need for Compliance & Surveillance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform combines automated compliance monitoring, AI-driven surveillance, 
              and business intelligence in one affordable solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle>Compliance Monitoring</CardTitle>
                <CardDescription>
                  Automated checks for regulatory requirements including margin limits, exposure, KYC, and timely reporting.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle>AI-Powered Surveillance</CardTitle>
                <CardDescription>
                  Machine learning-based anomaly detection to flag suspicious client behavior like wash trades and insider patterns.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-green-600 mb-4" />
                <CardTitle>Business Dashboard</CardTitle>
                <CardDescription>
                  Visual KPIs for trade volumes, revenues, risk exposure, and compliance health in real-time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-orange-600 mb-4" />
                <CardTitle>Automated Reporting</CardTitle>
                <CardDescription>
                  One-click PDF/Excel reports in regulator-accepted formats, saving hours of manual work.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="h-10 w-10 text-red-600 mb-4" />
                <CardTitle>Smart Alerts</CardTitle>
                <CardDescription>
                  Email/SMS notifications for violations or risks with traffic-light system for quick assessment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Cloud className="h-10 w-10 text-indigo-600 mb-4" />
                <CardTitle>Cloud-Based SaaS</CardTitle>
                <CardDescription>
                  Scalable, secure cloud platform accessible via web or mobile with no infrastructure requirements.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="technology" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Technology Stack</Badge>
            <h2 className="mb-4">Built with Modern, Reliable Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform leverages cutting-edge technologies to deliver superior performance, security, and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Backend</CardTitle>
                <CardDescription>Python (FastAPI) / Node.js for APIs and compliance rule engine</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-lg">Frontend</CardTitle>
                <CardDescription>React.js with TailwindCSS for interactive dashboards</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Database</CardTitle>
                <CardDescription>PostgreSQL / MongoDB for structured broker and client trade data</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">AI/ML</CardTitle>
                <CardDescription>Lightweight anomaly detection models for unusual trading activity</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Cloud className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <CardTitle>Cloud Infrastructure</CardTitle>
                <CardDescription>AWS / Azure / GCP for hosting and scalability</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <FileText className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <CardTitle>Reporting Engine</CardTitle>
                <CardDescription>Auto PDF/Excel generation using Python libraries</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Lock className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <CardTitle>Security</CardTitle>
                <CardDescription>Role-based access control, data encryption at rest and in transit</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Live Demo</Badge>
            <h2 className="mb-4">See BrokEase in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience our intuitive dashboard that provides real-time compliance status, 
              business health metrics, and alert management.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden border">
              <img src={exampleImage} alt="BrokEase Dashboard Demo" className="w-full h-auto" />
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-2">Real-time Status</h3>
              <p className="text-muted-foreground">Instant compliance status with green/yellow/red indicators</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2">Business Metrics</h3>
              <p className="text-muted-foreground">Track trade volumes, revenue, and risk exposure</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-2">Active Alerts</h3>
              <p className="text-muted-foreground">Monitor suspicious activities and compliance violations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Who We Serve</Badge>
            <h2 className="mb-4">Built for Growing Brokerage Firms</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              BrokEase is specifically designed for small and mid-size brokers who need enterprise-grade 
              compliance tools without the enterprise price tag.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Small & Mid-Size Brokers</CardTitle>
                <CardDescription>
                  Growing brokerage firms that need affordable compliance solutions without sacrificing functionality or quality.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Compliance Officers</CardTitle>
                <CardDescription>
                  Professionals responsible for ensuring regulatory compliance who need efficient tools to monitor and report.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Regulatory Teams</CardTitle>
                <CardDescription>
                  Teams handling regulatory reporting who require automated, accurate, and timely report generation.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h3 className="mb-8">Why Choose BrokEase?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="mb-2">Affordable</h4>
                <p className="text-muted-foreground text-sm">Subscription-based pricing accessible to all broker sizes</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="mb-2">Simple</h4>
                <p className="text-muted-foreground text-sm">Plug-and-play solution with minimal setup required</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="mb-2">AI-Powered</h4>
                <p className="text-muted-foreground text-sm">Advanced surveillance with machine learning capabilities</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="mb-2">Comprehensive</h4>
                <p className="text-muted-foreground text-sm">Complete compliance, surveillance, and reporting solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Democratizing Compliance Technology</h2>
          <p className="mb-8 opacity-90">
            Unlike existing compliance systems that are expensive or fragmented, BrokEase enables fair competition 
            in the stock broking ecosystem, improves market integrity, and safeguards investor interests by making 
            compliance technology accessible to thousands of small brokers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="flex items-center">
              Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-primary mr-2" />
              <span className="font-semibold">BrokEase</span>
              <span className="ml-4 text-muted-foreground">Compliance & Surveillance Simplified</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2025 BrokEase. All rights reserved. Built for the future of compliance technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}