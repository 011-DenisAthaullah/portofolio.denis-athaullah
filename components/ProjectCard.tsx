"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github } from "./Icons";
import { ExternalLink } from "lucide-react";

type Project = {
    title : string
    description : string
    tech : string[]
    image : string
    repo : string
}

export default function ProjectCard({
    title,
    description,
    tech,
    image,
    repo,
}: Project) {
    return(
        <motion.div 
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative rounded-3xl overflow-hidden border border-border/60 bg-card flex flex-col h-full hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 transform-gpu"
        >
            <div className="relative w-full h-60 overflow-hidden bg-muted">
               <Image
                   src={image}
                   alt={title}
                   width={800}
                   height={500}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 backdrop-blur-[2px]">
                  <a 
                     href={repo} 
                     target="_blank" 
                     rel="noreferrer" 
                     className="inline-flex items-center gap-2 text-sm font-bold text-foreground bg-background px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-transform border border-border/80 shadow-2xl"
                  >
                     <Github size={18} /> View Source
                  </a>
               </div>
            </div>

            <div className="p-8 flex-1 flex flex-col relative z-10 bg-card">
                <div className="flex justify-between items-start mb-3">
                   <h3 className="text-2xl font-black tracking-tight group-hover:text-blue-500 transition-colors">{title}</h3>
                   <a href={repo} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink size={20} />
                   </a>
                </div>

                <p className="text-muted-foreground text-[15px] line-clamp-3 mb-8 flex-1 group-hover:line-clamp-none transition-all duration-300 leading-relaxed font-medium">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-border/50">
                {tech.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-bold uppercase tracking-widest bg-muted/60 text-foreground/80 px-3 py-1.5 rounded-md border border-border/40"
                    >
                      {item}
                    </span>
                ))}
                </div>
            </div>
        </motion.div>
    );
}