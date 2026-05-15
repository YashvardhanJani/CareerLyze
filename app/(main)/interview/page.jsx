"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Sparkles, 
  Paperclip, 
  Mic, 
  Send,
  LineChart,
  Briefcase,
  TrendingUp,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MockInterviewPage() {
  return (
    <div className="relative h-[calc(100vh-8rem)] flex flex-col justify-between">
      
      {/* Floating Widgets */}
      <div className="absolute top-4 right-4 flex flex-col gap-4 w-[320px] z-10 hidden xl:flex">
        
        {/* Intelligence Hub */}
        <Card className="bg-card/80 backdrop-blur-md border-border/50 shadow-2xl">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-secondary font-bold text-sm mb-3">
              <LineChart className="w-4 h-4" /> Intelligence Hub
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-muted-foreground font-bold uppercase mb-1">
                  CURRENT CONFIDENCE
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[70%]" />
                </div>
              </div>

              <div>
                <div className="text-xs text-muted-foreground font-bold uppercase mb-1">SUGGESTED ACTION</div>
                <div className="bg-primary/10 border border-primary/20 text-foreground text-xs p-2 rounded-md">
                  Practice your &apos;Greatest Weakness&apos; response. High impact for Senior roles.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-Time Job Matching */}
        <Card className="bg-card/80 backdrop-blur-md border-border/50 shadow-2xl">
          <CardContent className="p-4">
            <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-3">
              REAL-TIME JOB MATCHING
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-secondary/80 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Lead PM • Revolut</h4>
                  <p className="text-xs text-muted-foreground">London (Remote)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-secondary/80 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Senior PM • Stripe</h4>
                  <p className="text-xs text-muted-foreground">Dublin / Hybrid</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 md:px-20 lg:px-40 pb-20 pt-10">
        
        {/* Header Hero */}
        <div className="text-center mb-16 mt-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-card to-primary/20 shadow-xl mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight mb-4">
            How can I assist your career?
          </h1>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            I&apos;m your AI career strategist. I can help you prep for interviews, optimize your resume, or analyze market trends.
          </p>
        </div>

        {/* Chat Bubbles */}
        <div className="space-y-6 max-w-3xl mx-auto">
          
          {/* User Bubble */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-secondary border border-border flex-shrink-0" />
            <div className="bg-secondary/40 text-foreground p-4 rounded-2xl rounded-tl-sm border border-border/50 text-sm leading-relaxed">
              I&apos;m preparing for a Senior Product Manager role at a FinTech company. Can you help me practice some behavioral questions and review my pitch?
            </div>
          </motion.div>

          {/* AI Bubble */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 flex-row-reverse"
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div className="bg-primary/5 border border-primary/20 text-foreground p-5 rounded-2xl rounded-tr-sm text-sm leading-relaxed max-w-[90%]">
              <p className="mb-4">
                Absolutely. For a Senior PM role in FinTech, companies usually prioritize <strong className="text-foreground dark:text-white">Regulatory Knowledge</strong>, <strong className="text-foreground dark:text-white">Scale Operations</strong>, and <strong className="text-foreground dark:text-white">Stakeholder Alignment</strong>.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-card/50 p-3 rounded-lg border border-border/50">
                  <div className="text-[10px] text-secondary font-bold uppercase mb-1 tracking-wider">Strategy</div>
                  <div className="font-semibold text-foreground">Practice STAR Method</div>
                </div>
                <div className="bg-card/50 p-3 rounded-lg border border-border/50">
                  <div className="text-[10px] text-primary font-bold uppercase mb-1 tracking-wider">Analysis</div>
                  <div className="font-semibold text-foreground">Review Tech Stack</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Input Area */}
      <div className="max-w-3xl mx-auto w-full px-4 sticky bottom-4">
        
        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <Button variant="outline" size="sm" className="bg-card/80 backdrop-blur border-border/50 text-xs rounded-full h-8">
            <FileText className="w-3 h-3 mr-2" /> Optimize LinkedIn
          </Button>
          <Button variant="outline" size="sm" className="bg-card/80 backdrop-blur border-border/50 text-xs rounded-full h-8">
            <TrendingUp className="w-3 h-3 mr-2" /> Salary Insights
          </Button>
          <Button variant="outline" size="sm" className="bg-card/80 backdrop-blur border-border/50 text-xs rounded-full h-8">
            <Briefcase className="w-3 h-3 mr-2" /> Certification Paths
          </Button>
        </div>

        {/* Input Bar */}
        <div className="relative flex items-center">
          <div className="absolute left-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            <Paperclip className="w-5 h-5" />
          </div>
          <Input 
            className="w-full bg-card/90 backdrop-blur-xl border-border h-14 pl-12 pr-24 rounded-full text-foreground shadow-2xl focus-visible:ring-primary/50"
            placeholder="Ask CareerLyze anything..."
          />
          <div className="absolute right-2 flex items-center gap-1">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground rounded-full h-10 w-10">
              <Mic className="w-5 h-5" />
            </Button>
            <Button size="icon" className="bg-primary hover:bg-primary/90 text-foreground rounded-full h-10 w-10 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <Send className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
}
