"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiKaggle, SiDevpost} from 'react-icons/si'
import { cn } from '@/lib/utils'

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
  {
    name: "Kaggle",
    url: "https://www.kaggle.com/ronitraj1",
    icon: SiKaggle,
  },
  {
    name: "Devfolio",
    url: "https://devfolio.co/@ronit_raj",
    icon: SiDevpost,
  }
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl flex items-center justify-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">RR</span>
            </span>
          </Link>
        </div>

        {/* Right side - Social links and theme toggle */}
        <div className="flex items-center space-x-4">
          {/* Social Links */}
          <div className="flex items-center space-x-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-foreground/60 hover:text-foreground transition-colors hover:scale-110 transform duration-200",
                  link.name === "Kaggle" && "text-blue-400/70 hover:text-blue-400"
                )}
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className={cn(
              "w-9 h-9 rounded-lg flex items-center justify-center",
              "hover:bg-accent/10 hover:text-accent-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
          >
            {currentTheme === "dark" ? (
              <RiSunLine className="h-4 w-4" />
            ) : (
              <RiMoonFill className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </div>
    </header>
  )
} 