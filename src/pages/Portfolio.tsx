import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import netflixProject from '@/assets/netflix-project.png';
import ecommerceProject from '@/assets/ecommerce-project.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "ParityDeals Clone",
      description: "A Next.js application featuring server-side rendering, payment integration, and dynamic pricing based on user location.",
      image: ecommerceProject,
      tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "API Integration"],
      highlights: [
        "Implemented SSR/SSG for optimal performance",
        "Integrated payment processing with Stripe",
        "Location-based pricing algorithm"
      ],
      demoUrl: "#",
      repoUrl: "https://github.com/harunaGuru"
    },
    {
      id: 2,
      title: "Netflix Clone",
      description: "A React-based streaming platform clone with responsive player UI, content browsing, and user authentication.",
      image: netflixProject,
      tech: ["React", "JavaScript", "CSS3", "Firebase", "TMDb API"],
      highlights: [
        "Responsive video player interface",
        "Dynamic content fetching from TMDb API",
        "User authentication and profiles"
      ],
      demoUrl: "#",
      repoUrl: "https://github.com/harunaGuru"
    },
    {
      id: 3,
      title: "Postman Clone",
      description: "API testing client with request history, response viewer, and environment variable management.",
      image: ecommerceProject,
      tech: ["React", "TypeScript", "Electron", "IndexedDB"],
      highlights: [
        "Complete API request/response interface",
        "Request history and collections",
        "Environment variable management"
      ],
      demoUrl: "#",
      repoUrl: "https://github.com/harunaGuru"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Full-featured online store with product catalog, shopping cart, and secure checkout process.",
      image: ecommerceProject,
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      highlights: [
        "Complete shopping cart functionality",
        "Secure payment processing",
        "Admin dashboard for inventory management"
      ],
      demoUrl: "#",
      repoUrl: "https://github.com/harunaGuru"
    },
    {
      id: 5,
      title: "GSAP Animated Landing",
      description: "High-performance landing page with complex GSAP animations and scroll-triggered effects.",
      image: netflixProject,
      tech: ["HTML5", "CSS3", "JavaScript", "GSAP", "ScrollTrigger"],
      highlights: [
        "Complex scroll-triggered animations",
        "60fps performance optimization",
        "Mobile-responsive animations"
      ],
      demoUrl: "#",
      repoUrl: "https://github.com/harunaGuru"
    }
  ];

  const techFilters = ["All", "React", "Next.js", "TypeScript", "GSAP", "Node.js"];

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
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my recent projects and technical expertise
          </p>
          
          {/* Tech Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {techFilters.map((tech, index) => (
              <Badge 
                key={tech} 
                variant={index === 0 ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-glow transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Highlights */}
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;