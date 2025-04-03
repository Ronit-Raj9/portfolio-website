"use client"

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { cn } from "@/lib/utils"

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Ronit-Raj9",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ronit-raj-662485225/",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    url: "https://x.com/ronit__raj",
    icon: FaTwitter,
  },
]

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Next.js
            </a>
            {" "}and{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "rounded-full p-2 transition-colors",
                "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <link.icon className="h-5 w-5" />
              <span className="sr-only">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
} 