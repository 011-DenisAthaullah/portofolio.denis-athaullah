"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function ProjectPage() {
    const [filter, setFilter] = useState("All");
    const filters = ["All", "Backend", "Fullstack", "API"];

    return (
        <main className="max-w-6xl mx-auto py-24 px-4 min-h-[85vh]">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/80 backdrop-blur-sm border border-border/50 text-xs font-bold uppercase tracking-widest mb-6 text-muted-foreground shadow-sm">
                   Portfolio
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Projects.</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed font-medium">
                    A selection of my recent backend engineering work. Hover over the cards to explore the technical stack and view the open-source repositories.
                </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="flex flex-wrap gap-2 mb-12"
            >
                {/* {filters.map(f => (
                    <button 
                       key={f}
                       onClick={() => setFilter(f)}
                       className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                           filter === f ? "bg-foreground text-background shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                       }`}
                    >
                        {f}
                    </button>
                ))} */}
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((project) => (
                    <motion.div key={project.title} variants={itemVariants} className="h-full">
                        <ProjectCard {...project}/>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}