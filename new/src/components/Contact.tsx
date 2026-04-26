
"use client";

import React from "react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 font-headline">Let's Build Something Great</h2>
            <p className="text-lg text-muted-foreground mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Email</div>
                  <div className="text-xl font-medium">{personalInfo.socials.email}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">LinkedIn</div>
                  <div className="text-xl font-medium">/in/ritesh-ojha</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Location</div>
                  <div className="text-xl font-medium">{personalInfo.socials.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-10 rounded-3xl border">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Name</label>
                  <Input placeholder="John Doe" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Subject</label>
                <Input placeholder="How can I help you?" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Message</label>
                <Textarea placeholder="Describe your project or inquiry..." className="min-h-[150px] bg-background/50" />
              </div>
              <Button size="lg" className="w-full rounded-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
