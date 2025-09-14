import { Button } from "../../components/ui/Button";
import { Leaf, Menu, Settings } from "lucide-react";
import { cn } from "../lib/utils";

interface HeaderProps {
  className?: string;
}

export function MainHeader({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary text-primary-foreground">
            <Leaf className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-bold text-xl">REchakra</h1>
            <p className="text-xs text-muted-foreground -mt-1">
              Waste Management
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" size="sm">
            About
          </Button>
          <Button variant="ghost" size="sm">
            Features
          </Button>
          <Button variant="ghost" size="sm">
            Contact
          </Button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
