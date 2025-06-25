
import { Link } from "react-router-dom";
import { Lightbulb, Flower, Sun, Server, ArrowRight, BarChart, CheckCircle, Award, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const serviceCategories = [
    { id: "consultancy", label: "Consultancy" },
    { id: "sustainability", label: "Sustainability" },
    { id: "installation", label: "Installation" },
    { id: "ai-solutions", label: "AI Solutions" },
  ];

  const services = {
    consultancy: [
      {
        icon: <Lightbulb size={40} className="text-greenintel-primary" />,
        title: "Solar Design & Layout",
        description: "Professional 3D modeling, shading analysis, and site optimization to maximize solar generation potential.",
        features: ["3D modeling", "Shading analysis", "Site optimization", "Energy production forecasting"]
      },
      {
        icon: <BarChart size={40} className="text-greenintel-primary" />,
        title: "Feasibility Analysis",
        description: "Comprehensive site assessment and cost-benefit reporting to determine viability and ROI.",
        features: ["Site assessment", "Cost-benefit analysis", "Technical viability studies", "Permitting guidance"]
      },
      {
        icon: <Award size={40} className="text-greenintel-primary" />,
        title: "ROI Tools",
        description: "Advanced financial modeling and scenario analysis to forecast returns on solar investments.",
        features: ["Financial modeling", "Scenario analysis", "Investment forecasting", "Incentive optimization"]
      }
    ],
    sustainability: [
      {
        icon: <CheckCircle size={40} className="text-greenintel-primary" />,
        title: "ESG/BRSR Reporting",
        description: "Regulatory-ready, transparent environmental, social, and governance reports compliant with BRSR frameworks.",
        features: ["Regulatory compliance", "Data collection frameworks", "Benchmarking", "Continuous improvement plans"]
      },
      {
        icon: <Flower size={40} className="text-greenintel-primary" />,
        title: "GHG Accounting",
        description: "Detailed carbon footprinting and reduction strategies to minimize environmental impact.",
        features: ["Scope 1-3 emissions analysis", "Carbon footprint calculation", "Reduction pathways", "Offset strategies"]
      },
      {
        icon: <BarChart size={40} className="text-greenintel-primary" />,
        title: "Materiality Assessments",
        description: "In-depth impact analysis and strategic planning for sustainability initiatives.",
        features: ["Stakeholder engagement", "Impact prioritization", "Risk assessment", "Strategic roadmapping"]
      }
    ],
    installation: [
       {
        icon: <Settings size={40} className="text-greenintel-primary" />,
        title: "Engineering and Project Management",
        description: "From initial planning to commissioning, we deliver end-to-end solutions for projects of all sizes.",
        features: ["Installation on rooftop", "Installation on Agriculture field", "Battery storage solar installation"]
      }

    ],
    "ai-solutions": [
      {
        icon: <Server size={40} className="text-greenintel-primary" />,
        title: "Chatbots & Voice Agents",
        description: "Industry-specific AI assistants to streamline customer service and operations.",
        features: ["24/7 customer support", "Technical troubleshooting", "Energy usage optimization", "Personalized recommendations"]
      },
      {
        icon: <BarChart size={40} className="text-greenintel-primary" />,
        title: "AI Tools",
        description: "Advanced project optimization, lead generation, and predictive analytics powered by machine learning.",
        features: ["Project optimization", "Lead generation", "Predictive maintenance", "Energy forecasting"]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive renewable energy and sustainability solutions powered by innovation and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="section">
        <div className="container-custom">
          <Tabs defaultValue="consultancy" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {serviceCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="py-3 px-6 data-[state=active]:bg-greenintel-primary data-[state=active]:text-white"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(services).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div id={category} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((service, index) => (
                    <Card key={index} className="border border-muted bg-card overflow-hidden shadow-md">
                      <CardContent className="p-8">
                        <div className="mb-6">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-muted-foreground mb-6">{service.description}</p>
                        <div className="space-y-3">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center">
                              <CheckCircle size={16} className="mr-2 text-greenintel-primary" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button className="btn-primary">
                    <Link to="/contact">Request {serviceCategories.find(c => c.id === category)?.label} Services</Link>
                    
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Technology & Tools */}
      <section className="section bg-greenintel-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Technology & Tools</h2>
            <p className="text-lg text-muted-foreground">
              Our advanced technological solutions that drive efficiency and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-8 text-center">
                <Server size={48} className="mx-auto mb-6 text-greenintel-primary" />
                <h3 className="text-xl font-bold mb-4">Deep Tech</h3>
                <p className="text-muted-foreground mb-4">
                  AI, ML, and IoT-based smart systems that optimize energy production and consumption.
                </p>
                <Link 
                  to="/technology"
                  className="inline-flex items-center font-medium text-greenintel-primary hover:underline"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-8 text-center">
                <BarChart size={48} className="mx-auto mb-6 text-greenintel-primary" />
                <h3 className="text-xl font-bold mb-4">Dashboards</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time monitoring and insights dashboards to track performance and savings.
                </p>
                <Link 
                  to="/technology#dashboards"
                  className="inline-flex items-center font-medium text-greenintel-primary hover:underline"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-8 text-center">
                <Award size={48} className="mx-auto mb-6 text-greenintel-primary" />
                <h3 className="text-xl font-bold mb-4">ROI Calculator</h3>
                <p className="text-muted-foreground mb-4">
                  Instant estimates on energy savings and payback periods customized to your needs.
                </p>
                <Link 
                  to="/tools#roi-calculator"
                  className="inline-flex items-center font-medium text-greenintel-primary hover:underline"
                >
                  Try it now <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-greenintel-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Transform Your Energy Strategy?</h2>
            <p className="text-xl text-white/80 mb-8">
              Connect with our experts to discuss your specific needs and discover the perfect solution.
            </p>
            <Button className="bg-white text-greenintel-dark hover:bg-greenintel-accent" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
