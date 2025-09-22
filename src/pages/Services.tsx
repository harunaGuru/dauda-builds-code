import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Palette, 
  TestTube, 
  Wrench, 
  Zap, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description: "Creating beautiful, user-centered designs that convert visitors into customers.",
      deliverables: [
        "Responsive UI mockups",
        "Figma design handoff",
        "Design system & tokens",
        "Interactive prototypes"
      ],
      color: "text-blue-500"
    },
    {
      icon: Code,
      title: "UI/UX Implementation",
      description: "Pixel-perfect frontend development using modern technologies and best practices.",
      deliverables: [
        "React/Next.js development",
        "Tailwind CSS styling",
        "Component library creation",
        "Mobile-first responsive design"
      ],
      color: "text-green-500"
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      description: "Comprehensive testing strategies to ensure your application works flawlessly.",
      deliverables: [
        "Jest unit testing",
        "React Testing Library integration",
        "E2E testing recommendations",
        "Cross-browser compatibility"
      ],
      color: "text-purple-500"
    },
    {
      icon: Wrench,
      title: "Web Maintenance",
      description: "Ongoing support to keep your website running smoothly and up-to-date.",
      deliverables: [
        "Bug fixes & improvements",
        "Dependency updates",
        "Performance monitoring",
        "Security patches"
      ],
      color: "text-orange-500"
    },
    {
      icon: Zap,
      title: "Website Optimization",
      description: "Performance tuning and optimization to improve speed and search rankings.",
      deliverables: [
        "Lighthouse optimization",
        "Image & bundle optimization",
        "Code splitting implementation",
        "SEO improvements"
      ],
      color: "text-yellow-500"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your goals, requirements, and target audience"
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "Creating mockups, wireframes, and technical specifications"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution with modern technologies and best practices"
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Thorough testing across devices and browsers"
    },
    {
      step: "05",
      title: "Deployment",
      description: "Launch and ongoing support for your project"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300 group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-background border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">My Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center bg-gradient-card rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss your requirements and create something amazing together.
          </p>
          <Button size="lg" asChild className="group">
            <Link to="/contact">
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;