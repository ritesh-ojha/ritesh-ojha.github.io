
"use client";

import React from "react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Download, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl w-full text-center">
        <div className="inline-block mb-6 px-4 py-1.5 glass rounded-full text-sm font-medium text-primary animate-in fade-in slide-in-from-bottom-4 duration-700">
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          {personalInfo.name}
        </h1>
        
        <p className="text-xl md:text-2xl font-medium gradient-text mb-6 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
          {personalInfo.title}
        </p>
        
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
          {personalInfo.intro}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-20 duration-700 delay-400">
          <Button size="lg" className="rounded-full gap-2 group" asChild>
            <a href="#projects">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full gap-2" asChild>
            <a href="/resume.pdf" download>
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
          <Button size="lg" variant="secondary" className="rounded-full gap-2" asChild>
            <a href="#contact">
              Contact Me
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-6 text-muted-foreground animate-in fade-in slide-in-from-bottom-24 duration-700 delay-500">
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href={`mailto:${personalInfo.socials.email}`} className="hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
