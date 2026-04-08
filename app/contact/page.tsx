"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { Github } from "@/components/Icons";

export default function ContactPage() {
    return (
        <main className="max-w-5xl mx-auto py-24 px-4 min-h-[85vh]">
            <div className="flex">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/80 backdrop-blur-sm border border-border/50 text-xs font-bold uppercase tracking-widest mb-6 text-muted-foreground shadow-sm">
                            Contact
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]">
                            Let's build <br className="hidden md:block"/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">something great.</span>
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-md font-medium">
                            If you have a project in mind or would like to collaborate, feel free to reach out. I'm always open to new opportunities and discussions.
                        </p>
                    </div>

                    <div className="space-y-4 fle">
                        <a href="mailto:denisath02@gmail.com" className="group flex items-center gap-5 p-5 rounded-2xl border border-border/50 bg-card/60 backdrop-blur hover:border-blue-500/50 hover:bg-card transition-all shadow-sm">
                            <div className="size-14 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-muted-foreground/80 mb-1 uppercase tracking-wider">Email</p>
                                <p className="text-foreground font-semibold group-hover:text-blue-500 transition-colors">denisath02@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://github.com/011-DenisAthaullah" target="_blank" rel="noreferrer" className="group flex items-center gap-5 p-5 rounded-2xl border border-border/50 bg-card/60 backdrop-blur hover:border-foreground/30 hover:bg-card transition-all shadow-sm">
                            <div className="size-14 rounded-full bg-foreground/5 text-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Github size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-muted-foreground/80 mb-1 uppercase tracking-wider">GitHub</p>
                                <p className="text-foreground font-semibold transition-colors">011-DenisAthaullah</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/denis-athaullah-467818376/" target="_blank" rel="noreferrer" className="group flex items-center gap-5 p-5 rounded-2xl border border-border/50 bg-card/60 backdrop-blur hover:border-foreground/30 hover:bg-card transition-all shadow-sm">
                            <div className="size-14 rounded-full bg-foreground/5 text-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-muted-foreground/80 mb-1 uppercase tracking-wider">LinkedIn</p>
                                <p className="text-foreground font-semibold transition-colors">Denis Athaullah</p>
                            </div>
                        </a>
                        
                        <div className="group flex items-center gap-5 p-5 rounded-2xl border border-border/50 bg-card/60 backdrop-blur shadow-sm">
                            <div className="size-14 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-muted-foreground/80 mb-1 uppercase tracking-wider">Location</p>
                                <p className="text-foreground font-semibold">Indonesia • Available for full-time (Jabodetabek) and remote (national & international)</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-8 md:p-10 rounded-[2rem] border border-border/50 bg-card/50 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten pointer-events-none" />
                    
                    <form className="space-y-6 flex flex-col relative z-10" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2 group">
                            <label htmlFor="name" className="text-sm font-semibold text-foreground ml-1 group-focus-within:text-blue-500 transition-colors">Name</label>
                            <input 
                                id="name" type="text" placeholder="John Doe" 
                                className="w-full bg-background border border-border/80 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium shadow-sm"
                            />
                        </div>
                        <div className="space-y-2 group">
                            <label htmlFor="email" className="text-sm font-semibold text-foreground ml-1 group-focus-within:text-blue-500 transition-colors">Email</label>
                            <input 
                                id="email" type="email" placeholder="john@example.com" 
                                className="w-full bg-background border border-border/80 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium shadow-sm"
                            />
                        </div>
                        <div className="space-y-2 group">
                            <label htmlFor="message" className="text-sm font-semibold text-foreground ml-1 group-focus-within:text-blue-500 transition-colors">Message</label>
                            <textarea 
                                id="message" rows={5} placeholder="How can I help you?" 
                                className="w-full bg-background border border-border/80 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none font-medium shadow-sm"
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className="w-full bg-foreground text-background font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-[0.98] mt-4 shadow-xl shadow-foreground/10"
                        >
                            Send Message
                            <Send size={18} className="-mt-0.5" />
                        </button>
                    </form>
                </motion.div> */}
            </div>
        </main>
    )
}