"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Terminal, Server, Database, Cloud } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Abstract background gradient spots */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-50 dark:opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-cyan-400/10 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-50 dark:opacity-20 animate-pulse delay-1000" />
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-md border border-border/50 text-xs font-semibold uppercase tracking-widest mb-8 text-muted-foreground shadow-sm">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-blue-500"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            Backend Developer <br className="hidden md:block" />
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground">
              Robust Systems.
            </span> */}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-medium">
            I'm Denis Athaullah, I develop backend systems using Node.js and Laravel, with experience building REST APIs, admin dashboards, and real-world applications including booking and ordering systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <Link 
              href="/projects" 
              className="w-full sm:w-auto h-14 px-8 rounded-full bg-foreground text-background flex items-center justify-center gap-2 font-semibold hover:scale-105 transition-transform active:scale-[0.98] shadow-xl shadow-foreground/10"
            >
              Explore My Work
              <ArrowRight size={18} />
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto h-14 px-8 rounded-full bg-card/50 backdrop-blur-md border border-border/80 flex items-center justify-center font-semibold hover:bg-muted transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 text-muted-foreground/50 hover:text-foreground transition-colors cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Philosophy & Specialization Split */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-muted/20 border-y border-border/40" />
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <h2 className="text-4xl font-extrabold tracking-tight">The Foundation of <br/> Backend Systems.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reliable applications start with well-structured backend development. I focus on building maintainable systems, designing clear API structures, and managing databases effectively.
            </p>
            
            <div className="space-y-6 pt-4">
              {[
                { title: "System Development", desc: "Building backend applications using Node.js (Express, NestJS) and Laravel for real-world use cases such as booking and ordering systems." },
                { title: "Database Management", desc: "Working with MySQL and MongoDB to design schemas, handle data efficiently, and support application needs." },
                { title: "API Development", desc: "Working with MySQL and MongoDB to design schemas, handle data efficiently, and support application needs." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 size-2 rounded-full bg-foreground" />
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-foreground hover:gap-3 transition-all pt-4">
              More about my approach <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Specialization Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 grid grid-cols-2 gap-4"
          >
             <div className="col-span-2 group relative overflow-hidden rounded-3xl bg-card border border-border p-8 hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="absolute top-0 right-0 p-8 text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
                  <Server size={100} />
                </div>
                <Terminal className="text-blue-500 mb-6" size={32} />
                <h3 className="text-2xl font-bold mb-2">Node.js Ecosystem</h3>
                <p className="text-muted-foreground max-w-[80%] relative z-10">Experience working with Express and NestJS, and building backend applications using modern asynchronous JavaScript.</p>
             </div>
             
             <div className="group relative overflow-hidden rounded-3xl bg-card border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-end h-48">
                <Database className="text-cyan-500 mb-auto" size={28} />
                <h3 className="text-lg font-bold">Data Engines</h3>
                <p className="text-sm text-muted-foreground">MySQL, MongoDB</p>
             </div>
             
             <div className="group relative overflow-hidden rounded-3xl bg-card border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-end h-48">
                <Cloud className="text-slate-500 mb-auto" size={28} />
                <h3 className="text-lg font-bold">ORM / ODM</h3>
                <p className="text-sm text-muted-foreground">Prisma, Mongoose</p>
             </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}