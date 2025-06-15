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
  Globe,
  Shield,
  Database,
  Key,
  Lock,
  Settings,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function Environments() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Environment Management</h1>
          <p className="text-muted-foreground">
            Securely manage connection details and configurations across
            multiple environments
          </p>
        </div>

        {/* Coming Soon Message */}
        <Card className="mb-8 border-2 border-dashed border-primary/20">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Environment Management Coming Soon
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We're developing a secure environment management system to store
              and manage connection details for your SAP Integration Suite
              environments with enterprise-grade security.
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
                <Shield className="h-5 w-5 text-green-500" />
                Secure Storage
              </CardTitle>
              <CardDescription>
                Enterprise-grade credential protection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Store sensitive connection details using industry-standard
                encryption with HashiCorp Vault or AWS Secrets Manager
                integration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-500" />
                Multi-Environment
              </CardTitle>
              <CardDescription>
                Development, testing, and production
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Manage configurations for multiple environments with isolated
                credentials and easy switching between environments.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500" />
                Connection Testing
              </CardTitle>
              <CardDescription>
                Validate connectivity and credentials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Test connection details before deployment, validate credentials,
                and ensure system connectivity across all environments.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5 text-orange-500" />
                API Key Management
              </CardTitle>
              <CardDescription>
                Secure API key and token handling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Manage OAuth tokens, API keys, and certificates with automatic
                rotation and expiration monitoring.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-indigo-500" />
                Configuration Management
              </CardTitle>
              <CardDescription>Environment-specific settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Store environment-specific configurations, URLs, and settings
                with easy updates without redeploying artifacts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-red-500" />
                Access Control
              </CardTitle>
              <CardDescription>
                Role-based permissions and audit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Control access to sensitive environment data with role-based
                permissions and comprehensive audit logging.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Environment Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-2 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  Development
                </span>
                <Badge variant="outline">DEV</Badge>
              </CardTitle>
              <CardDescription>
                Development environment for testing integrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Sandbox tenant connections</p>
                <p>• Test data configurations</p>
                <p>• Debug-enabled settings</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 dark:border-yellow-800">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  Testing
                </span>
                <Badge variant="outline">TEST</Badge>
              </CardTitle>
              <CardDescription>
                Pre-production testing environment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Production-like data</p>
                <p>• Performance testing</p>
                <p>• UAT configurations</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  Production
                </span>
                <Badge variant="outline">PROD</Badge>
              </CardTitle>
              <CardDescription>Live production environment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Live system connections</p>
                <p>• High-security settings</p>
                <p>• Monitoring enabled</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">
              Secure Environment Management
            </h3>
            <p className="text-muted-foreground mb-4">
              Get notified when our secure environment management system
              launches with enterprise-grade security
            </p>
            <Button>Get Early Access</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
