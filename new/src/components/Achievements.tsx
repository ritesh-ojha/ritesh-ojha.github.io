
"use client";

import React from "react";
import { achievements } from "@/lib/data";
import { Trophy, Award, CheckCircle } from "lucide-react";

export const Achievements = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 font-headline text-center">Recognition</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl flex items-start gap-6 hover:shadow-xl transition-all group">
              <div className="bg-primary/10 p-4 rounded-xl text-primary group-hover:scale-110 transition-transform">
                {idx % 2 === 0 ? <Award /> : <Trophy />}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <div className="text-sm text-primary font-medium mb-1">{item.issuer}</div>
                <div className="text-xs text-muted-foreground">{item.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
