import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo3.jpg";
const Hero = () => {
  const techStack = [
    "React",
    "Next.js",
    "JavaScript",
    "React Router",
    "TanStack Query",
    "TypeScript",
    "Tailwind CSS",
    "Material UI",
    "Git",
    "Redux",
    "Jest",
    "React Testing Library",
    "React Hook Form",
    "Framer Motion",
    "Firebase",
    "Stripe",
    "TensorFlow.js",
    "Websocket",
    "Zustand",
    "Vite",
    "Cypress",
    "Axios",
    "SWR",
    "Rechart",
    "ApexCharts",
    "Leaflet",
    "Shadcn UI",
    "GSAP",
    "Node.js",
    "Prisma",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Docker",
  ];
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
            >
              <span className="text-gray-200">Dauda</span>{" "}
              <span className="text-primary">Oladipupo</span>{" "}
              <span className="text-gray-200">Haruna</span>
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="mb-6"
            >
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-4">
                Frontend Engineer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I'm a React & Next.js developer with 3+ years of experience
                creating fast, accessible, and user-friendly web applications.
                Skilled at delivering projects of all sizes, from concept to
                launch, with a focus on performance, usability, and smooth user
                experiences. Based in Abuja, Nigeria.
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 0.8,
              }}
              className="mb-8"
            >
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {techStack.map((tech, index) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.8,
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="group">
                <Link to="/portfolio">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Hire Me
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.8,
              }}
              className="mt-12 flex justify-center lg:justify-start"
            >
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-card border border-border">
                <div className="flex divide-x divide-border">
                  <div className="pr-6">
                    <div className="text-2xl font-bold text-primary">4+</div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                  <div className="pl-6">
                    <div className="text-2xl font-bold text-primary">20+</div>
                    <div className="text-sm text-muted-foreground">
                      Projects Completed
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img
                  src={profilePhoto}
                  alt="Dauda Oladipupo Haruna - Frontend Engineer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full border border-primary/30"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-2 -left-6 w-12 h-12 bg-primary/10 rounded-full border border-primary/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
