import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import {
  Workflow,
  BarChart3,
  Globe,
  Mail,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  GitBranch,
  Database,
  Monitor,
  Users,
  FileText,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "CI/CD Pipeline Automation",
    description:
      "Automate build, testing, and deployment of SAP Integration Suite artifacts with our intelligent 8-stage pipeline.",
    href: "/cicd",
    color: "from-blue-500 to-blue-600",
    highlights: [
      "Package & iFlow Management",
      "Configuration Validation",
      "Automated Testing & Deployment",
      "Compliance Checking",
    ],
  },
  {
    icon: BarChart3,
    title: "Real-time Dashboard",
    description:
      "Monitor and manage CI/CD pipelines with comprehensive visualizations and real-time status updates.",
    href: "/dashboard",
    color: "from-green-500 to-green-600",
    highlights: [
      "Pipeline Performance Metrics",
      "Success/Failure Analytics",
      "Real-time Status Monitoring",
      "Role-based Access Control",
    ],
  },
  {
    icon: Globe,
    title: "Environment Management",
    description:
      "Securely manage connection details and configurations across multiple environments.",
    href: "/environments",
    color: "from-purple-500 to-purple-600",
    highlights: [
      "Multi-environment Support",
      "Secure Credential Storage",
      "Connection Validation",
      "Easy Configuration Updates",
    ],
  },
  {
    icon: Mail,
    title: "Contact & Support",
    description:
      "Get expert support and connect with our team for assistance with your CI/CD automation needs.",
    href: "/contact",
    color: "from-orange-500 to-orange-600",
    highlights: [
      "Expert Technical Support",
      "Direct Communication",
      "Issue Reporting",
      "24/7 Assistance",
    ],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Reduce deployment time by 80% with automated pipelines",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with comprehensive audit trails",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Continuous monitoring with real-time alerts",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Integrated Git support with rollback capabilities",
  },
  {
    icon: Database,
    title: "Data Integrity",
    description: "Ensure data consistency across all environments",
  },
  {
    icon: Monitor,
    title: "Real-time Insights",
    description: "Comprehensive analytics and performance metrics",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sap-50 via-white to-sap-100/50 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              <Zap className="h-3 w-3 mr-1" />
              Next-Generation CI/CD Automation
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Automate Your{" "}
              <span className="bg-gradient-to-r from-sap-600 to-sap-800 bg-clip-text text-transparent">
                SAP Integration
              </span>{" "}
              Pipeline
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Streamline your SAP Cloud Integration operations with our
              comprehensive CI/CD automation platform. Deploy faster, monitor
              better, and scale with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link to="/cicd">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8 py-3"
                >
                  Start Pipeline Automation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8 py-3"
                >
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Complete CI/CD Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to automate, monitor, and manage your SAP
              Integration Suite deployments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50"
              >
                <CardHeader className="space-y-4">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.color} text-white shadow-lg`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Link to={feature.href}>
                    <Button
                      variant="ghost"
                      className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Explore {feature.title.split(" ")[0]}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose Our Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built specifically for SAP Integration Suite with enterprise-grade
              features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group p-6 rounded-xl bg-background border hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Ready to Transform Your{" "}
                <span className="bg-gradient-to-r from-sap-600 to-sap-800 bg-clip-text text-transparent">
                  CI/CD Operations?
                </span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of enterprises already automating their SAP
                Integration Suite deployments
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/cicd">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-lg px-8 py-3"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto text-lg px-8 py-3"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Talk to Our Team
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Enterprise Security
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  24/7 Support
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  SOC 2 Compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Settings className="h-4 w-4" />
              </div>
              <span className="font-semibold">
                SAP CI/CD Automation Platform
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 SAP CI/CD Platform. Built for enterprise automation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
