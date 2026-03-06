/**
 * YIN-YANG PORTFOLIO - QUICK START GUIDE
 * ======================================
 * 
 * This portfolio follows a strict Yin-Yang design philosophy:
 * - Dark (Yin) sections: Hero, Footer
 * - Light (Yang) sections: Projects
 * - Transition zones: About section with gradient
 * 
 * All animations are capped at 0.3 seconds maximum for performance.
 * 
 * KEY FILES TO CUSTOMIZE:
 * -----------------------
 * 
 * 1. app/page.tsx
 *    - Update your personal information
 *    - Modify project details in the `projects` array
 *    - Change tech stack in the `techStack` array
 *    - Update contact links
 * 
 * 2. lib/animations.ts
 *    - All Framer Motion variants (strictly ≤ 0.3s)
 *    - Hover effects and transitions
 *    - Scroll-triggered animations
 * 
 * 3. tailwind.config.ts
 *    - Color palette (Yin-Yang theme)
 *    - Custom animations
 *    - Typography settings
 * 
 * 4. app/layout.tsx
 *    - Metadata (SEO)
 *    - Font configuration
 *    - Global layout structure
 * 
 * GETTING STARTED:
 * ----------------
 * 
 * 1. Install dependencies:
 *    npm install
 * 
 * 2. Run development server:
 *    npm run dev
 * 
 * 3. Open http://localhost:3000
 * 
 * 4. Build for production:
 *    npm run build
 *    npm run start
 * 
 * PROJECT STRUCTURE:
 * ------------------
 * 
 * projects = [
 *   {
 *     title: "Project Name",
 *     description: "Brief description",
 *     tech: ["Next.js", "TypeScript", ...],
 *     liveUrl: "https://github.com/mehuldotdev/repo-name",
 *     githubUrl: "https://github.com/mehuldotdev/repo-name",
 *     highlights: [
 *       "Key feature 1",
 *       "Key feature 2",
 *       ...
 *     ]
 *   },
 *   ...
 * ]
 * 
 * ANIMATION PHILOSOPHY:
 * ---------------------
 * 
 * All animations follow these principles:
 * - Maximum duration: 0.3 seconds
 * - Smooth, natural easing (cubic-bezier)
 * - No floaty or sluggish transitions
 * - Crisp, snappy, responsive feel
 * 
 * Example animation variant:
 * 
 * export const fadeInUpVariants: Variants = {
 *   hidden: { opacity: 0, y: 20 },
 *   visible: {
 *     opacity: 1,
 *     y: 0,
 *     transition: {
 *       duration: 0.3,  // Maximum allowed
 *       ease: [0.25, 0.1, 0.25, 1]
 *     }
 *   }
 * };
 * 
 * CUSTOMIZATION QUICK WINS:
 * --------------------------
 * 
 * 1. Update your name:
 *    Find "Mehul" in app/page.tsx and replace
 * 
 * 2. Update GitHub username:
 *    Replace "mehuldotdev" in project URLs
 * 
 * 3. Update email:
 *    Find "hello@mehul.dev" in footer
 * 
 * 4. Add more projects:
 *    Add new objects to the `projects` array
 * 
 * 5. Modify tech stack:
 *    Update the `techStack` array
 * 
 * DEPLOYMENT:
 * -----------
 * 
 * Best deployed on Vercel:
 * 1. Push code to GitHub
 * 2. Import repository in Vercel
 * 3. Deploy automatically
 * 
 * Alternative: Any Node.js hosting platform
 * - Build: npm run build
 * - Start: npm run start
 * - Port: 3000 (configurable)
 * 
 * PERFORMANCE NOTES:
 * ------------------
 * 
 * - All images should be optimized
 * - Use Next.js Image component when adding images
 * - Animations use GPU acceleration (transform, opacity)
 * - Scroll animations trigger only once for performance
 * 
 * SUPPORT:
 * --------
 * 
 * For issues or questions:
 * - Check README.md for detailed documentation
 * - Review comments in lib/animations.ts
 * - Inspect app/page.tsx for component structure
 */

// This file is for reference only - do not import
export {};
