import { Users, HardHat, Shield, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/hero-waste-management.png";
import { MainHeader } from "../layout/MainHeader";
import { Button } from "../ui/Button";
import { RoleCard } from "../../components/ui/Role-card";
import { Footer } from "../layout/Footer";
import { ProductBanner } from "../layout/ProductBanner";
import {
  banner1,
  banner2,
  banner3,
  banner4,
} from "../../assets/index";
import { Stack } from "@mui/material";

const bannerImages = [banner1, banner3, banner2, banner4];


const roles = [
  {
    id: "citizen",
    title: "Citizen Portal",
    description: "Engage in responsible waste management and earn rewards",
    icon: Users,
    variant: "citizen" as const,
    features: [
      "Waste segregation training",
      "AI-powered classification",
      "Recycling marketplace",
      "Facility locator & QR scanning",
      "Green credits & rewards",
    ],
  },
  {
    id: "worker",
    title: "Waste Worker App",
    description: "Field execution tools for waste collection teams",
    icon: HardHat,
    variant: "worker" as const,
    features: [
      "Daily route optimization",
      "Offline-first operation",
      "QR code scanning",
      "Emergency SOS alerts",
      "Earnings & incentive tracking",
    ],
  },
  {
    id: "champion",
    title: "Green Champion Portal",
    description: "Local supervision with ML-powered insights",
    icon: Shield,
    variant: "champion" as const,
    features: [
      "Citizen error analysis",
      "Real-time monitoring",
      "Route performance tracking",
      "Complaint management",
      "Local action controls",
    ],
  },
  {
    id: "government",
    title: "ULB Government Dashboard",
    description: "Macro governance and policy analytics platform",
    icon: Building2,
    variant: "government" as const,
    features: [
      "City-wide compliance tracking",
      "Predictive waste analytics",
      "Policy impact monitoring",
      "Cross-ward comparisons",
      "Automated reporting",
    ],
  },
];



export default function Index() {
   const navigate = useNavigate();
   const is600 = window.innerWidth <= 600; // Example: Define is600 based on screen width
    const is800 = window.innerWidth <= 800;
    const is1200 = window.innerWidth <= 1200;
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <MainHeader />

      {!is600 && (
        <Stack
          sx={{
            width: "100%",
            height: is800 ? "300px" : is1200 ? "400px" : "500px",
           
          }}
        >
          <ProductBanner images={bannerImages} />
        </Stack>
      )}

      {/* Hero Section */}
      <section className="relative  overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-200/40 via-transparent to-emerald-400/40 pointer-events-none" />

        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                REchakra
                <span className="block text-primary">Digital Waste</span>
                <span className="block text-success">Ecosystem</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Connecting citizens, workers, and governments in a unified
                platform for smart, community-driven waste management with
                AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  onClick={() => navigate("/auth")}
                  size="lg"
                >
                  <span>Get Started</span>
                </Button>

                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="pt-48 relative">
              <img
                src={heroImage}
                alt="Smart waste management ecosystem"
                className="rounded-2xl shadow-floating w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Choose Your Dashboard
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access role-specific tools designed for your needs in the waste
              management ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role) => (
              <RoleCard
                key={role.id}
                title={role.title}
                description={role.description}
                icon={role.icon}
                features={role.features}
                variant={role.variant}
                onSelect={() => navigate(`/auth?role=${role.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why REchakra?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-success/20 w-16 h-16 flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold">Community Driven</h3>
              <p className="text-muted-foreground">
                Gamified citizen engagement with rewards and social features
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-primary/20 w-16 h-16 flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
              <p className="text-muted-foreground">
                Machine learning for waste classification and predictive
                analytics
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-secondary/20 w-16 h-16 flex items-center justify-center mx-auto">
                <Building2 className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Complete Integration</h3>
              <p className="text-muted-foreground">
                Unified platform connecting all stakeholders in the waste
                ecosystem
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
