
"use client";

import React, { useState } from "react";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const categories = ["All", "AI", "Full Stack", "DevOps"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4 font-headline">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              Selection of some of my most challenging and impactful work, spanning from AI research to production-ready enterprise systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass overflow-hidden group hover:-translate-y-2 transition-all duration-500">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="icon" variant="secondary" className="rounded-full" asChild>
                    <a href={project.github}><Github className="w-5 h-5" /></a>
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full" asChild>
                    <a href={project.live}><ExternalLink className="w-5 h-5" /></a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold px-2 py-0.5 border rounded uppercase">{t}</span>
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
