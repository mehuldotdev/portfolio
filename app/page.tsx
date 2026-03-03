"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  containerVariants,
  fadeInUpVariants,
  fadeInDownVariants,
  projectCardVariants,
  slideInLeftVariants,
  slideInRightVariants,
  buttonVariants,
  listItemVariants,
  sectionVariants,
} from "@/lib/animations";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MagneticButton } from "@/components/MagneticButton";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import { Spotlight } from "@/components/Spotlight";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { MovingBorder } from "@/components/MovingBorder";
import { CardSpotlight } from "@/components/CardSpotlight";
import { ThreeDCard, ThreeDCardBody, ThreeDCardItem } from "@/components/ThreeDCard";
import { HoverBorderGradient } from "@/components/HoverBorderGradient";

// Types
interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  highlights: string[];
}

// Projects Data
const projects: Project[] = [
  {
    title: "Trace - Web Analytics Platform",
    description:
      "A privacy-focused web analytics solution providing real-time insights into website traffic, user behavior, and engagement metrics with an elegant dashboard interface.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "InsForge SDK"],
    liveUrl: "https://r4xctaue.insforge.site/",
    githubUrl: "https://github.com/mehuldotdev/Trace",
    highlights: [
      "Real-time visitor tracking & pageview analytics",
      "Device, browser, and location insights",
      "Top pages and traffic sources analysis",
      "Privacy-first Google Analytics alternative",
    ],
  },
  {
    title: "Draftly AI - Design Assistant",
    description:
      "An AI-powered mobile UI/UX design tool that generates production-ready HTML/CSS screens from natural language prompts, featuring intelligent theming and real-time preview.",
    tech: ["TypeScript", "Next.js", "OpenRouter AI", "Inngest"],
    liveUrl: "https://draftly-ai-eta.vercel.app/",
    githubUrl: "https://github.com/mehuldotdev/Draftly-AI",
    highlights: [
      "AI-driven screen generation via OpenRouter",
      "Multi-screen workflow orchestration with Inngest",
      "Dynamic theming and responsive design",
      "Unsplash integration for realistic imagery",
    ],
  },
  {
    title: "Event Ticketing Microservices",
    description:
      "A scalable event ticketing platform built with microservices architecture, featuring secure ticket purchasing, QR code check-ins, and event-driven notifications.",
    tech: ["NestJS", "PostgreSQL", "Kafka", "TypeScript"],
    githubUrl: "https://github.com/mehuldotdev/event-ticketing-backend",
    highlights: [
      "Microservices with NestJS & Kafka messaging",
      "JWT authentication and role-based access",
      "Drizzle ORM for type-safe database operations",
      "Real-time email notifications via event streams",
    ],
  },
];

// Tech Stack
const techStack = [
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "NestJS", icon: "🐈" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Kafka", icon: "◆" },
  { name: "React", icon: "⚛" },
  { name: "Node.js", icon: "◉" },
  { name: "Drizzle ORM", icon: "◈" },
];

export default function HomePage() {
  // Refs for scroll animations
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });
  const footerInView = useInView(footerRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen">
      <CustomCursor />
      <ScrollProgress />
      {/* HERO SECTION - YIN (DARK MODE) */}
      <section className="relative min-h-screen bg-yin flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <AnimatedGrid />
        <BackgroundBeams />
        <Spotlight />
        <div className="max-w-6xl w-full relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              variants={fadeInDownVariants}
              className="text-neutral-400 text-sm md:text-base tracking-widest uppercase font-mono"
            >
              Full-Stack Developer
            </motion.div>

            {/* Name */}
            <TextGenerateEffect
              words="Mehul"
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-yang-light tracking-tight"
            />

            {/* Tagline */}
            <motion.p
              variants={fadeInUpVariants}
              className="text-xl md:text-2xl lg:text-3xl text-neutral-300 max-w-3xl text-balance leading-relaxed"
            >
              Building robust, scalable applications with Next.js, NestJS,
              TypeScript, and event-driven microservices.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUpVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <MagneticButton>
                <MovingBorder>
                  <motion.a
                    href="#projects"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className="block px-8 py-4 text-yang-light font-semibold transition-colors duration-200"
                  >
                    View Projects
                  </motion.a>
                </MovingBorder>
              </MagneticButton>
              <MagneticButton>
                <motion.a
                  href="#about"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="block px-8 py-4 border-2 border-neutral-600 text-yang-light font-semibold rounded-sm hover:border-neutral-400 transition-colors duration-200"
                >
                  About Me
                </motion.a>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION - TRANSITION ZONE */}
      <section
        id="about"
        ref={aboutRef}
        className="relative min-h-screen bg-gradient-to-b from-yin via-neutral-900 to-yang-light px-6 md:px-12 py-24 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="space-y-16"
          >
            {/* Section Title */}
            <motion.div variants={fadeInUpVariants} className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold text-yang-light">
                About Me
              </h2>
              <div className="h-1 w-24 bg-neutral-500" />
            </motion.div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Description */}
              <motion.div
                variants={slideInLeftVariants}
                className="space-y-6 text-neutral-200"
              >
                <p className="text-lg md:text-xl leading-relaxed">
                  I&apos;m a dedicated full-stack developer specializing in
                  building scalable, modern web applications with a focus on
                  performance, clean architecture, and seamless user experiences.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  With expertise in Next.js, TypeScript, NestJS, and PostgreSQL,
                  I architect solutions ranging from real-time analytics platforms
                  to event-driven microservices and AI-powered design tools.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Every project I build emphasizes type safety, robust database
                  design, and thoughtful API architecture—from microservices with
                  Kafka to pixel-perfect frontend interfaces.
                </p>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                variants={slideInRightVariants}
                className="space-y-8"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-yang-light">
                  Core Technologies
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={aboutInView ? "visible" : "hidden"}
                  className="grid grid-cols-2 gap-4"
                >
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      variants={listItemVariants}
                      whileHover={{ 
                        scale: 1.05, 
                        x: 5,
                        backgroundColor: "rgba(64, 64, 64, 0.3)",
                      }}
                      transition={{ duration: 0.2 }}
                      className="px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-sm text-neutral-100 font-mono text-sm md:text-base hover:border-neutral-500 transition-colors duration-200 cursor-pointer flex items-center gap-3"
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION - YANG (LIGHT MODE) */}
      <section
        id="projects"
        ref={projectsRef}
        className="relative min-h-screen bg-yang-light px-6 md:px-12 py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="space-y-16"
          >
            {/* Section Title */}
            <motion.div variants={fadeInUpVariants} className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold text-yin-dark">
                Featured Projects
              </h2>
              <div className="h-1 w-24 bg-neutral-400" />
              <p className="text-xl text-neutral-600 max-w-3xl">
                A showcase of full-stack applications demonstrating expertise in
                modern web technologies, database design, and API architecture.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER SECTION - RETURN TO YIN (DARK) */}
      <footer
        ref={footerRef}
        className="relative bg-yin px-6 md:px-12 py-16 md:py-24 overflow-hidden"
      >
        <AnimatedGrid />
        <motion.div
          initial="hidden"
          animate={footerInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact CTA */}
            <motion.div variants={slideInLeftVariants} className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-yang-light">
                Let&apos;s Build Something
              </h3>
              <p className="text-xl text-neutral-400">
                Interested in collaborating or discussing a project? Let&apos;s
                connect.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              variants={slideInRightVariants}
              className="flex flex-col space-y-4"
            >
              <motion.a
                href="https://github.com/mehuldotdev"
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="block px-8 py-4 bg-yang-light text-yin-dark font-semibold text-center rounded-sm hover:bg-neutral-200 transition-colors duration-200"
              >
                GitHub Profile
              </motion.a>
              <motion.a
                href="mailto:mehehehul748@gmail.com"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="block px-8 py-4 border-2 border-neutral-600 text-yang-light font-semibold text-center rounded-sm hover:border-neutral-400 transition-colors duration-200"
              >
                Email Me
              </motion.a>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            variants={fadeInUpVariants}
            className="mt-16 pt-8 border-t border-neutral-800 text-center text-neutral-500 font-mono text-sm"
          >
            © 2026 Mehul. Built with Next.js, TypeScript, and Framer Motion.
          </motion.div>
        </motion.div>
      </footer>
    </main>
  );
}

// Project Card Component with 3D Tilt Effect
function ProjectCard({ project }: { project: Project }) {
  return (
    <ThreeDCard className="w-full h-full">
      <ThreeDCardBody className="relative bg-yang-light border border-neutral-200 rounded-lg hover:shadow-2xl hover:shadow-neutral-500/[0.1] transition-all duration-300 h-full">
        <div className="p-6 md:p-8 space-y-6 h-full flex flex-col">
          {/* Title */}
          <ThreeDCardItem translateZ={50}>
            <h3 className="text-2xl font-bold text-yin-dark">
              {project.title}
            </h3>
          </ThreeDCardItem>

          {/* Description */}
          <ThreeDCardItem translateZ={40}>
            <p className="text-neutral-600 leading-relaxed select-text">
              {project.description}
            </p>
          </ThreeDCardItem>

          {/* Highlights */}
          <ThreeDCardItem translateZ={30}>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="text-sm text-neutral-500 flex items-start gap-2 select-text"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 bg-neutral-400 rounded-full flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </ThreeDCardItem>

          {/* Tech Stack */}
          <ThreeDCardItem translateZ={20}>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-neutral-100 border border-neutral-300 text-neutral-700 text-xs font-mono rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ThreeDCardItem>

          {/* Links */}
          <ThreeDCardItem translateZ={60} className="mt-auto pt-4">
            <div className="flex gap-4">
              {project.liveUrl && (
                <HoverBorderGradient containerClassName="flex-1">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="block w-full px-4 py-2 text-yang-light text-center text-sm font-semibold transition-colors duration-200"
                  >
                    View Project
                  </motion.a>
                </HoverBorderGradient>
              )}
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className={`px-4 py-2 border-2 border-neutral-300 text-yin-dark text-center text-sm font-semibold rounded-sm hover:border-neutral-500 transition-colors duration-200 ${
                  project.liveUrl ? "flex-1" : "w-full"
                }`}
              >
                Source Code
              </motion.a>
            </div>
          </ThreeDCardItem>
        </div>
      </ThreeDCardBody>
    </ThreeDCard>
  );
}
