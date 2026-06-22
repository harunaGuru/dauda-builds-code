import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import netflixProject from "@/assets/netflix-project.png";
import ecommerceProject from "@/assets/ecommerce-project.png";
import EassyPPP from "@/assets/easy-ppp2.png";
import Postman from "@/assets/postman.webp";
import LandingPage from "@/assets/landing-page.png";
import macosPortfolio from "@/assets/macos-portfolio.png.asset.json";
import majehub from "@/assets/majehub.avif.asset.json";

const Portfolio = () => {
  const projects = [
    {
      id: 0,
      title: "macOS-Inspired Portfolio",
      description:
        "A macOS-style desktop portfolio with dock buttons, draggable windows, and fluid animations—every click opens a new window for an engaging mini-OS experience.",
      image: macosPortfolio.url,
      tech: ["React", "Vite", "GSAP", "Framer Motion", "Zustand", "react-pdf", "Tailwind CSS"],
      highlights: [
        "Draggable, resizable macOS-style windows",
        "Dock with launch animations and reusable components",
        "Smooth GSAP + Framer Motion interactions",
      ],
      demoUrl: "https://haruna-web.netlify.app/",
      repoUrl: "https://github.com/harunaGuru",
    },
    {
      id: 6,
      title: "Majehub Marketplace",
      description:
        "Enterprise-grade e-commerce marketplace with three frontend portals (User, Seller, Admin) and 11 decoupled backend microservices designed for scale, resilience, and real-time engagement.",
      image: majehub.url,
      tech: [
        "Nx Monorepo",
        "Next.js",
        "TypeScript",
        "Bun",
        "Express.js",
        "Prisma",
        "MongoDB",
        "Kafka",
        "Redis",
        "WebSocket",
        "TensorFlow.js",
        "Firebase Auth",
      ],
      highlights: [
        "11 microservices behind an API gateway",
        "Real-time seller/user chat, analytics & logging via WebSocket + Kafka",
        "ML-powered recommendations with TensorFlow.js, Redis caching, device tracking",
      ],
      demoUrl: "#",
      repoUrl: "#",
      comingSoon: true,
    },
    {
      title: "ParityDeals Clone",
      description:
        "A Next.js application featuring server-side rendering, payment integration, and dynamic pricing based on user location.",
      image: EassyPPP,
      tech: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "Tailwind CSS",
        "API Integration",
      ],
      highlights: [
        "Implemented SSR/SSG for optimal performance",
        "Integrated payment processing with Stripe",
        "Location-based pricing algorithm",
      ],
      demoUrl: "https://easy-pppp.vercel.app",
      repoUrl: "https://github.com/harunaGuru/Easy-PPP",
    },
    {
      id: 2,
      title: "GSAP Animated Landing",
      description:
        "High-performance landing page with complex GSAP animations and scroll-triggered effects.",
      image: LandingPage,
      tech: ["HTML5", "TailwindCss", "JavaScript", "GSAP", "ScrollTrigger"],
      highlights: [
        "Complex scroll-triggered animations",
        "60fps performance optimization",
        "Mobile-responsive animations",
      ],
      demoUrl: "https://award-wining-landing-page.netlify.app/",
      repoUrl: "https://github.com/harunaGuru/awward-wining-landing-page",
    },
    {
      id: 3,
      title: "Postman Clone",
      description:
        "API testing client with request parameters, response viewer, and environment variable management.",
      image: Postman,
      tech: ["React", "Javascript", "Vite", "Boostrap", "Codemirror"],
      highlights: [
        "Complete API request/response interface",
        "Request history and collections",
        "Environment variable management",
      ],
      demoUrl: "https://hod-postman-clone.netlify.app",
      repoUrl: "https://github.com/harunaGuru/postman-clone",
    },
    {
      id: 4,
      title: "Netflix Clone",
      description:
        "A React-based streaming platform clone with responsive player UI, content browsing, and user authentication.",
      image: netflixProject,
      tech: ["React", "JavaScript", "CSS3", "Firebase", "TMDb API"],
      highlights: [
        "Responsive video player interface",
        "Dynamic content fetching from TMDb API",
        "User authentication and profiles",
      ],
      demoUrl: "https://netfllix-app-hod.netlify.app",
      repoUrl: "https://github.com/harunaGuru/netflix-clone",
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description:
        "A simple online store with product catalog and shopping car features.",
      image: ecommerceProject,
      tech: ["React", "Emotion", "Redux", "Fake Store API"],
      highlights: [
        "Complete shopping cart functionality",
        "Secure payment processing",
        "Admin dashboard for inventory management",
      ],
      demoUrl: "https://hod-ecomm.netlify.app",
      repoUrl: "https://github.com/harunaGuru/e-commerce",
    },
  ];

  const techFilters = [
    "All",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Firebase",
    "Stripe",
    "Zustand",
    "Redux",
    "GSAP",
    "Node.js",
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
                    {project.comingSoon ? (
                      <Badge variant="default" className="text-sm px-4 py-2">
                        Coming Soon
                      </Badge>
                    ) : (
                      <>
                        <Button size="sm" asChild>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </>
                    )}
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
