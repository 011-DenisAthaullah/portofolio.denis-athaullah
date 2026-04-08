"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="max-w-5xl mx-auto py-24 px-4 min-h-[85vh]">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-20"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/80 backdrop-blur-sm border border-border/50 text-xs font-bold uppercase tracking-widest mb-6 text-muted-foreground shadow-sm">
                    About Me
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                    Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Code.</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed md:text-xl font-medium max-w-3xl">
                    I am a Backend Developer with experience building backend systems using Node.js (Express, NestJS) and Laravel, including admin dashboards, booking systems with payment integration, and REST APIs. I aim to continue improving my skills and contribute to building reliable and maintainable applications.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 sm:gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-12"
                >
                    <div>
                        <h2 className="text-2xl font-bold mb-4 tracking-tight">Engineering Approach</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            I focus on building backend systems that solve real application needs. I aim to write clean and maintainable code, structure APIs clearly, and manage data efficiently to support application functionality.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold mb-5 tracking-tight">Core Skills</h2>
                        <ul className="space-y-4">
                            {[
                                "Building backend systems with Node.js (Express, NestJS) and Laravel",
                                "Working with MySQL and MongoDB",
                                "Developing secure RESTful & GraphQL APIs",
                                "Developing RESTful APIs and integrating payment services",
                                "Creating admin dashboards and real-world application backends"
                            ].map(item => (
                                <li key={item} className="flex gap-4 items-start text-muted-foreground group">
                                    <div className="mt-1 bg-card border border-border rounded-full p-0.5 group-hover:border-blue-500 transition-colors">
                                        <CheckCircle2 className="text-blue-500 shrink-0" size={14} />
                                    </div>
                                    <span className="font-medium group-hover:text-foreground transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="rounded-3xl border border-border/50 bg-card p-8 lg:p-10 shadow-2xl relative overflow-hidden sticky top-24"
                >
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse mix-blend-multiply dark:mix-blend-lighten" />
                    <h2 className="text-2xl font-bold mb-8 tracking-tight">Tech Stack</h2>
                    
                    <div className="space-y-8 flex flex-col h-full">
                        <div>
                            <h3 className="text-xs font-bold text-muted-foreground/80 uppercase tracking-widest mb-4">Languages & Frameworks</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Node.js", "JavaScript", "TypeScript", "NestJS", "Express", "Laravel", "PHP"].map(t => (
                                    <span key={t} className="px-3 py-1.5 bg-muted/80 backdrop-blur rounded-full text-sm font-semibold border border-border/50 text-foreground hover:bg-muted transition-colors cursor-default">{t}</span>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-xs font-bold text-muted-foreground/80 uppercase tracking-widest mb-4">Databases & Caching</h3>
                            <div className="flex flex-wrap gap-2">
                                {["MySQL", "MongoDB", "Prisma ORM"].map(t => (
                                    <span key={t} className="px-3 py-1.5 bg-muted/80 backdrop-blur rounded-full text-sm font-semibold border border-border/50 text-foreground hover:bg-muted transition-colors cursor-default">{t}</span>
                                ))}
                            </div>
                        </div>
                        
                        {/* <div>
                            <h3 className="text-xs font-bold text-muted-foreground/80 uppercase tracking-widest mb-4">Infrastructure & Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Docker", "Git", "AWS", "Nginx", "Linux"].map(t => (
                                    <span key={t} className="px-3 py-1.5 bg-muted/80 backdrop-blur rounded-full text-sm font-semibold border border-border/50 text-foreground hover:bg-muted transition-colors cursor-default">{t}</span>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </motion.div>
            </div>
        </main>
    )
}