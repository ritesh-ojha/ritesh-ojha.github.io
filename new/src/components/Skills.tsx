
"use client";

import React from "react";
import { skills } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-headline">Technical Toolkit</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => (
            <Card key={category.category} className="glass hover:border-primary/40 transition-all duration-300 group">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium group-hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
