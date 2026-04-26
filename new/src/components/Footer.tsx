
"use client";

import React from "react";
import { personalInfo } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="border-t py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <a href="#" className="font-headline font-bold text-2xl tracking-tighter">
            ROJHA<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            Architecting intelligent solutions for a digital-first world.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <a href="/resume.pdf" className="hover:text-primary transition-colors">Resume</a>
        </div>

        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
