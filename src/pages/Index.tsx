import { Link } from "react-router-dom";
import { ArrowRight, BarChart, CheckCircle, Lightbulb, Server, Flower, Sun, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  const services = [
    {
      icon: <Lightbulb className="text-greenintel-primary" size={28} />,
      title: "Solar Consultancy",
      description: "Expert design, layout and feasibility analysis for maximum solar efficiency.",
      link: "/services#consultancy"
    },
    {
      icon: <Flower className="text-greenintel-primary" size={28} />,
      title: "Sustainability Services",
      description: "ESG reporting, GHG accounting and materiality assessments for businesses.",
      link: "/services#sustainability"
    },
    {
      icon: <Sun className="text-greenintel-primary" size={28} />,
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

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .gradient-animated {
          background: linear-gradient(-45deg, #22c55e, #16a34a, #15803d, #14532d);
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        
        
        
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Greenfield.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 video-overlay"></div>
        </div>

        {/* Video Controls */}
        

        {/* Hero Content */}
        <div className="relative z-20 container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block glass-effect px-6 py-3 rounded-full pulse-glow">
                <span className="text-white font-semibold text-sm tracking-wide">
                  🌱 Leading in Green Technology
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-shadow leading-tight">
                Empowering a 
                <span className="block gradien-animated bg-clip-text text-color bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-transparent">
                  Clean & Intelligent
                </span>
                Renewable Future
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed text-shadow">
                AI + Deep Tech + Sustainability = Smarter Energy Solutions for Businesses and Homeowners.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl" asChild>
                  <Link to="/about">
                    Discover Our Story 
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button className="glass-effect text-white border-white/30 hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
              
              {/* Floating Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="glass-effect p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-white/80 text-sm">Projects</div>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-white">70%</div>
                  <div className="text-white/80 text-sm">Cost Savings</div>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-white/80 text-sm">AI Support</div>
                </div>
              </div>
            </div>

           
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Welcome to GreenIntel
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Bridging innovation and sustainability through AI-powered solar solutions and expert consulting.
              We're on a mission to accelerate the transition to clean energy through technology, expertise, and passion.
            </p>
          </div>

          {/* Services Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card border-0 shadow-lg card-hover bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="pb-4">
                  <div className="mb-6 p-4 inline-block bg-gradient-to-br from-green-100 to-green-200 rounded-2xl ">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base min-h-[80px] leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center mt-6 font-semibold text-green-600 hover:text-green-700 transition-colors duration-300 group"
                  >
                    Learn more 
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Why Choose GreenIntel?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our unique blend of cutting-edge technology and deep industry expertise ensures optimal solutions tailored to your needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="mr-4 p-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full">
                      <CheckCircle size={20} className="text-white" />
                    </div>
                    <p className="font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
                  <Link to="/about">About Our Approach</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white shadow-2xl rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-2xl flex items-center justify-center shadow-lg">
                  <BarChart size={40} className="text-white" />
                </div>
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500"></div>
                
                <h3 className="text-2xl font-bold mb-6 text-gray-800 mt-4">AI-Driven ROI Calculator</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  See how much you could save by switching to solar energy with our intelligent prediction model.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl mb-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Average Monthly Savings</span>
                    <span className="font-bold text-2xl bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                      $350-$500
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Estimated Payback Period</span>
                    <span className="font-bold text-2xl bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                      3-5 years
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">CO₂ Reduction (Annual)</span>
                    <span className="font-bold text-2xl bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                      4-6 tons
                    </span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 text-lg font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                  Calculate Your Savings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50m-25 0a25 25 0 1 1 50 0a25 25 0 1 1 -50 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-shadow">
              Ready to Start Your Green Journey?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Join hundreds of satisfied clients who have transformed their energy usage with GreenIntel solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button className="bg-white text-green-700 hover:bg-green-50 px-10 py-5 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2" size={24} />
                </Link>
              </Button>
              <Button className="glass-effect text-white border-white/30 hover:bg-white/20 px-10 py-5 text-xl font-semibold rounded-full transition-all duration-300" asChild>
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