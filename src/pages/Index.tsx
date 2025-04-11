
import { Link } from "react-router-dom";
import { ArrowRight, BarChart, CheckCircle, Lightbulb, Server, Leaf, SolarPanel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const services = [
    {
      icon: <Lightbulb className="text-greenintel-primary" size={28} />,
      title: "Solar Consultancy",
      description: "Expert design, layout and feasibility analysis for maximum solar efficiency.",
      link: "/services#consultancy"
    },
    {
      icon: <Leaf className="text-greenintel-primary" size={28} />,
      title: "Sustainability Services",
      description: "ESG reporting, GHG accounting and materiality assessments for businesses.",
      link: "/services#sustainability"
    },
    {
      icon: <SolarPanel className="text-greenintel-primary" size={28} />,
      title: "Installation Services",
      description: "End-to-end rooftop solar solutions and EPC services for all scales.",
      link: "/services#installation"
    },
    {
      icon: <Server className="text-greenintel-primary" size={28} />,
      title: "AI-Powered Solutions",
      description: "Smart chatbots, optimization tools and predictive analytics for energy.",
      link: "/services#ai-solutions"
    }
  ];

  const benefits = [
    "Reduce energy costs by up to 70%",
    "Lower carbon footprint significantly",
    "AI-optimized energy consumption",
    "Real-time monitoring and insights",
    "Expert-led implementation",
    "Regulatory compliance support"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-greenintel-light via-background to-background py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-greenintel-accent/20 px-4 py-2 rounded-full">
                <span className="text-greenintel-primary font-medium text-sm">Leading in Green Technology</span>
              </div>
              <h1 className="font-bold tracking-tight">
                Empowering a Clean & Intelligent Renewable Future
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                AI + Deep Tech + Sustainability = Smarter Energy Solutions for Businesses and Homeowners.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button className="btn-primary" asChild>
                  <Link to="/about">Discover Our Story</Link>
                </Button>
                <Button variant="outline" className="border-greenintel-primary text-greenintel-primary hover:bg-greenintel-light" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-greenintel-primary to-greenintel-secondary opacity-90 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <SolarPanel size={80} className="mx-auto text-white mb-6" />
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Smart Solar Solutions</h3>
                    <p className="text-white/90 max-w-md">Harnessing AI and innovation to maximize your renewable energy investments</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block absolute -bottom-6 -left-6 w-24 h-24 bg-greenintel-accent rounded-lg"></div>
              <div className="hidden md:block absolute -top-6 -right-6 w-16 h-16 bg-greenintel-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Welcome to GreenIntel</h2>
            <p className="text-xl text-muted-foreground">
              Bridging innovation and sustainability through AI-powered solar solutions and expert consulting.
              We're on a mission to accelerate the transition to clean energy through technology, expertise, and passion.
            </p>
          </div>

          {/* Services Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-muted bg-card card-hover">
                <CardHeader>
                  <div className="mb-4 p-2 inline-block bg-greenintel-light rounded-lg">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base min-h-[80px]">{service.description}</CardDescription>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center mt-4 font-medium text-greenintel-primary hover:underline"
                  >
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-primary" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-6">
              <h2>Why Choose GreenIntel?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our unique blend of cutting-edge technology and deep industry expertise ensures optimal solutions tailored to your needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={24} className="mr-3 text-greenintel-primary flex-shrink-0 mt-0.5" />
                    <p className="font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="btn-secondary" asChild>
                  <Link to="/about">About Our Approach</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white shadow-xl rounded-xl p-6 relative">
                <div className="absolute -top-6 -right-6 bg-greenintel-accent p-4 rounded-lg flex items-center justify-center">
                  <BarChart size={32} className="text-greenintel-dark" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI-Driven ROI Calculator</h3>
                <p className="text-muted-foreground mb-6">
                  See how much you could save by switching to solar energy with our intelligent prediction model.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-6">
                  <div className="flex justify-between mb-3">
                    <span>Average Monthly Savings</span>
                    <span className="font-bold text-greenintel-primary">$350-$500</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span>Estimated Payback Period</span>
                    <span className="font-bold text-greenintel-primary">3-5 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CO₂ Reduction (Annual)</span>
                    <span className="font-bold text-greenintel-primary">4-6 tons</span>
                  </div>
                </div>
                <Button className="w-full btn-primary">Calculate Your Savings</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-greenintel-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Start Your Green Journey?</h2>
            <p className="text-xl text-white/80 mb-8">
              Join hundreds of satisfied clients who have transformed their energy usage with GreenIntel solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-greenintel-dark hover:bg-greenintel-accent" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
