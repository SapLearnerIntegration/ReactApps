import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Settings,
  BarChart3,
  Globe,
  Mail,
  Workflow,
  Home,
} from "lucide-react";

const navigationItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "CI/CD Pipeline",
    href: "/cicd",
    icon: Workflow,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: BarChart3,
  },
  {
    name: "Environments",
    href: "/environments",
    icon: Globe,
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: Mail,
  },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const NavItem = ({
    item,
    mobile = false,
  }: {
    item: (typeof navigationItems)[0];
    mobile?: boolean;
  }) => {
    const isActive =
      location.pathname === item.href ||
      (item.href !== "/" && location.pathname.startsWith(item.href));

    return (
      <Link
        to={item.href}
        onClick={() => mobile && setIsMobileMenuOpen(false)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
          isActive
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-accent",
          mobile && "w-full justify-start text-base py-3",
        )}
      >
        <item.icon className={cn("h-4 w-4", mobile && "h-5 w-5")} />
        {item.name}
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Settings className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight">
                SAP CI/CD
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Automation Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-2 mt-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Settings className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold tracking-tight">
                        SAP CI/CD
                      </span>
                      <span className="text-xs text-muted-foreground -mt-1">
                        Automation Platform
                      </span>
                    </div>
                  </div>
                  {navigationItems.map((item) => (
                    <NavItem key={item.name} item={item} mobile />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
