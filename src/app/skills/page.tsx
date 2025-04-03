"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiAmazonaws,
  SiFirebase,
} from "react-icons/si"

const SKILLS = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description: "Full-stack React framework for production",
    level: "Advanced",
  },
  {
    name: "React",
    icon: SiReact,
    description: "Library for building user interfaces",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "JavaScript with syntax for types",
    level: "Advanced",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    description: "JavaScript runtime built on Chrome's V8",
    level: "Advanced",
  },
  {
    name: "Python",
    icon: SiPython,
    description: "General-purpose programming language",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Utility-first CSS framework",
    level: "Advanced",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    description: "NoSQL database program",
    level: "Intermediate",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    description: "Open source relational database",
    level: "Intermediate",
  },
  {
    name: "Docker",
    icon: SiDocker,
    description: "Platform for developing, shipping, and running applications",
    level: "Intermediate",
  },
  {
    name: "Git",
    icon: SiGit,
    description: "Distributed version control system",
    level: "Advanced",
  },
  {
    name: "AWS",
    icon: SiAmazonaws,
    description: "Cloud computing platform",
    level: "Intermediate",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    description: "Platform for building web and mobile applications",
    level: "Intermediate",
  },
]

export default function Skills() {
  return (
    <div className="container py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center mb-12"
      >
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          My Skills
        </h1>
        <p className="text-muted-foreground max-w-[42rem] mx-auto">
          Here are the technologies I work with. I'm constantly learning and expanding my skillset.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={cn(
              "group relative rounded-lg border p-6 shadow-md",
              "hover:shadow-lg transition-all duration-200",
              "bg-background"
            )}>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full bg-primary transition-all duration-500",
                      skill.level === "Advanced" ? "w-full" : "w-2/3"
                    )}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">{skill.level}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 