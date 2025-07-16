import { useState } from "react";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const SERVICE_ID = 'service_4cxkklr';
  const TEMPLATE_ID = 'template_0m6v27v';
  const PUBLIC_KEY = 'DD69hmBmJfviIe1Uf';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create form data with all fields
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('phone', formState.phone);
      formData.append('subject', formState.subject);
      formData.append('message', formState.message);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          subject: formState.subject,
          message: formState.message
        },
        PUBLIC_KEY
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({ title: "Message sent successfully!" });
      setFormState({ name: "", email: "", phone: "", subject: "", message: "" });

    } catch (error) {
      console.error("Failed to send:", error);
      toast({ 
        title: "Error sending message", 
        description: "Please try again later or contact us directly.", 
        variant: "destructive" 
      });
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-greenintel-primary" />,
      title: "Phone",
      details: "+919079370323",
      link: "tel:+919079370323"
    },
    {
      icon: <Mail size={24} className="text-greenintel-primary" />,
      title: "Email",
      details: "admin@greenintel.in",
      link: "mailto:admin@greenintel.in"
    },
    {
      icon: <MapPin size={24} className="text-greenintel-primary" />,
      title: "Office",
      details: "Greater Noida, Gautam Buddha Nagar, 201318, India",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions or ready to start your green energy journey? Reach out to our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto w-16 h-16 bg-greenintel-light rounded-full flex items-center justify-center mb-6">
                      <Check size={32} className="text-greenintel-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)} 
                      variant="outline"
                      className="border-greenintel-primary text-greenintel-primary"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="Your phone number (optional)"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          placeholder="How can we help you?"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        placeholder="Please describe how we can assist you..."
                        className="w-full min-h-[150px]"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="btn-primary w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending Message...</>
                      ) : (
                        <>
                          <Send size={16} className="mr-2" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-6">
             


              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-greenintel-light rounded-full flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{info.title}</h4>
                        <a 
                          href={info.link} 
                          className="text-muted-foreground hover:text-greenintel-primary transition-colors"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-greenintel-primary text-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-greenintel-accent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-greenintel-dark mb-6">Join Our Green Energy Community</h2>
            <p className="text-xl text-greenintel-dark/80 mb-8">
              Subscribe to our newsletter for the latest updates on renewable energy, AI advancements, and sustainability practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border-white focus-visible:ring-greenintel-primary"
              />
              <Button className="bg-greenintel-dark text-white hover:bg-black">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;