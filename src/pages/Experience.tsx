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
import { Calendar, MapPin, ExternalLink, Download } from "lucide-react";
import { Link } from "react-router-dom";
const CV = "/Haruna-Dauda-Resume.pdf";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance & Contract Software Developer",
      company: "Self-employed",
      location: "Abuja, Nigeria",
      period: "Nov 2025 – Present",
      type: "Freelance",
      achievements: [
        "Delivered 10+ production websites for founders, creators, and small businesses with an average 40% performance improvement per project.",
        "Integrated third-party services and RESTful APIs to enhance secure authentication, streamline data handling, and optimize server-client communication.",
        "Collaborated with clients to gather requirements, deliver tailored features, and enhance user satisfaction through improved performance and responsiveness.",
        "Conducted user feedback sessions and usability testing to prioritize features, shaping product roadmap for 5+ client projects.",
      ],
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "REST APIs",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Vehenecit",
      location: "Remote",
      period: "Jan 2024 – Oct 2025",
      type: "Contract",
      achievements: [
        "Led full refactor of front-end architecture, enhancing code maintainability and accelerating feature development by 10%.",
        "Implemented user-driven testing strategy focused on customer pain points, minimizing user-reported bugs and improving performance scores.",
        "Analyzed user search behavior to build SEO-optimized pages, driving significant increase in organic traffic.",
      ],
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React Testing Library",
        "Framer Motion",
      ],
    },
    {
      title: "Junior Frontend Developer",
      company: "Unicon Group",
      location: "Lagos, Nigeria",
      period: "Aug 2022 – Dec 2023",
      type: "Full-time",
      achievements: [
        "Designed and built scalable front-end solutions for high-traffic applications using React, Next.js, and Redux Toolkit.",
        "Improved application security and user experience through global state management with Zustand, persistent login sessions, and multi-role dashboards.",
        "Debugged and conducted rigorous code reviews, decreasing user-reported issues by 15%.",
      ],
      tech: [
        "React",
        "Next.js",
        "Redux Toolkit",
        "Zustand",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "Frontend Developer (Intern)",
      company: "HiiT Plc",
      location: "Abuja, Nigeria",
      period: "Sep 2021 – Jul 2022",
      type: "Internship",
      achievements: [
        "Developed interactive web applications using React, Next.js, and TypeScript, improving user engagement.",
        "Enhanced UI/UX with smooth animations using Framer Motion and GSAP while ensuring accessibility compliance.",
        "Acquired experience in microservice-based frontend architecture using Next.js within an Nx monorepo, facilitating scalable development.",
      ],
      tech: ["React", "Next.js", "TypeScript", "Framer Motion", "GSAP", "Nx"],
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS",
        "React Router",
      ],
    },
    {
      category: "Styling",
      items: [
        "Tailwind CSS",
        "Styled-Components",
        "SCSS",
      ],
    },
    {
      category: "State Management & Forms",
      items: [
        "Redux Toolkit",
        "Zustand",
        "TanStack Query",
        "React Hook Form",
        "Zod",
      ],
    },
    {
      category: "Animation",
      items: ["GSAP", "Framer Motion"],
    },
    {
      category: "Data Visualization",
      items: [
        "TanStack/React-Table",
        "Recharts",
        "Leaflet",
        "Mapbox",
      ],
    },
    {
      category: "Testing",
      items: ["Vitest", "React Testing Library"],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "API Integration",
        "Swagger",
      ],
    },
    {
      category: "Database & Infrastructure",
      items: [
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Kafka",
        "Docker",
      ],
    },
    {
      category: "Practices",
      items: [
        "Responsive Design",
        "Agile & Scrum",
        "Content Optimization",
      ],
    },
  ];


  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Experience</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and technical expertise
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="relative hover:shadow-glow transition-all duration-300">
                  {/* Timeline dot */}
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-md"></div>

                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-muted-foreground">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-center bg-gradient-card rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground mb-6">
            Download my full CV or get in touch to discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CV} download="Haruna-Dauda-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>


            <Button variant="outline" size="lg" asChild>
              <Link to="/contact" className="inline-flex items-center">
                <ExternalLink className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
