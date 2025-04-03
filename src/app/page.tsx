"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiPytorch, 
  SiTensorflow, 
  SiMongodb, 
  SiReact,
  SiFastapi,
  SiOpenai
} from "react-icons/si"
import { TbBrandReact } from "react-icons/tb"
import { BsGraphUp, BsLightningChargeFill, BsBrainHalf } from "react-icons/bs"
import dynamic from "next/dynamic"
import { useRef } from "react"

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false })

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

const SKILLS = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "PyGeometric", icon: BsGraphUp, color: "#4B0082" },
  { name: "Diffusion", icon: BsLightningChargeFill, color: "#9333EA" },
  { name: "GANs", icon: BsBrainHalf, color: "#10B981" },
  { name: "LLMs", icon: SiOpenai, color: "#00A67E" },
  { name: "GNNs", icon: BsGraphUp, color: "#3B82F6" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "React", icon: TbBrandReact, color: "#61DAFB" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" }
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

function SkillCard({ skill, index }: { skill: typeof SKILLS[0], index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="group relative flex flex-col items-center p-6 bg-accent/5 backdrop-blur-sm rounded-xl hover:bg-accent/10 transition-colors"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
        className="relative w-16 h-16 mb-4"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
        <div className="relative flex items-center justify-center w-full h-full bg-background rounded-full">
          <skill.icon className="w-8 h-8" style={{ color: skill.color }} />
        </div>
      </motion.div>
      <h3 className="text-lg font-semibold">{skill.name}</h3>
    </motion.div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="relative flex w-full flex-col items-center justify-center min-h-screen">
        <Scene3D />
        
        <div className="container px-4 pt-24 md:pt-32 pb-12 md:pb-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto"
          >
            {/* Hero Content */}
            <motion.div variants={fadeIn} className="space-y-4">
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I&#39;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Ronit Raj</span>
              </h1>
              <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
                AI/ML Developer & Open Source Enthusiast
              </h2>
            </motion.div>

            <motion.p 
              variants={fadeIn}
              className="text-lg sm:text-xl text-muted-foreground max-w-[42rem] leading-relaxed"
            >
              I build intelligent systems and modern web applications with cutting-edge technologies.
              Focused on creating elegant solutions to complex problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeIn} className="flex gap-4">
              <Link href="/projects">
                <button className={cn(
                  "px-8 py-4 rounded-lg font-semibold text-lg",
                  "bg-primary text-primary-foreground",
                  "hover:bg-primary/90 transition-colors"
                )}>
                  View Projects
                </button>
              </Link>
              <Link href="/contact">
                <button className={cn(
                  "px-8 py-4 rounded-lg font-semibold text-lg",
                  "bg-secondary text-secondary-foreground",
                  "hover:bg-secondary/90 transition-colors"
                )}>
                  Contact Me
                </button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeIn} className="flex items-center gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:bg-accent transition-colors"
                >
                  <link.icon className="w-7 h-7 text-foreground" />
                </a>
              ))}
            </motion.div>

            {/* Skills Grid */}
            <motion.div variants={fadeIn} className="w-full mt-16">
              <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Skills & Technologies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {SKILLS.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 