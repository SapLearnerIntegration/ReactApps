import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Activity,
  Users,
  Zap,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">CI/CD Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor and manage your SAP Integration Suite CI/CD pipelines in
            real-time
          </p>
        </div>

        {/* Coming Soon Message */}
        <Card className="mb-8 border-2 border-dashed border-primary/20">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <BarChart3 className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Dashboard Coming Soon</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We're building an intuitive dashboard to monitor pipeline
              performance, success rates, and deployment history. This
              comprehensive monitoring solution will be available soon.
            </p>
            <Badge variant="secondary" className="mb-6">
              <Clock className="h-3 w-3 mr-1" />
              In Development
            </Badge>
          </CardContent>
        </Card>

        {/* Preview Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-500" />
                Real-time Monitoring
              </CardTitle>
              <CardDescription>
                Live pipeline status and execution tracking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Monitor active pipelines, view real-time logs, and get instant
                notifications about deployment status changes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                Performance Analytics
              </CardTitle>
              <CardDescription>
                Comprehensive metrics and insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Track success rates, deployment frequency, and performance
                trends with interactive charts and detailed reports.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-500" />
                Role-based Access
              </CardTitle>
              <CardDescription>
                Secure access control and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Manage user permissions, control access to sensitive operations,
                and maintain audit trails for compliance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Success Tracking
              </CardTitle>
              <CardDescription>
                Deployment success and failure analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Visualize deployment success rates, identify failure patterns,
                and optimize your CI/CD processes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                Alert Management
              </CardTitle>
              <CardDescription>
                Proactive monitoring and notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Set up custom alerts, receive notifications via email or Slack,
                and stay informed about critical issues.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-orange-500" />
                Quick Actions
              </CardTitle>
              <CardDescription>One-click pipeline operations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Start, stop, or rollback deployments with a single click. Quick
                access to common pipeline operations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Want Early Access?</h3>
            <p className="text-muted-foreground mb-4">
              Be the first to experience our comprehensive dashboard when it
              launches
            </p>
            <Button>Get Notified</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
