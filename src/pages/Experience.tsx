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
import CV from "@/assets/Haruna-Dauda-Resume.pdf";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance & Contract Software Developer",
      company: "Self-employed",
      location: "Abuja, Nigeria",
      period: "Nov 2025 – present",
      type: "Freelance",
      achievements: [
        "Delivered 10+ projects for clients across various industries",
        "Built e-commerce platforms with payment integration",
        "Created landing pages with conversion optimization",
        "Provided ongoing maintenance and support for client websites",
      ],
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Nodejs",
        "Stripe",
        "Firebase",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Vehance Technologies",
      location: "Kano, Nigeria",
      period: "Jan 2024 – Oct 2025",
      type: "Contract",
      achievements: [
        "Led development of responsive web applications serving 10k+ users",
        "Improved application performance by 40% through code optimization",
        "Implemented accessibility features achieving WCAG AA compliance",
        "Mentored junior developers on React best practices",
      ],
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Lighthouse Audit",
        "Shadcn UI",
        "Redux",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Uniccon Group of Companies",
      location: "Lagos, Nigeria",
      period: "Aug 2022 – Dec 2023",
      type: "Full-time",
      achievements: [
        "Led development of responsive web applications serving 10k+ users",
        "Improved application performance by 40% through code optimization",
        "Implemented accessibility features achieving WCAG AA compliance",
        "Mentored junior developers on React best practices",
      ],
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
        "Framer Motion",
        "React Testing Library",
      ],
    },
    {
      title: "Junior Frontend Developer (Intern)",
      company: "HIIT plc",
      location: "Abuja, Nigeria",
      period: "Sep 2021 – Jul 2022",
      type: "Internship",
      achievements: [
        "Developed UI components for internal management system",
        "Collaborated with design team to implement pixel-perfect designs",
        "Participated in code reviews and agile development processes",
        "Built responsive layouts for mobile and desktop platforms",
      ],
      tech: ["React", "JavaScript", "CSS3", "Bootstrap", "MUI", "Git", "Jest"],
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    },
    {
      category: "Styling",
      items: [
        "Tailwind CSS",
        "Styled Components",
        "SASS",
        "Bootstrap",
        "Material UI",
        "shadcn UI",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "Webpack",
        "Vite",
        "Jest",
        "React Testing Library",
        "Postman",
        "Rechart",
        "ApexCharts",
      ],
    },
    {
      category: "Animation",
      items: ["GSAP", "Framer Motion", "CSS Animations"],
    },
    {
      category: "State Management",
      items: ["Redux Toolkit", "Tanstack Query", "Context API", "Zustand"],
    },
    {
      category: "Performance and Optimization",
      items: [
        "Lazy Loading",
        "Code Splitting",
        "Catching Strategies",
        "Rendering Optimization",
        "Lighthouse Audits",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "REST APIs",
        "prisma",
        "mongoose",
        "supabase",
        "stripe",
        "tensorflow",
        "kafka",
        "socket.io",
        "swagger",
        "node-mailer",
        "node-cron",
        "imagekit",
      ],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "Plannetscale"],
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
            <a href={CV} download>
              <Button size="lg" className="group">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>

            <Button variant="outline" size="lg">
              <Link to="/contact">
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
