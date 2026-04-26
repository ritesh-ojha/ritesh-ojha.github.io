
"use client";

import React from "react";
import { personalInfo } from "@/lib/data";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="aspect-square rounded-2xl overflow-hidden bg-primary/10 border-2 border-primary/20 p-2">
              <img
                src="https://picsum.photos/seed/ritesh/600/600"
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint="man portrait professional"
              />
            </div>
            {/* Design accents */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full -z-10 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8 font-headline">About Me</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                My journey in technology began with a deep curiosity about how software can bridge the gap between human problems and digital solutions. Today, as a senior engineer, I focus on creating architectures that are not just functional, but elegant and resilient.
              </p>
              <p>
                With years of experience across the stack, I specialize in building high-performance applications using React and Node.js, and integrating machine learning models to solve complex real-world problems.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="text-foreground font-bold mb-2">My Expertise</h4>
                  <p className="text-sm">Scalable Full Stack, AI Integration, Cloud Architecture</p>
                </div>
                <div>
                  <h4 className="text-foreground font-bold mb-2">My Goals</h4>
                  <p className="text-sm">Pioneering ethical AI applications and high-impact software ecosystems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
