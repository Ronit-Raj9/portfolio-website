"use client"

import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { cn } from "@/lib/utils"

const PROJECTS = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js, TypeScript, and TailwindCSS.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB"],
    github: "https://github.com/yourusername/project-one",
    demo: "https://project-one.vercel.app",
  },
  {
    title: "Project Two",
    description: "An open-source contribution to a major project, implementing new features and fixing bugs.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com/yourusername/project-two",
    demo: "https://project-two.vercel.app",
  },
  {
    title: "Project Three",
    description: "A mobile-responsive web application with real-time updates and authentication.",
    tags: ["Vue.js", "Firebase", "TailwindCSS", "TypeScript"],
    github: "https://github.com/yourusername/project-three",
    demo: "https://project-three.vercel.app",
  },
]

export default function Projects() {
  return (
    <div className="container py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center mb-12"
      >
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          My Projects
        </h1>
        <p className="text-muted-foreground max-w-[42rem] mx-auto">
          Here are some of my featured projects. Each one is carefully crafted with attention to detail and best practices.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={cn(
              "group relative rounded-lg border p-6 shadow-md",
              "hover:shadow-lg transition-all duration-200",
              "bg-background"
            )}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-accent transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-accent transition-colors"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 