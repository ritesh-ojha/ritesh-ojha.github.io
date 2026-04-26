
"use client";

import React from "react";
import { experience } from "@/lib/data";

export const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 font-headline text-center">Career Journey</h2>
        
        <div className="space-y-12">
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors pb-12 last:pb-0">
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold">{item.role}</h3>
                  <div className="text-primary font-medium">{item.company}</div>
                </div>
                <div className="text-sm font-bold px-4 py-1 glass rounded-full self-start">
                  {item.duration}
                </div>
              </div>
              
              <ul className="space-y-3">
                {item.achievements.map((ach, i) => (
                  <li key={i} className="text-muted-foreground flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
