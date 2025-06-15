import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";
import {
  ChevronRight,
  ChevronLeft,
  Package,
  GitBranch,
  Settings,
  CheckCircle,
  AlertTriangle,
  Upload,
  Rocket,
  TestTube,
  Download,
  Search,
  Filter,
  Clock,
  User,
  Globe,
  AlertCircle,
  FileText,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";

const pipelineStages = [
  {
    id: 1,
    name: "Package Selection",
    icon: Package,
    description: "Select integration packages",
  },
  {
    id: 2,
    name: "iFlow Selection",
    icon: GitBranch,
    description: "Choose integration flows",
  },
  {
    id: 3,
    name: "Configuration",
    icon: Settings,
    description: "Configure environment settings",
  },
  {
    id: 4,
    name: "Design Validation",
    icon: CheckCircle,
    description: "Validate design guidelines",
  },
  {
    id: 5,
    name: "Dependencies",
    icon: AlertTriangle,
    description: "Check dependencies",
  },
  {
    id: 6,
    name: "Upload Artifacts",
    icon: Upload,
    description: "Upload to SAP tenant",
  },
  { id: 7, name: "Deploy", icon: Rocket, description: "Deploy to runtime" },
  {
    id: 8,
    name: "Test & Report",
    icon: TestTube,
    description: "Execute tests and generate report",
  },
];

// Mock data
const mockPackages = [
  {
    id: "PKG001",
    name: "Customer Master Data Integration",
    version: "1.2.3",
    lastModified: "2024-01-15",
    iFlowCount: 5,
    status: "Active",
  },
  {
    id: "PKG002",
    name: "Order Processing Workflows",
    version: "2.1.0",
    lastModified: "2024-01-14",
    iFlowCount: 8,
    status: "Active",
  },
  {
    id: "PKG003",
    name: "Financial Data Sync",
    version: "1.0.5",
    lastModified: "2024-01-13",
    iFlowCount: 3,
    status: "Active",
  },
  {
    id: "PKG004",
    name: "Product Catalog Integration",
    version: "1.4.2",
    lastModified: "2024-01-12",
    iFlowCount: 6,
    status: "Active",
  },
  {
    id: "PKG005",
    name: "Supplier Management",
    version: "2.0.1",
    lastModified: "2024-01-11",
    iFlowCount: 4,
    status: "Active",
  },
  {
    id: "PKG006",
    name: "Human Resources Integration",
    version: "1.3.0",
    lastModified: "2024-01-10",
    iFlowCount: 7,
    status: "Active",
  },
];

const mockIFlows = [
  {
    id: "IF001",
    name: "Customer Data Validation",
    package: "PKG001",
    complexity: "Medium",
    lastTested: "2024-01-10",
    status: "Deployed",
  },
  {
    id: "IF002",
    name: "Customer Master Upload",
    package: "PKG001",
    complexity: "High",
    lastTested: "2024-01-09",
    status: "Draft",
  },
  {
    id: "IF003",
    name: "Order Status Update",
    package: "PKG002",
    complexity: "Low",
    lastTested: "2024-01-08",
    status: "Deployed",
  },
  {
    id: "IF004",
    name: "Order Processing Workflow",
    package: "PKG002",
    complexity: "High",
    lastTested: "2024-01-07",
    status: "Deployed",
  },
];

export default function CICDPipeline() {
  const [currentStage, setCurrentStage] = useState(1);
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [selectedIFlows, setSelectedIFlows] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const progress = ((currentStage - 1) / (pipelineStages.length - 1)) * 100;

  const handleNext = () => {
    if (currentStage < pipelineStages.length) {
      setCurrentStage(currentStage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStage > 1) {
      setCurrentStage(currentStage - 1);
    }
  };

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackages((prev) =>
      prev.includes(packageId)
        ? prev.filter((id) => id !== packageId)
        : [...prev, packageId],
    );
  };

  const handleIFlowSelect = (iFlowId: string) => {
    setSelectedIFlows((prev) =>
      prev.includes(iFlowId)
        ? prev.filter((id) => id !== iFlowId)
        : [...prev, iFlowId],
    );
  };

  const filteredPackages = mockPackages.filter(
    (pkg) =>
      pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredIFlows = mockIFlows.filter(
    (iFlow) =>
      selectedPackages.length === 0 || selectedPackages.includes(iFlow.package),
  );

  const renderStageContent = () => {
    switch (currentStage) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search packages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12"></TableHead>
                    <TableHead>Package ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead>iFlows</TableHead>
                    <TableHead>Last Modified</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPackages.map((pkg) => (
                    <TableRow
                      key={pkg.id}
                      className="cursor-pointer hover:bg-muted/50"
                    >
                      <TableCell>
                        <Checkbox
                          checked={selectedPackages.includes(pkg.id)}
                          onCheckedChange={() => handlePackageSelect(pkg.id)}
                        />
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {pkg.id}
                      </TableCell>
                      <TableCell className="font-medium">{pkg.name}</TableCell>
                      <TableCell>{pkg.version}</TableCell>
                      <TableCell>{pkg.iFlowCount}</TableCell>
                      <TableCell>{pkg.lastModified}</TableCell>
                      <TableCell>
                        <Badge variant="success">{pkg.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {selectedPackages.length > 0 && (
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Selected {selectedPackages.length} package(s) for deployment
                  pipeline.
                </AlertDescription>
              </Alert>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Showing iFlows from {selectedPackages.length} selected
                package(s).
              </AlertDescription>
            </Alert>

            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12"></TableHead>
                    <TableHead>iFlow ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Package</TableHead>
                    <TableHead>Complexity</TableHead>
                    <TableHead>Last Tested</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredIFlows.map((iFlow) => (
                    <TableRow
                      key={iFlow.id}
                      className="cursor-pointer hover:bg-muted/50"
                    >
                      <TableCell>
                        <Checkbox
                          checked={selectedIFlows.includes(iFlow.id)}
                          onCheckedChange={() => handleIFlowSelect(iFlow.id)}
                        />
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {iFlow.id}
                      </TableCell>
                      <TableCell className="font-medium">
                        {iFlow.name}
                      </TableCell>
                      <TableCell>{iFlow.package}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            iFlow.complexity === "High"
                              ? "destructive"
                              : iFlow.complexity === "Medium"
                                ? "secondary"
                                : "success"
                          }
                        >
                          {iFlow.complexity}
                        </Badge>
                      </TableCell>
                      <TableCell>{iFlow.lastTested}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            iFlow.status === "Deployed"
                              ? "success"
                              : "secondary"
                          }
                        >
                          {iFlow.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {selectedIFlows.length > 0 && (
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Selected {selectedIFlows.length} iFlow(s) for deployment.
                </AlertDescription>
              </Alert>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <Tabs defaultValue="development" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="development">Development</TabsTrigger>
                <TabsTrigger value="testing">Testing</TabsTrigger>
                <TabsTrigger value="production">Production</TabsTrigger>
              </TabsList>

              {["development", "testing", "production"].map((env) => (
                <TabsContent key={env} value={env} className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        {env.charAt(0).toUpperCase() + env.slice(1)} Environment
                      </CardTitle>
                      <CardDescription>
                        Configure connection details for {env} environment
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`${env}-url`}>Tenant URL</Label>
                          <Input
                            id={`${env}-url`}
                            placeholder="https://tenant.integration.cloud.sap"
                            defaultValue={`https://${env}.integration.cloud.sap`}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`${env}-username`}>Username</Label>
                          <Input
                            id={`${env}-username`}
                            placeholder="Enter username"
                            defaultValue={`${env}_user`}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`${env}-password`}>Password</Label>
                          <Input
                            id={`${env}-password`}
                            type="password"
                            placeholder="Enter password"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`${env}-oauth`}>OAuth Token</Label>
                          <Input
                            id={`${env}-oauth`}
                            placeholder="Optional OAuth token"
                          />
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Test Connection
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Validating design guidelines compliance for selected iFlows...
              </AlertDescription>
            </Alert>

            <div className="grid gap-4">
              {selectedIFlows.map((iFlowId) => {
                const iFlow = mockIFlows.find((i) => i.id === iFlowId);
                const complianceScore = Math.floor(Math.random() * 40) + 60; // 60-100%
                const isCompliant = complianceScore >= 70;

                return (
                  <Card key={iFlowId}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{iFlow?.name}</span>
                        <Badge
                          variant={isCompliant ? "success" : "destructive"}
                        >
                          {complianceScore}% Compliant
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Progress value={complianceScore} className="w-full" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span>Error Handling</span>
                            <Badge
                              variant={
                                Math.random() > 0.3 ? "success" : "destructive"
                              }
                            >
                              {Math.random() > 0.3 ? "✓" : "✗"}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Logging Configuration</span>
                            <Badge variant="success">✓</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Security Standards</span>
                            <Badge
                              variant={
                                Math.random() > 0.4 ? "success" : "destructive"
                              }
                            >
                              {Math.random() > 0.4 ? "✓" : "✗"}
                            </Badge>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span>Performance Optimization</span>
                            <Badge variant="success">✓</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Documentation</span>
                            <Badge
                              variant={
                                Math.random() > 0.2 ? "success" : "destructive"
                              }
                            >
                              {Math.random() > 0.2 ? "✓" : "✗"}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Naming Convention</span>
                            <Badge variant="success">✓</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Analyzing dependencies for selected iFlows...
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              {selectedIFlows.map((iFlowId) => {
                const iFlow = mockIFlows.find((i) => i.id === iFlowId);
                const dependencies = [
                  {
                    name: "SAP S/4HANA Cloud",
                    type: "System",
                    status: "Connected",
                  },
                  {
                    name: "Custom Value Mapping",
                    type: "Artifact",
                    status: "Available",
                  },
                  {
                    name: "Security Material",
                    type: "Certificate",
                    status: "Valid",
                  },
                  {
                    name: "External API",
                    type: "Service",
                    status: Math.random() > 0.3 ? "Available" : "Unavailable",
                  },
                ];

                return (
                  <Card key={iFlowId}>
                    <CardHeader>
                      <CardTitle>{iFlow?.name}</CardTitle>
                      <CardDescription>
                        Dependency validation results
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {dependencies.map((dep, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 border rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  dep.status === "Connected" ||
                                  dep.status === "Available" ||
                                  dep.status === "Valid"
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                }`}
                              />
                              <div>
                                <p className="font-medium">{dep.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {dep.type}
                                </p>
                              </div>
                            </div>
                            <Badge
                              variant={
                                dep.status === "Connected" ||
                                dep.status === "Available" ||
                                dep.status === "Valid"
                                  ? "success"
                                  : "destructive"
                              }
                            >
                              {dep.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <Alert>
              <Upload className="h-4 w-4" />
              <AlertDescription>
                Ready to upload artifacts to SAP Integration Suite tenant.
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>Upload Summary</CardTitle>
                <CardDescription>
                  Review artifacts before upload
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {selectedPackages.length}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Packages
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {selectedIFlows.length}
                    </div>
                    <div className="text-sm text-muted-foreground">iFlows</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-sm text-muted-foreground">
                      Environments
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Target Environment</Label>
                  <Select defaultValue="development">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="testing">Testing</SelectItem>
                      <SelectItem value="production">Production</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  className="w-full"
                  onClick={() => setIsProcessing(true)}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Clock className="h-4 w-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Start Upload
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <Alert>
              <Rocket className="h-4 w-4" />
              <AlertDescription>
                Deploying artifacts from design-time to runtime environment.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              {selectedIFlows.map((iFlowId, idx) => {
                const iFlow = mockIFlows.find((i) => i.id === iFlowId);
                const status =
                  idx < 2 ? "deployed" : idx < 4 ? "deploying" : "pending";

                return (
                  <Card key={iFlowId}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              status === "deployed"
                                ? "bg-green-500"
                                : status === "deploying"
                                  ? "bg-yellow-500 animate-pulse"
                                  : "bg-gray-300"
                            }`}
                          />
                          <div>
                            <p className="font-medium">{iFlow?.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {iFlow?.id}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              status === "deployed"
                                ? "success"
                                : status === "deploying"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {status === "deployed"
                              ? "Deployed"
                              : status === "deploying"
                                ? "Deploying..."
                                : "Pending"}
                          </Badge>
                          {status === "deploying" && (
                            <Button variant="outline" size="sm">
                              <Pause className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <Alert>
              <TestTube className="h-4 w-4" />
              <AlertDescription>
                Executing test suite and generating comprehensive report.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">12</div>
                  <div className="text-sm text-muted-foreground">
                    Tests Passed
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">2</div>
                  <div className="text-sm text-muted-foreground">Warnings</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">1</div>
                  <div className="text-sm text-muted-foreground">Failed</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Test Results Summary</CardTitle>
                <CardDescription>
                  Detailed test execution results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedIFlows.map((iFlowId) => {
                    const iFlow = mockIFlows.find((i) => i.id === iFlowId);
                    const testResult =
                      Math.random() > 0.2
                        ? "passed"
                        : Math.random() > 0.5
                          ? "warning"
                          : "failed";

                    return (
                      <div
                        key={iFlowId}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{iFlow?.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Functional & Integration Tests
                          </p>
                        </div>
                        <Badge
                          variant={
                            testResult === "passed"
                              ? "success"
                              : testResult === "warning"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {testResult === "passed"
                            ? "Passed"
                            : testResult === "warning"
                              ? "Warning"
                              : "Failed"}
                        </Badge>
                      </div>
                    );
                  })}
                </div>

                <Separator className="my-4" />

                <div className="flex gap-2">
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Email Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return <div>Stage not implemented</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">CI/CD Pipeline Automation</h1>
          <p className="text-muted-foreground">
            Automate the build, testing, and deployment of SAP Integration Suite
            artifacts
          </p>
        </div>

        {/* Progress Indicator */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Pipeline Progress</h2>
              <Badge variant="outline">
                Stage {currentStage} of {pipelineStages.length}
              </Badge>
            </div>

            <Progress value={progress} className="mb-4" />

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
              {pipelineStages.map((stage) => (
                <div
                  key={stage.id}
                  className={`p-2 rounded-lg text-center transition-all duration-200 ${
                    stage.id === currentStage
                      ? "bg-primary text-primary-foreground"
                      : stage.id < currentStage
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  <stage.icon className="h-4 w-4 mx-auto mb-1" />
                  <div className="text-xs font-medium">{stage.name}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stage Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {pipelineStages[currentStage - 1]?.icon &&
                (() => {
                  const IconComponent = pipelineStages[currentStage - 1].icon;
                  return <IconComponent className="h-5 w-5" />;
                })()}
              {pipelineStages[currentStage - 1]?.name}
            </CardTitle>
            <CardDescription>
              {pipelineStages[currentStage - 1]?.description}
            </CardDescription>
          </CardHeader>
          <CardContent>{renderStageContent()}</CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <div className="flex gap-2">
            <Button variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset Pipeline
            </Button>

            <Button
              onClick={handleNext}
              disabled={currentStage === pipelineStages.length}
            >
              {currentStage === pipelineStages.length ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Complete
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
