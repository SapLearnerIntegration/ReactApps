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
  Mail,
  Phone,
  MessageSquare,
  Clock,
  Users,
  HeadphonesIcon,
  FileText,
  Send,
} from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Contact & Support</h1>
          <p className="text-muted-foreground">
            Get expert support and connect with our team for assistance with
            your CI/CD automation needs
          </p>
        </div>

        {/* Coming Soon Message */}
        <Card className="mb-8 border-2 border-dashed border-primary/20">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Contact System Coming Soon
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We're building a comprehensive contact and support system to
              provide you with the best assistance for your SAP CI/CD automation
              platform needs.
            </p>
            <Badge variant="secondary" className="mb-6">
              <Clock className="h-3 w-3 mr-1" />
              In Development
            </Badge>
          </CardContent>
        </Card>

        {/* Contact Methods Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <CardTitle className="text-lg">Email Support</CardTitle>
              <CardDescription>Direct email communication</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Send detailed inquiries and get comprehensive responses from our
                support team
              </p>
              <Badge variant="outline">24/7 Response</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <CardTitle className="text-lg">Phone Support</CardTitle>
              <CardDescription>Direct phone assistance</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Speak directly with our technical experts for immediate
                assistance
              </p>
              <Badge variant="outline">Business Hours</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <CardTitle className="text-lg">Live Chat</CardTitle>
              <CardDescription>Instant messaging support</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Get quick answers through our integrated chat system
              </p>
              <Badge variant="outline">Real-time</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                  <FileText className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
              <CardTitle className="text-lg">Issue Reports</CardTitle>
              <CardDescription>Technical issue reporting</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Submit detailed error reports with attachments and logs
              </p>
              <Badge variant="outline">Priority Support</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Support Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeadphonesIcon className="h-5 w-5 text-blue-500" />
                Expert Technical Support
              </CardTitle>
              <CardDescription>
                Get help from SAP Integration Suite specialists
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">What we provide:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• CI/CD pipeline troubleshooting</li>
                  <li>• SAP Integration Suite best practices</li>
                  <li>• Custom configuration assistance</li>
                  <li>• Performance optimization guidance</li>
                  <li>• Security and compliance support</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Dedicated Team
              </CardTitle>
              <CardDescription>
                Our support team is here to help you succeed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Support levels:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Level 1: General inquiries and basic support</li>
                  <li>• Level 2: Technical issues and configuration</li>
                  <li>• Level 3: Complex integrations and custom solutions</li>
                  <li>• Emergency: Critical production issues</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Preview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contact Form Preview</CardTitle>
            <CardDescription>
              Submit inquiries, report issues, or request assistance directly
              from the platform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Contact Information</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Name and organization</li>
                  <li>• Email address</li>
                  <li>• Phone number (optional)</li>
                  <li>• Preferred contact method</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Issue Details</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Issue category and priority</li>
                  <li>• Detailed description</li>
                  <li>• Error messages and logs</li>
                  <li>• File attachments</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button disabled>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button variant="outline" disabled>
                Upload Files
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200 dark:border-red-800">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                <Phone className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  Emergency Support
                </h3>
                <p className="text-red-700 dark:text-red-200 mb-4">
                  For critical production issues requiring immediate attention,
                  our emergency support line will be available 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="outline"
                    className="border-red-300 text-red-700 hover:bg-red-50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900"
                    disabled
                  >
                    Emergency Hotline
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-300 text-red-700 hover:bg-red-50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900"
                    disabled
                  >
                    Priority Support
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
