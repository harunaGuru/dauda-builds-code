import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>haruna.dauda123@gmail.com</p>
              <p>+234 9034307059</p>
              <p>Abuja, Nigeria (GMT+1)</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-1">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/harunaGuru?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              {/* <Button variant="ghost" size="sm" asChild>
                <a
                  href="mailto:haruna.dauda123@gmail.com"
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button> */}
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://linkedin.com/in/dauda-haruna"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Dauda Oladipupo Haruna. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
