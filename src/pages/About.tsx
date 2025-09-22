import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate frontend developer crafting digital experiences with modern technologies
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <Card className="p-8">
            <CardContent className="p-0">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a frontend developer with 4+ years of experience, based in Abuja, Nigeria. 
                I've built a range of apps from streaming to ecommerce and bring backend experience 
                (Node.js + Express) to help consume APIs and troubleshoot quickly. I specialize in 
                creating performant, accessible web applications that provide exceptional user 
                experiences across all devices.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-2">Bachelor of Agriculture in Animal Sciences</h3>
                <p className="text-muted-foreground mb-2">Obafemi Awolowo University, Ile-Ife</p>
                <p className="text-sm text-muted-foreground">2008 – 2013</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-2">Full-stack Development Bootcamp</h3>
                <p className="text-muted-foreground mb-2">Devsnet Bootcamp</p>
                <p className="text-sm text-muted-foreground">2022 – 2023</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Working Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <Card className="p-8 bg-gradient-card">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-4">Working Style</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Collaboration Approach</h3>
                  <p className="text-muted-foreground">
                    I believe in clear communication, iterative development, and 
                    close collaboration with designers and stakeholders.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Availability</h3>
                  <p className="text-muted-foreground">
                    Available for both freelance projects and full-time roles. 
                    Based in GMT+1 timezone with flexible working hours.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Get In Touch
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;