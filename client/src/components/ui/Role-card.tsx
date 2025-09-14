import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/Button";
import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface RoleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  variant: "citizen" | "worker" | "champion" | "government";
  onSelect: () => void;
}

const variantStyles = {
  citizen:
    "border-success/30 hover:border-success bg-success-light/10 hover:bg-success-light/20",
  worker:
    "border-warning/30 hover:border-warning bg-warning-light/10 hover:bg-warning-light/20",
  champion:
    "border-primary/30 hover:border-primary bg-primary/5 hover:bg-primary/10",
  government:
    "border-secondary/30 hover:border-secondary bg-secondary/5 hover:bg-secondary/10",
};

const iconStyles = {
  citizen: "text-success",
  worker: "text-warning",
  champion: "text-primary",
  government: "text-secondary",
};

export function RoleCard({
  title,
  description,
  icon: Icon,
  features,
  variant,
  onSelect,
}: RoleCardProps) {
  return (
    <Card
      className={cn(
        "hover-lift cursor-pointer transition-smooth border-2 h-full",
        variantStyles[variant]
      )}
      onClick={onSelect}
    >
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-4 rounded-full bg-background/50">
          <Icon className={cn("h-8 w-8", iconStyles[variant])} />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-current mt-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className="w-full"
          variant={variant === "citizen" ? "default" : "secondary"}
        >
          Access Dashboard
        </Button>
      </CardContent>
    </Card>
  );
}
