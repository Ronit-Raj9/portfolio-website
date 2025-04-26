"use client"

import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { SiKaggle } from "react-icons/si"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentTime, setCurrentTime] = useState(new Date())
  
  // Track mouse position for hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  // Update time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Random inspirational quotes for developers
  const quotes = [
    "Code is poetry written for machines and read by humans.",
    "The best code is no code at all.",
    "First solve the problem, then write the code.",
    "Simplicity is the ultimate sophistication.",
    "Make it work, make it right, make it fast."
  ]
  
  // Use a more stable way to select a quote to prevent flickering
  const [randomQuote, setRandomQuote] = useState("")
  
  useEffect(() => {
    // Set the quote once on component mount
    const quoteIndex = Math.floor(Math.random() * quotes.length)
    setRandomQuote(quotes[quoteIndex])
  }, [])
  
  return (
    <footer className="relative overflow-hidden border-t bg-background/80 backdrop-blur-sm">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="absolute left-1/2 top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container relative z-10 py-12">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8">
          
          {/* Left column - Interactive time & location */}
          <div className="flex flex-col items-center justify-center space-y-4 md:items-start">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-accent/5 p-2">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 blur-md" />
              <div className="relative font-mono text-xs">
                <div className="text-center font-bold">
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="mt-1 text-center text-muted-foreground">
                  Gwalior, IN
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Currently {new Date().getHours() >= 24 || new Date().getHours() < 6 
                ? "sleeping 😴" 
                : new Date().getHours() < 9 
                  ? "having coffee ☕" 
                  : "coding 💻"}
            </p>
          </div>
          
          {/* Middle column - Social links with hover animation */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-1">
              {[
                { icon: FaGithub, url: "https://github.com/Ronit-Raj9", label: "GH" },
                { icon: FaLinkedin, url: "https://www.linkedin.com/in/ronit-raj-662485225/", label: "LI" },
                { icon: FaTwitter, url: "https://x.com/ronit__raj", label: "TW" },
                { icon: SiKaggle, url: "https://www.kaggle.com/ronitraj1", label: "KG" }
              ].map((social, i) => (
                <a 
                  key={social.label}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <div 
                    className="absolute inset-0 bg-accent/5 group-hover:opacity-0 transition-opacity duration-200"
                  />
                  <social.icon className="relative z-10 h-5 w-5 text-foreground/80 group-hover:text-primary transition-colors duration-200" />
                </a>
              ))}
            </div>
            <p className="mt-6 max-w-xs text-center text-sm font-light italic text-muted-foreground">
              "{randomQuote}"
            </p>
          </div>
          
          {/* Right column - Creative contact & availability */}
          <div className="flex flex-col items-center justify-center space-y-4 md:items-end">
            <Link 
              href="mailto:ronitk964@gmail.com"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 font-mono text-sm font-medium"
            >
              <span className="absolute h-0 w-0 rounded-full bg-primary opacity-10 transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
              <span className="relative">ronitk964@gmail.com</span>
            </Link>
            
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground">
                Available for projects
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t border-accent/10 pt-8 text-center md:flex-row md:text-left">
          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">&lt;</span> built with code <span className="text-primary">/&gt;</span>
          </div>
          <div className="flex items-center space-x-1 text-xs">
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <span>{new Date().getFullYear()}</span>
            <div className="h-1 w-1 rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
    </footer>
  )
} 