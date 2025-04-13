import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Code, Users, Award, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full rounded-md overflow-hidden mb-6 shadow-lg">
      <div className="dark:bg-zinc-900 bg-zinc-100 px-4 py-2 text-sm font-medium flex items-center justify-between border-b border-border">
        <span className="text-xs text-foreground/70">semicolon.js</span>
        <div className="flex space-x-2">
          <span className="text-xs text-foreground/70">Authority</span>
        </div>
      </div>
      <pre className="dark:bg-zinc-900 bg-zinc-100 p-4 overflow-x-auto">
        <code className="text-foreground text-sm">{children}</code>
      </pre>
    </div>
  );
};

const HomeSection: React.FC = () => {
  return (
    <div className="p-4 min-h-screen animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center text-foreground">SemiColon 2025</h1>
        <p className="text-xl text-center mb-8 text-muted-foreground">
          48-Hour Global Hackathon | Aug 20-22, 2025
        </p>
        
        <div className="mb-12">
          <CodeBlock>
            <span className={cn("text-blue-600 dark:text-blue-400")}>const</span> <span className={cn("text-emerald-600 dark:text-emerald-400")}>hackathon</span> <span className="text-foreground">=</span> <span className={cn("text-blue-600 dark:text-blue-400")}>new</span> <span className={cn("text-emerald-600 dark:text-emerald-400")}>Hackathon</span><span className="text-foreground">(</span><span className={cn("text-amber-600 dark:text-amber-300")}>"SemiColon 2025"</span><span className="text-foreground">);</span>
            
            <span className={cn("block mt-4 text-green-600 dark:text-green-400")}>// $20,000+ in Prizes</span>
            <span className={cn("text-emerald-600 dark:text-emerald-400")}>hackathon</span><span className="text-foreground">.</span><span className={cn("text-yellow-600 dark:text-yellow-300")}>addPrizes</span><span className="text-foreground">{"({"}</span>
            <span className={cn("block pl-8 text-foreground")}>cashAwards: </span><span className={cn("text-blue-600 dark:text-blue-300")}>true</span><span className="text-foreground">,</span>
            <span className={cn("block pl-8 text-foreground")}>techGadgets: </span><span className={cn("text-blue-600 dark:text-blue-300")}>true</span><span className="text-foreground">,</span>
            <span className={cn("block pl-8 text-foreground")}>internshipOpportunities: </span><span className={cn("text-blue-600 dark:text-blue-300")}>true</span><span className="text-foreground">,</span>
            <span className={cn("block pl-8 text-foreground")}>totalValue: </span><span className={cn("text-amber-600 dark:text-amber-300")}>"$20,000+"</span>
            <span className={cn("block text-foreground")}>{"})"}</span>
            
            <span className={cn("block mt-4 text-green-600 dark:text-green-400")}>// 5 Exciting Tracks</span>
            <span className={cn("text-emerald-600 dark:text-emerald-400")}>hackathon</span><span className="text-foreground">.</span><span className={cn("text-yellow-600 dark:text-yellow-300")}>setTracks</span><span className="text-foreground">{"(["}</span>
            <span className={cn("block pl-8 text-amber-600 dark:text-amber-300")}>"Web/Mobile Development"</span><span className="text-foreground">,</span>
            <span className={cn("block pl-8 text-amber-600 dark:text-amber-300")}>"AI/Machine Learning"</span><span className="text-foreground">,</span>
            <span className={cn("block pl-8 text-amber-600 dark:text-amber-300")}>"Blockchain"</span><span className="text-foreground">,</span>
            <span className={cn("block pl-8 text-amber-600 dark:text-amber-300")}>"AR/VR"</span><span className="text-foreground">,</span>
            <span className={cn("block pl-8 text-amber-600 dark:text-amber-300")}>"Open Innovation"</span>
            <span className={cn("block text-foreground")}>{"])"}</span>
            
            <span className={cn("block mt-4 text-green-600 dark:text-green-400")}>// Expert Mentorship</span>
            <span className={cn("text-emerald-600 dark:text-emerald-400")}>hackathon</span><span className="text-foreground">.</span><span className={cn("text-yellow-600 dark:text-yellow-300")}>provideMentorship</span><span className="text-foreground">(</span><span className={cn("text-blue-600 dark:text-blue-300")}>true</span><span className="text-foreground">);</span>
            
            <span className={cn("block mt-4 text-green-600 dark:text-green-400")}>// Register now to secure your spot!</span>
            <span className={cn("text-emerald-600 dark:text-emerald-400")}>hackathon</span><span className="text-foreground">.</span><span className={cn("text-yellow-600 dark:text-yellow-300")}>start</span><span className="text-foreground">();</span>
          </CodeBlock>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1 bg-secondary/40 backdrop-blur rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 mr-3 text-primary" />
              <h2 className="text-xl font-semibold">Top Prizes</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Compete for cash awards, tech gadgets, internship opportunities, and more with prizes totaling over $20,000.
            </p>
          </div>
          
          <div className="flex-1 bg-secondary/40 backdrop-blur rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Calendar className="h-8 w-8 mr-3 text-primary" />
              <h2 className="text-xl font-semibold">Key Dates</h2>
            </div>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li><strong>Registration Opens:</strong> April 15, 2025</li>
              <li><strong>Hackathon Kickoff:</strong> May 20, 2025</li>
              <li><strong>Project Submission:</strong> May 22, 2025</li>
              <li><strong>Winners Announced:</strong> May 25, 2025</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1 bg-secondary/40 backdrop-blur rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 mr-3 text-primary" />
              <h2 className="text-xl font-semibold">Innovation Tracks</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Choose from one of our five exciting tracks:
            </p>
            <ul className="text-sm space-y-1 list-disc pl-5 text-muted-foreground">
              <li>Web/Mobile Development</li>
              <li>AI/Machine Learning</li>
              <li>Blockchain</li>
              <li>AR/VR</li>
              <li>Open Innovation</li>
            </ul>
          </div>
          
          <div className="flex-1 bg-secondary/40 backdrop-blur rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 mr-3 text-primary" />
              <h2 className="text-xl font-semibold">Expert Support</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Get guidance from industry professionals throughout the hackathon. Our mentors from leading tech companies will provide feedback, technical advice, and career insights.
            </p>
          </div>
        </div>
        
        <div className="text-center my-10">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 px-8 text-lg">
            Register Now
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Limited slots available. Registration closes on May 10, 2025.
          </p>
        </div>
        
        <div className="bg-secondary/40 backdrop-blur rounded-lg p-6 border border-border hover:shadow-md transition-shadow text-center mb-8">
          <h2 className="text-xl font-semibold mb-4">Previous Winners</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Check out the winning projects from last year's hackathon for inspiration!
          </p>
          <Button variant="outline" className="group">
            <span className="mr-2">View Gallery</span>
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
