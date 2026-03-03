/**
 * YIN-YANG PORTFOLIO - FEATURE REFERENCE
 * =======================================
 * 
 * DESIGN SYSTEM
 * -------------
 * Philosophy: Stark contrast between darkness (Yin) and light (Yang)
 * 
 * Color Palette:
 * - Yin (Dark):  #000000, #0a0a0a, #1a1a1a
 * - Yang (Light): #ffffff, #fafafa, #f5f5f5
 * - Neutrals: 50-900 grayscale (see tailwind.config.ts)
 * 
 * 
 * SECTION BREAKDOWN
 * -----------------
 * 
 * 1. HERO SECTION (Yin - Dark Mode)
 *    - Full-screen dark background (#0a0a0a)
 *    - Large typography (6xl-9xl)
 *    - Animated text entries (fadeInUp, fadeInDown)
 *    - CTA buttons with hover states
 *    - Scroll indicator animation
 *    Duration: All animations ≤ 0.5s
 * 
 * 2. ABOUT SECTION (Transition Zone)
 *    - Gradient: from-yin → via-neutral-900 → to-yang-light
 *    - Two-column layout (description + tech stack)
 *    - Scroll-triggered reveal animation
 *    - Tech stack badges with hover effects
 *    Duration: 0.5s reveal, 0.2s hover
 * 
 * 3. PROJECTS SECTION (Yang - Light Mode)
 *    - Bright background (#fafafa)
 *    - Grid layout (responsive: 1→2→3 columns)
 *    - Project cards with:
 *      * Hover lift effect (-8px translateY)
 *      * Border color transition
 *      * Subtle gradient overlay on hover
 *      * Tech stack badges
 *      * Dual CTA buttons (View/Source)
 *    Duration: 0.5s reveal, 0.3s hover
 * 
 * 4. FOOTER SECTION (Return to Yin)
 *    - Dark background matching hero
 *    - Contact CTA and links
 *    - GitHub and email buttons
 *    - Copyright notice
 *    Duration: 0.4s reveal
 * 
 * 
 * ANIMATION SYSTEM
 * ----------------
 * 
 * Strict Performance Rule: Maximum 0.5s for all animations
 * 
 * Animation Types:
 * 
 * 1. Initial Page Load
 *    - Staggered container (0.1s delay between children)
 *    - Text elements fade in from bottom
 *    - Navigation fades in from top
 * 
 * 2. Scroll-Triggered
 *    - useInView hook with once:true (performance)
 *    - margin: "-100px" (trigger before element visible)
 *    - Section-level animations
 * 
 * 3. Hover States
 *    - Scale: 1.02-1.1 (subtle)
 *    - Lift: -8px translateY
 *    - Duration: 0.2-0.3s
 *    - Border/background transitions: 0.2s
 * 
 * 4. Button Interactions
 *    - Hover: scale(1.05), 0.2s
 *    - Tap: scale(0.95), 0.1s
 *    - Instant visual feedback
 * 
 * 
 * PROJECT DATA STRUCTURE
 * ----------------------
 * 
 * interface Project {
 *   title: string;           // Project name
 *   description: string;      // 1-2 sentence summary
 *   tech: string[];          // Technology stack
 *   liveUrl: string;         // Live demo or GitHub link
 *   githubUrl: string;       // Source code repository
 *   highlights: string[];    // 4 key features/achievements
 * }
 * 
 * Current Projects:
 * 1. Trace - Web Analytics Platform
 *    - Next.js + TypeScript + PostgreSQL
 *    - Real-time visitor & pageview tracking
 *    - Privacy-first analytics
 * 
 * 2. Draftly AI - Design Assistant
 *    - TypeScript + OpenRouter AI
 *    - AI-powered screen generation
 *    - Inngest workflow orchestration
 * 
 * 3. Event Ticketing Microservices
 *    - NestJS + Kafka + PostgreSQL
 *    - Microservices architecture
 *    - Event-driven notifications
 * 
 * 
 * RESPONSIVE BREAKPOINTS
 * ----------------------
 * 
 * Tailwind default breakpoints:
 * - sm: 640px   (mobile landscape)
 * - md: 768px   (tablet)
 * - lg: 1024px  (desktop)
 * - xl: 1280px  (large desktop)
 * - 2xl: 1536px (extra large)
 * 
 * Layout adjustments:
 * - Hero text: 6xl → 8xl → 9xl
 * - Grid columns: 1 → 2 → 3
 * - Padding: 6 → 12 (responsive)
 * - Section padding: 24 → 32
 * 
 * 
 * FRAMER MOTION VARIANTS
 * ----------------------
 * 
 * Available in lib/animations.ts:
 * 
 * - containerVariants: Staggered children (0.1s stagger)
 * - fadeInUpVariants: Fade + slide up (0.5s)
 * - fadeInDownVariants: Fade + slide down (0.4s)
 * - projectCardVariants: Card reveal + hover lift (0.5s/0.3s)
 * - slideInLeftVariants: Slide from left (0.5s)
 * - slideInRightVariants: Slide from right (0.5s)
 * - buttonVariants: Scale on hover/tap (0.2s/0.1s)
 * - listItemVariants: Tech stack items (0.4s)
 * - sectionVariants: Section reveals (0.5s)
 * 
 * All use optimized easing: cubic-bezier or "easeOut"
 * 
 * 
 * PERFORMANCE OPTIMIZATIONS
 * -------------------------
 * 
 * 1. Scroll Animations
 *    - once: true (trigger only once)
 *    - margin: "-100px" (start before visible)
 *    - No unnecessary re-renders
 * 
 * 2. Animation Properties
 *    - Only transform and opacity (GPU accelerated)
 *    - No width/height/color animations
 *    - Borders transition with duration
 * 
 * 3. Font Loading
 *    - Next.js font optimization
 *    - Inter font with subsets
 * 
 * 4. Code Splitting
 *    - App Router automatic splitting
 *    - Client component with "use client"
 * 
 * 5. Production Build
 *    - Tailwind purges unused styles
 *    - Framer Motion tree-shaking
 *    - React optimization
 * 
 * 
 * CUSTOMIZATION CHECKLIST
 * -----------------------
 * 
 * □ Update name in hero (line ~120)
 * □ Change GitHub username in projects (line ~30-60)
 * □ Update email in footer (line ~335)
 * □ Replace project descriptions (line ~20-70)
 * □ Modify tech stack array (line ~73)
 * □ Update metadata in layout.tsx
 * □ Adjust animation durations if needed (lib/animations.ts)
 * □ Test on mobile/tablet/desktop
 * □ Build and deploy (npm run build)
 * 
 * 
 * DEPLOYMENT CHECKLIST
 * --------------------
 * 
 * Pre-deployment:
 * □ npm run build (verify no errors)
 * □ npm run start (test production build locally)
 * □ Check all links work
 * □ Test responsive design
 * □ Verify animations perform well
 * 
 * Vercel deployment:
 * □ Push to GitHub
 * □ Connect repository in Vercel
 * □ Configure build settings (auto-detected)
 * □ Deploy!
 * 
 * 
 * BROWSER SUPPORT
 * ---------------
 * 
 * Supported:
 * - Chrome 90+
 * - Firefox 88+
 * - Safari 14+
 * - Edge 90+
 * 
 * Features require:
 * - CSS Grid
 * - Flexbox
 * - CSS Custom Properties
 * - ES2017+
 * 
 * 
 * FILE TREE
 * ---------
 * 
 * Portfolio/
 * ├── app/
 * │   ├── layout.tsx          # Root layout + metadata
 * │   ├── page.tsx            # Main portfolio page ⭐
 * │   └── globals.css         # Global styles
 * ├── lib/
 * │   └── animations.ts       # Framer Motion variants ⭐
 * ├── tailwind.config.ts      # Tailwind configuration ⭐
 * ├── tsconfig.json           # TypeScript config
 * ├── package.json            # Dependencies
 * ├── next.config.js          # Next.js config
 * ├── postcss.config.js       # PostCSS config
 * ├── README.md               # Documentation
 * ├── CUSTOMIZATION_GUIDE.ts  # Quick reference
 * ├── FEATURE_REFERENCE.ts    # This file
 * └── .gitignore              # Git ignore rules
 * 
 * ⭐ = Primary customization files
 */

export {};
