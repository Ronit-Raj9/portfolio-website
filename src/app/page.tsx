"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { FaGithub, FaLinkedin, FaTwitter, FaBrain, FaCode, FaDatabase, FaLaptopCode, FaServer, FaGraduationCap, FaRobot } from "react-icons/fa"
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiPytorch, 
  SiTensorflow, 
  SiMongodb, 
  SiReact,
  SiFastapi,
  SiOpenai,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiAmazon,
  SiDocker,
  SiKaggle,
  SiGooglecloud,
  SiNumpy,
  SiPandas
} from "react-icons/si"
import { TbBrandReact } from "react-icons/tb"
import { BsGraphUp, BsLightningChargeFill, BsArrowRight } from "react-icons/bs"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDistanceToNow, format } from 'date-fns';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '@/components/ui/tooltip';

// Simple component to avoid import errors
const GitHubCalendar = ({ data }: any) => <div>{/* Placeholder */}</div>

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
  {
    name: "Kaggle",
    url: "https://www.kaggle.com/ronitraj1",
    icon: SiKaggle,
  },
]

const SKILLS = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#539E43" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "Matplotlib", icon: FaDatabase, color: "#11557C" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "GNNs", icon: BsGraphUp, color: "#3B82F6" },
  { name: "PyGeometric", icon: BsGraphUp, color: "#4B0082" },
  { name: "Diffusion", icon: BsLightningChargeFill, color: "#9333EA" },
  { name: "GANs", icon: FaBrain, color: "#10B981" },
  { name: "RL", icon: FaRobot, color: "#F59E0B" },
  { name: "LLMs", icon: SiOpenai, color: "#00A67E" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" }
]

const PROJECTS = [
  {
    title: "GeneTrust AI Studio",
    description: "A CRISPR intelligence platform using Next.js, TypeScript, and DNABERT model for complex genetic sequence analysis and ranking.",
    image: "/projects/genetrust.png",
    tags: ["Next.js", "TypeScript", "Express.js", "FastAPI", "PyTorch"],
    demoLink: "https://genetrust.vercel.app/",
    codeLink: "https://github.com/Ronit-Raj9/hackhazard-project-genetrust",
    type: "AI / Bioinformatics"
  },
  {
    title: "Ionia Testing Platform",
    description: "Comprehensive end-to-end JEE testing system with robust authentication, admin panel, and detailed performance analytics.",
    image: "/projects/ionia.png",
    tags: ["Next.js", "JavaScript", "Express.js", "Cloudinary", "TailwindCSS"],
    demoLink: "https://www.ionia.sbs/",
    codeLink: "https://github.com/Ronit-Raj9/ionia-next",
    type: "EdTech"
  },
  
  {
    title: "E-Cell IIIT Gwalior",
    description: "Real-time analytics dashboard for e-commerce platforms with predictive inventory management and customer behavior insights.",
    image: "/projects/ecell.png",
    tags: ["Next.js", "MongoDB", "Chart.js", "Tailwind CSS"],
    demoLink: "https://ecell-puce.vercel.app/",
    codeLink: "https://github.com/Ronit-Raj9/Ecell",
    type: "Web Development"
  },
  {
    title: "Graph Neural Networks",
    description: "",
    image: "/projects/graphml.png",
    tags: ["PyTorch", "Python", "Graph Neural Networks", "Data Visualization"],
    demoLink: "https://graphml.example.com",
    codeLink: "https://github.com/Ronit-Raj9/graph-research",
    type: "Research"
  }
]

const EXPERIENCE = [
  {
    role: "Co-Founder & Lead Developer",
    company: "Garudex Labs",
    period: "January 2025 - Present",
    description: "Leading the development of next-generation AI solutions for Entrepreneurs and founders, focused on innovation, scalability, and real-world impact.",
    skills: [
      "Team Leadership",
      "Product Development",
      "Machine Learning",
      "Client Relations"
    ]
  }
  ,
  {
    role: "Full Stack Developer",
    company: "Ionia",
    period: "December 2024 - March 2025",
    description: "Comprehensive end-to-end JEE testing system with robust authentication, admin panel, and detailed performance analytics.",
    skills: ["Typescript", "Node.js", "Next.js", "Express.js", "MongoDB","Google Cloud Platform"]
  },
  {
    role: "Winner - Smart India Hackathon 2024 (PS1604 RAG-MLLM)",
    company: "IIIT Gwalior (Host Institute)",
    period: "December 2024",
    description: "Led Team BeGANs to victory in SIH 2024 with Project SHAKTI – an advanced multimodal LLM system for military tactical intelligence. Developed vision-language models with RAG and memory retrieval to enhance image conversational capabilities. Achieved 85% OCR accuracy on scanned documents. Project tagline: 'Pixels to Perfection'.",
    skills: [
      "Large Language Models (LLMs)",
      "Vision-Language Modeling",
      "Retrieval-Augmented Generation (RAG)",
      "Multimodal AI",
      "OCR Optimization",
      "Model Deployment",
      "Problem Solving",
      "Technical Communication"
    ]
  }
  
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

function TypedText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  
  useEffect(() => {
    let currentIndex = 0
    let typingTimer: NodeJS.Timeout
    
    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1))
        currentIndex++
        typingTimer = setTimeout(typeNextChar, 100)
      } else {
        setIsTyping(false)
      }
    }
    
    // Start typing
    typingTimer = setTimeout(typeNextChar, 300)
    
    // Cursor blink effect
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    
    return () => {
      clearTimeout(typingTimer)
      clearInterval(cursorTimer)
    }
  }, [text])
  
  return (
    <span className="text-foreground">
      {displayedText}
      {showCursor && <span className="text-primary">|</span>}
    </span>
  )
}

function SkillCard({ skill, index }: { skill: typeof SKILLS[0], index: number }) {
  const ref = useRef(null)
  
  // Create a safe icon component with fallback
  const IconComponent = skill.icon || FaCode
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.05, 
        duration: 0.5,
        ease: "easeOut"
      }}
      className="group relative flex flex-col items-center p-6 bg-accent/5 backdrop-blur-sm rounded-xl hover:bg-accent/10 transition-colors"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          delay: index * 0.05 + 0.2, 
          type: "spring", 
          stiffness: 100 
        }}
        className="relative w-16 h-16 mb-4"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
        <div className="relative flex items-center justify-center w-full h-full bg-background rounded-full">
          <IconComponent className="w-8 h-8" style={{ color: skill.color }} />
        </div>
      </motion.div>
      <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group flex flex-col md:flex-row w-full gap-0 md:h-[380px] rounded-2xl overflow-hidden bg-gradient-to-br from-background/90 to-background/60 backdrop-blur-md border border-accent/5 hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl"
    >
      {/* Content - Left Side */}
      <div className="flex flex-col justify-between p-8 md:p-10 w-full md:w-1/2 md:max-w-[580px] relative z-10">
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
        >
          <span className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-primary/10 
            text-primary text-xs font-medium tracking-wider"
          >
            {project.type}
          </span>
        </motion.div>
        
        {/* Title with animated underline effect */}
        <div className="group/title mb-4">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-foreground group-hover/title:text-primary transition-colors"
          >
            {project.title}
          </motion.h3>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            className="h-0.5 bg-primary rounded-full mt-2 group-hover:w-[100px] transition-all duration-300"
          />
        </div>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          className="text-muted-foreground mb-6 line-clamp-3"
        >
          {project.description}
        </motion.p>
        
        {/* Tags */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {project.tags.map((tag, tagIndex) => (
            <motion.span 
              key={tag} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.05 + (tagIndex * 0.05) + 0.5, 
                duration: 0.3
              }}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent/10 
                text-accent-foreground hover:bg-accent/20 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Action Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
          className="flex gap-3 items-center mt-auto"
        >
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 py-2.5 px-5 rounded-lg font-medium 
              bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg shadow-primary/5 
              hover:shadow-primary/10 transition-all duration-300"
          >
            Live Demo <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
          
          <motion.a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-background/80 
              text-foreground backdrop-blur-sm border border-accent/10 hover:border-accent/30 
              shadow-sm hover:shadow-md transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
        </motion.div>
        
        {/* Visual design elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-purple-500/5 blur-3xl opacity-50"></div>
      </div>
      
      {/* Image - Right Side */}
      <div className="relative w-full md:w-1/2 h-60 md:h-full overflow-hidden">
        {/* Image Overlay Gradients */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 
          opacity-50 group-hover:opacity-30 transition-opacity duration-500"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-l from-transparent to-background z-10 
          opacity-0 md:opacity-30 group-hover:opacity-0 transition-opacity duration-500"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/40 to-purple-600/40 mix-blend-overlay 
          opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"
        />
        
        {/* Project Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            delay: index * 0.1, 
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="w-full h-full"
        >
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index < 2}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function ExperienceCard({ experience, index }: { experience: typeof EXPERIENCE[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        ease: "easeOut"
      }}
      className="relative pl-8 pb-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-primary after:absolute after:left-[5px] after:top-[22px] after:h-[calc(100%-22px)] after:w-0.5 after:bg-primary/30 last:after:hidden"
    >
      <div className="mb-1 text-xl font-bold">{experience.role}</div>
      <div className="mb-2 flex items-center gap-2">
        <span className="font-medium text-primary">{experience.company}</span>
        <span className="text-sm text-muted-foreground">• {experience.period}</span>
      </div>
      <p className="mb-3 text-muted-foreground">{experience.description}</p>
      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <span key={skill} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

// Return type for the GitHub data
interface GitHubData {
  profile: {
    name: string;
    avatarUrl: string;
    followers: number;
    following: number;
    publicRepos: number;
    totalStars: number;
    url: string;
    bio: string;
    createdAt: string;
  };
  availableYears: number[];
  selectedYear: number;
  repos: number;
  topRepositories: {
    name: string;
    stars: number;
    forks: number;
    url: string;
    description: string;
    language: string;
  }[];
  languages: {
    name: string;
    percentage: number;
  }[];
  contributions: {
    total: number;
    code: number;
    issues: number;
    prs: number;
  };
  contributionCalendar: {
    totalContributions: number;
    weeks: {
      firstDay: string;
      days: {
        count: number;
        date: string;
        weekday: number;
      }[];
    }[];
  };
  contributionsByMonth: Record<string, number>;
  repositoryCommits: {
    name: string;
    commitCount: number;
  }[];
  lastUpdated: string;
}

// Function to get GitHub data with year filtering
async function getGitHubData(year?: number): Promise<GitHubData> {
  const params = year ? `?year=${year}` : '';
  const response = await fetch(`/api/github${params}`, { cache: 'no-store' });
  
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub data');
  }
  
  return response.json();
}

// Utility function to get color level based on contribution count
function getColorLevel(count: number): string {
  if (count === 0) return 'bg-slate-100 dark:bg-slate-800';
  if (count < 5) return 'bg-green-100 dark:bg-green-900';
  if (count < 10) return 'bg-green-300 dark:bg-green-700';
  if (count < 20) return 'bg-green-500 dark:bg-green-500';
  return 'bg-green-700 dark:bg-green-300';
}

function GitHubSection() {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [hoverInfo, setHoverInfo] = useState<{count: number, date: string} | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getGitHubData(selectedYear || undefined);
        setGithubData(data);
        // Initialize with the current year if not already set
        if (!selectedYear) {
          setSelectedYear(data.selectedYear);
        }
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [selectedYear]);

  // Select a different year
  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
  };

  if (loading || !githubData) {
    return (
      <div className="container mx-auto p-4">
        <Skeleton className="h-64 w-full rounded-lg" />
      </div>
    );
  }

  return (
    <section id="github" className="w-full py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 block relative inline-block"
            >
              OPEN SOURCE
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary/60 to-purple-600/60 rounded-full"
              />
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
            >
              GitHub Activity
            </motion.h2>
          </div>

          {/* Profile Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={githubData.profile.avatarUrl} alt={githubData.profile.name} />
                  <AvatarFallback>{githubData.profile.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold">{githubData.profile.name}</h2>
                  <p className="text-muted-foreground">{githubData.profile.bio}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">{githubData.profile.followers} followers</Badge>
                    <Badge variant="secondary">{githubData.profile.following} following</Badge>
                    <Badge variant="secondary">{githubData.profile.publicRepos} repositories</Badge>
                    <Badge variant="secondary">{githubData.profile.totalStars} stars</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Joined {formatDistanceToNow(new Date(githubData.profile.createdAt), { addSuffix: true })}
                  </p>
                </div>
                <a 
                  href={githubData.profile.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Contribution Calendar Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <h3 className="text-xl font-semibold">GitHub Contributions</h3>
                  
                  {/* Year selection buttons */}
                  <div className="flex flex-wrap gap-2">
                    {githubData.availableYears.map(year => (
                      <button
                        key={year}
                        onClick={() => handleYearSelect(year)}
                        className={`px-3 py-1 text-sm rounded-md ${
                          year === selectedYear
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Contribution stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-2xl font-bold">{githubData.contributions.total}</p>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Code</p>
                    <p className="text-2xl font-bold">{githubData.contributions.code}</p>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Issues</p>
                    <p className="text-2xl font-bold">{githubData.contributions.issues}</p>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">PRs</p>
                    <p className="text-2xl font-bold">{githubData.contributions.prs}</p>
                  </div>
                </div>
                
                {/* Calendar visualization */}
                <div className="mt-4 relative">
                  <TooltipProvider>
                    <div className="grid grid-cols-53 gap-1">
                      {/* Month labels */}
                      <div className="col-span-full grid grid-cols-53 mb-1">
                        {Array.from({ length: 12 }).map((_, i) => {
                          const month = new Date(selectedYear || new Date().getFullYear(), i, 1);
                          // Position months approximately in the right columns
                          const colStart = Math.floor((i * 53) / 12) + 1;
                          const colEnd = Math.floor(((i + 1) * 53) / 12) + 1;
                          const colSpan = colEnd - colStart;
                          
                          return (
                            <div 
                              key={i} 
                              className="text-xs text-muted-foreground"
                              style={{ 
                                gridColumn: `${colStart} / span ${colSpan}`,
                                textAlign: 'center'
                              }}
                            >
                              {format(month, 'MMM')}
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Day of week labels */}
                      <div className="col-span-1 grid grid-rows-7 gap-1 mr-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                          <div key={i} className="text-xs text-muted-foreground h-3 flex items-center">
                            {i % 2 === 0 ? day : ''}
                          </div>
                        ))}
                      </div>
                      
                      {/* Calendar cells */}
                      <div className="col-span-52 grid grid-cols-52 grid-rows-7 gap-1">
                        {githubData.contributionCalendar.weeks.flatMap((week, weekIndex) => 
                          week.days.map((day, dayIndex) => (
                            <Tooltip key={`${weekIndex}-${dayIndex}`}>
                              <TooltipTrigger asChild>
                                <div 
                                  className={`h-3 w-3 rounded-sm ${getColorLevel(day.count)} cursor-pointer`}
                                  style={{ 
                                    gridColumn: weekIndex + 1,
                                    gridRow: day.weekday + 1
                                  }}
                                />
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="text-xs">
                                  <p><b>{day.count} contributions</b></p>
                                  <p>{format(new Date(day.date), 'MMM d, yyyy')}</p>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          ))
                        )}
                      </div>
                    </div>
                  </TooltipProvider>
                  
                  {/* Color legend */}
                  <div className="flex items-center gap-1 mt-4 justify-end">
                    <span className="text-xs text-muted-foreground mr-1">Less</span>
                    <div className={`h-3 w-3 rounded-sm bg-slate-100 dark:bg-slate-800`}></div>
                    <div className={`h-3 w-3 rounded-sm bg-green-100 dark:bg-green-900`}></div>
                    <div className={`h-3 w-3 rounded-sm bg-green-300 dark:bg-green-700`}></div>
                    <div className={`h-3 w-3 rounded-sm bg-green-500 dark:bg-green-500`}></div>
                    <div className={`h-3 w-3 rounded-sm bg-green-700 dark:bg-green-300`}></div>
                    <span className="text-xs text-muted-foreground ml-1">More</span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-2 text-right">
                    Last updated: {formatDistanceToNow(new Date(githubData.lastUpdated), { addSuffix: true })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <main ref={containerRef} className="relative flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative flex w-full flex-col items-center justify-center min-h-screen">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-background to-background -z-10"></div>
        
        <Scene3D />
        
        <div className="container px-4 pt-24 md:pt-32 pb-12 md:pb-20 flex flex-col items-center justify-center min-h-[80vh]">
          <motion.div
            style={{ opacity, scale }}
            className="flex flex-col items-center gap-8 text-center"
          >
            {/* Profile Image with Circular Decorations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative flex items-center justify-center mb-8"
            >
              {/* Outer circle */}
              <div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-primary/30 animate-pulse-slow"></div>
              
              {/* Middle circle */}
              <div className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full border border-primary/20"></div>
              
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-accent/10 z-10"
              >
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-10"></div>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 blur-xl z-0"></div>
                <div className="w-full h-full relative z-[1]">
                  {/* Replace with your profile image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    {/* Comment this placeholder when you add your image */}
                    <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">RR</span>
                    
                    {/* Uncomment and add your image path */}
                    <Image
                      src="/images/profile.jpeg"
                      alt="Profile Photo"
                      fill
                      className="object-cover"
                      priority
                    />
                   
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Name with spaced letters */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl text-foreground/80 tracking-[0.5em] uppercase mt-4"
            >
              R O N I T &nbsp; R A J
            </motion.h2>

            {/* Tagline with typing effect */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl md:text-2xl font-medium text-foreground mt-2"
            >
              <TypedText text="Coding Dreams Into Reality" />
            </motion.h3>

            {/* Navigation Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mt-12"
            >
              {["ABOUT", "EXPERIENCE", "SKILLS", "PROJECTS"].map((item, index) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="px-6 py-2 bg-background/10 backdrop-blur-sm border border-accent/20 rounded-full text-sm font-medium 
                  uppercase tracking-wider hover:bg-accent/10 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex items-center gap-6 mt-6"
            >
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-2 rounded-full text-foreground/60 hover:text-foreground transition-colors hover:scale-110 transform duration-200 relative group",
                    link.name === "Kaggle" && "text-blue-400/70 hover:text-blue-400"
                  )}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name === "Kaggle" && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background border border-accent/20 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      Kaggle Profile
                    </span>
                  )}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Resume Download Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 right-8 z-10"
        >
          <a 
            href="/resume_web.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary/80 backdrop-blur-sm text-white rounded-full hover:bg-primary transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
            download
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="font-medium">Resume</span>
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center p-1">
            <motion.div 
              animate={{ 
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-1 h-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-accent/5">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              About Me
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6 text-lg"
            >
              <p>

              I'm a second-year student at IIIT Gwalior, deeply passionate about merging AI, mathematics,
               and scientific computing to address complex challenges. As a backend and AI/ML developer,
                I explore deep learning and graph neural networks, working on problems from natural language
                 processing to molecular modeling. I'm committed to open-source projects, contributing code 
                 and ideas to advance computational intelligence. My curiosity and dedication
                  fuel my journey to create innovative solutions through algorithms and data.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {SKILLS.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="bg-accent/5 p-6 rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <FaCode className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-muted-foreground">Building responsive, accessible, and performant web applications with modern frameworks and tools.</p>
              </div>
              
              <div className="bg-accent/5 p-6 rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <FaBrain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Artificial Intelligence</h3>
                <p className="text-muted-foreground">Developing machine learning models and algorithms to solve complex real-world problems.</p>
              </div>
              
              <div className="bg-accent/5 p-6 rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <FaDatabase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
                <p className="text-muted-foreground">Creating robust data pipelines and infrastructure to support analytics and machine learning workloads.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 bg-accent/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4"
            >
              <div>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 block relative inline-block"
                >
                  Featured Work
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary/60 to-purple-600/60 rounded-full"
                  />
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
                >
                  Recent Projects
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Link href="/projects">
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2.5 rounded-lg text-sm font-medium bg-primary/10 text-primary 
                      hover:bg-primary/20 transition-all duration-300 border border-primary/10 
                      hover:border-primary/30 shadow-sm hover:shadow-md flex items-center gap-2"
                  >
                    View All Projects <BsArrowRight />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            
            <div className="flex flex-col space-y-20">
              {PROJECTS.slice(0, 3).map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-16 text-center"
            >
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Interested in seeing more of my work? Check out my full portfolio for a comprehensive showcase of my projects.
              </p>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 
                    transition-all duration-300 shadow-md hover:shadow-lg shadow-primary/10 
                    hover:shadow-primary/20 inline-flex items-center gap-2"
                >
                  Explore All Projects <BsArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Professional Journey
            </h2>
            
            <div className="relative">
              {EXPERIENCE.map((exp, index) => (
                <ExperienceCard key={exp.company} experience={exp} index={index} />
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="pl-8 mb-8"
              >
                <div className="flex items-center">
                  <FaGraduationCap className="mr-2 text-xl text-primary" />
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <p className="mt-2">
                  <span className="font-medium">IIIT Gwalior</span> · B.Tech. in Mathematics & Scientific Computing
                </p>
                <p className="text-sm text-muted-foreground">2023 - 2027</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <GitHubSection />

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 bg-accent/5">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Have a project in mind or just want to connect? Feel free to reach out!
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-background rounded-xl p-8 shadow-lg"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-accent/5 border border-accent/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-accent/5 border border-accent/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-accent/5 border border-accent/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-3 rounded-lg bg-accent/5 border border-accent/10 focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[150px]"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-accent/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:ronitk964@gmail.com" className="text-primary hover:underline">
                    ronitk964@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Gwalior, India
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Follow</h3>
                  <div className="flex justify-center gap-4 mt-2">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <link.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 