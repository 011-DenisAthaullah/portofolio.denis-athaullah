import { Mail } from "lucide-react";
import { Github } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 mt-20 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-5xl px-4 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-xl font-black tracking-tight flex items-center gap-2">
             <div className="size-6 bg-foreground rounded flex items-center justify-center">
                <span className="text-background text-xs font-black leading-none pb-0.5">D</span>
             </div>
             Denis.
          </span>
          <p className="text-sm text-muted-foreground mt-2 font-medium max-w-sm">
            Backend Developer working with Node.js, NestJS, and Laravel to build scalable backend systems.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end justify-end gap-3">
           <div className="flex items-center gap-5">
              <a href="https://github.com/011-DenisAthaullah" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground hover:-translate-y-0.5 transition-all">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://gitlab.com/DenisAthaullah" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-orange-500 hover:-translate-y-0.5 transition-all">
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
                  <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"/>
                </svg>
                <span className="sr-only">GitLab</span>
              </a>
              <a href="https://www.linkedin.com/in/denis-athaullah-467818376/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-blue-500 hover:-translate-y-0.5 transition-all">
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
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:denisath02@gmail.com" className="text-muted-foreground hover:text-foreground hover:-translate-y-0.5 transition-all">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
           </div>
           <p className="text-xs text-muted-foreground font-medium">© {new Date().getFullYear()} Denis Athaullah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}