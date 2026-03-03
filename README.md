# Yin-Yang Portfolio

A minimal, high-performance portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, following a strict Yin-Yang design philosophy.

## 🎨 Design Philosophy

- **Yin-Yang Aesthetic**: Seamless contrast between dark and light sections
- **Minimal Color Palette**: Exclusively black, white, and neutral grays
- **Performance-First**: All animations ≤ 0.5s for crisp, snappy interactions
- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles & Tailwind directives
├── lib/
│   └── animations.ts       # Framer Motion variants (≤0.5s)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## ✨ Features

### Sections

- **Hero (Yin - Dark)**: Full-screen introduction with animated text and CTAs
- **About (Transition)**: Gradient transition zone showcasing skills and tech stack
- **Projects (Yang - Light)**: Featured full-stack projects with hover animations
- **Footer (Yin - Dark)**: Contact information and links

### Animations

- Scroll-triggered reveal animations
- Staggered children animations
- Hover states with scale and lift effects
- Smooth page load transitions
- All animations capped at 0.5s maximum duration

### Projects Showcased

1. **Trace - Web Analytics Platform**: Next.js + TypeScript + PostgreSQL + InsForge SDK
2. **Draftly AI - Design Assistant**: TypeScript + Next.js + OpenRouter AI + Inngest
3. **Event Ticketing Microservices**: NestJS + PostgreSQL + Kafka + TypeScript

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## 📝 Customization

### Update Personal Information

Edit the content in [app/page.tsx](app/page.tsx):

- Update the `projects` array with your own projects
- Modify the `techStack` array with your technologies
- Change contact links in the footer section

### Adjust Animations

All animation variants are centralized in [lib/animations.ts](lib/animations.ts). Each variant includes:
- Duration (max 0.5s)
- Easing function
- Initial/animate states

### Color Customization

While the design follows a strict Yin-Yang philosophy, you can adjust the neutral grays in [tailwind.config.ts](tailwind.config.ts) under the `colors` theme extension.

## 🚢 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
```

Then push to GitHub and import the repository in Vercel.

### Build for Production

```bash
npm run build
npm run start
```

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Mehul**
- GitHub: [@mehuldotdev](https://github.com/mehuldotdev)
- Email: mehehehul748@gmail.com

---

Built with ⚡ and ☯️
