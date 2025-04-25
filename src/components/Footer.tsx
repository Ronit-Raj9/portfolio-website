"use client"

import { useState } from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa"
import { BsArrowRightShort } from "react-icons/bs"
import { cn } from "@/lib/utils"
import Link from "next/link"

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

const FOOTER_LINKS = [
  {
    title: "Sections",
    links: [
      { label: "Home", href: "/#" },
      { label: "About", href: "/#about" },
      { label: "Skills", href: "/#skills" },
      { label: "Projects", href: "/#projects" },
      { label: "Experience", href: "/#experience" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Resume", href: "/resume.pdf" },
      { label: "Publications", href: "/publications" },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      setEmail("")
    }, 1000)
  }

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* About */}
          <div className="space-y-6">
            <div className="flex items-center">
              <h3 className="text-2xl font-bold">Portfolio</h3>
            </div>
            
            <p className="text-muted-foreground max-w-sm">
              Building innovative AI solutions and web applications. Always exploring the frontier of technology and science.
            </p>
            
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "rounded-full p-2 transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    "bg-accent/5"
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title} className="space-y-4">
                <h4 className="font-semibold">{group.title}</h4>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-muted-foreground">
              Subscribe to receive updates on my latest projects and articles.
            </p>

            {isSubscribed ? (
              <div className="bg-primary/10 text-primary rounded-lg p-4">
                Thanks for subscribing! You'll receive updates soon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your-email@example.com"
                    className="flex-1 rounded-lg border border-accent/20 bg-accent/5 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "rounded-lg bg-primary text-primary-foreground p-2",
                      "hover:bg-primary/90 transition-colors",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50",
                      "disabled:opacity-50 disabled:cursor-not-allowed"
                    )}
                  >
                    <BsArrowRightShort className="h-5 w-5" />
                  </button>
                </div>
              </form>
            )}
            
            <p className="text-sm text-muted-foreground">
              I respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ronit Raj. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with 
            <FaHeart className="h-3 w-3 text-red-500" /> 
            using
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:underline underline-offset-4 mx-1"
            >
              Next.js
            </a>
            &
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:underline underline-offset-4 ml-1"
            >
              Tailwind
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
} 