# 🎯 MISSION: Build World-Class Portfolio for GitHub Pages

You are a **Principal Frontend Engineer & Senior Designer** with access to multiple tools and agents. Use them strategically to build a stunning, performant portfolio website for "Kamil Musiał Engineering Studio".

---

## 🤖 AGENT WORKFLOW (IMPORTANT - READ FIRST)

You have access to multiple tools. Use them in this strategic order:

### Phase 1: RESEARCH & PLANNING (15 minutes)
1. **Read project files** (`view` tool):
   - `data/cv.pdf` - Extract ALL content (work experience, projects, achievements, skills, education)
   - `data/linkedin.pdf` - Cross-reference information and validate details
   - `assets/logo.svg` - Analyze SVG structure and extract color values (#3B9FB5 teal/cyan)

2. **Analyze project structure** (`view` tool):
   - Check current directory structure
   - Note that assets are in `/assets` and data in `/data`
   - Logo is SVG format (not PNG) - can be used directly or optimized

3. **Web search** for best practices:
   - "Next.js static export GitHub Pages 2024"
   - "Framer Motion performance best practices"
   - "Geist font implementation Next.js"
   - "next-intl static export setup"

4. **Create project plan** (`create_file`):
   - File structure for Next.js app
   - Component list with priorities
   - Data extraction checklist from CV/LinkedIn
   - Development timeline

### Phase 2: SETUP (20 minutes)
4. **Initialize project** (`bash_tool`):
````bash
   npx create-next-app@latest portfolio --typescript --tailwind --app --no-src-dir
   cd portfolio
   npm install framer-motion lucide-react next-intl
````

5. **Configure for GitHub Pages** (critical files):
   - `next.config.js` with static export + basePath
   - `package.json` scripts
   - `.github/workflows/deploy.yml`
   - `public/.noptimize` (for images)

### Phase 3: DATA EXTRACTION (30 minutes)
6. **Extract ALL data** from CV into TypeScript files:
   - `lib/data/experience.ts` - 6 companies
   - `lib/data/projects.ts` - 30+ projects  
   - `lib/data/achievements.ts` - All achievements
   - `lib/data/skills.ts` - Tech stack
   - `lib/data/education.ts` - Degrees + certs
   - `lib/data/conferences.ts` - Events

7. **Translate content** to PL + EN:
   - `messages/pl.json`
   - `messages/en.json`

### Phase 4: BUILD COMPONENTS (60 minutes)
8. **Core infrastructure**:
   - Layout, providers, theme
   - i18n setup
   - Global styles

9. **Build sections** (in order):
   - Header (nav + lang + theme toggle)
   - Hero (animated background)
   - Stats (counter animations)
   - About
   - Skills
   - Experience (timeline)
   - Projects (filterable grid)
   - Achievements
   - Education
   - Conferences
   - Contact
   - Footer

### Phase 5: POLISH (30 minutes)
10. **Animations** (Framer Motion):
    - Page transitions
    - Scroll animations
    - Hover effects
    - Number counters

11. **Responsive design**:
    - Test mobile (375px)
    - Test tablet (768px)
    - Test desktop (1440px)

12. **Performance**:
    - Optimize images
    - Code splitting
    - Lighthouse audit

### Phase 6: DEPLOYMENT (15 minutes)
13. **Build and test**:
````bash
    npm run build
    npx serve@latest out
````

14. **Create deployment files**:
    - GitHub Actions workflow
    - README with instructions

15. **Final verification**:
    - All links work
    - Both languages work
    - Dark/light mode works
    - Mobile responsive

---

## 🎯 PRIMARY GOALS

- **Target Audience**: Potential clients & investors in tech sector
- **Purpose**: Demonstrate technical excellence, business acumen, leadership
- **Impression**: "Wow effect with class" - advanced animations, modern tech aesthetic
- **Message**: "I'm not looking for a job—I'm hunting impact, innovation, and autonomy"

---

## 🛠 TECH STACK
````json
{
  "framework": "Next.js 14 (App Router + TypeScript)",
  "styling": "TailwindCSS v3.4+",
  "animations": "Framer Motion",
  "i18n": "next-intl",
  "fonts": "Geist Sans + Geist Mono (from next/font)",
  "icons": "Lucide React",
  "deployment": "GitHub Pages (static export)"
}
````

---

## ⚙️ GITHUB PAGES CONFIGURATION (CRITICAL)

### 1. `next.config.js` (MUST BE EXACT)
````javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // CRITICAL: GitHub Pages serves from /repo-name/
  // User will provide repo name, use placeholder for now
  basePath: process.env.NODE_ENV === 'production' ? '/kamil-musial-engineering-studio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kamil-musial-engineering-studio/' : '',
  
  // Required for static export
  images: {
    unoptimized: true,
  },
  
  // Better for GitHub Pages
  trailingSlash: true,
  
  // Strict mode for quality
  reactStrictMode: true,
  
  // Performance
  swcMinify: true,
}

module.exports = nextConfig
````

### 2. `.github/workflows/deploy.yml`
````yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Install dependencies
        run: npm ci
        
      - name: Build with Next.js
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
````

### 3. `package.json` scripts
````json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export"
  }
}
````

### 4. `public/.nojekyll`
Create empty file to prevent GitHub Pages from ignoring files starting with `_`

### 5. Repository Setup Instructions (in README)
````markdown
## GitHub Pages Deployment

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Source: GitHub Actions
4. The site will auto-deploy on push to main
5. Access at: https://[username].github.io/[repo-name]

**Important**: Update `basePath` in `next.config.js` to match your repo name.
````

---

## 🎨 DESIGN SYSTEM

### Colors (from logo: #3B9FB5 teal/cyan)
````css
/* Light Mode */
--primary: #3B9FB5;
--primary-bright: #00D9FF;
--background: #F8FAFC;
--foreground: #0A0E27;
--card: #FFFFFF;
--card-foreground: #0A0E27;
--border: #E2E8F0;
--muted: #64748B;
--muted-foreground: #475569;
--accent: #00D9FF;
--accent-foreground: #FFFFFF;

/* Dark Mode */
--primary: #00D9FF;
--primary-bright: #3EEAFF;
--background: #0A0E27;
--foreground: #F8FAFC;
--card: #111827;
--card-foreground: #F8FAFC;
--border: #1E293B;
--muted: #475569;
--muted-foreground: #94A3B8;
--accent: #3B9FB5;
--accent-foreground: #0A0E27;
````

### Typography
- **Headings**: Geist Mono (700) - tech vibe
- **Body**: Geist Sans (400, 500) - readability
- **Code**: Geist Mono (400)
- **Scale**: text-xs → text-9xl

### Spacing
- Container max-width: 1280px (xl)
- Padding: px-6 md:px-12 lg:px-24
- Sections: py-20 md:py-32
- Cards: p-6 md:p-8

---

## 📐 WEBSITE STRUCTURE

### 1. HEADER (sticky, glass morphism)
````typescript
Components:
- Logo (left) - use uploaded PNG
- Desktop Nav (center): About | Experience | Projects | Achievements | Contact
- Controls (right):
  * Language toggle: 🇵🇱 PL / 🇬🇧 EN
  * Theme toggle: ☀️ / 🌙
- Mobile: Hamburger → slide-in drawer

Styling:
- backdrop-blur-md
- bg-background/80
- border-b border-border
- shadow on scroll (add dynamically)
- z-50 (always on top)
````

### 2. HERO (fullscreen, animated)
````typescript
Content:
- Animated greeting: "Witaj" / "Hello" (typed effect)
- Main: "ENGINEERING STUDIO" (Geist Mono, text-6xl md:text-8xl)
- Tagline: "Innovating Tomorrow, Today"
- Subtitle: "Principal Engineer | System Designer | MBA"
- 3 value props (animated list):
  * "I architect systems from 0 to millions of users"
  * "9+ years across enterprise, fintech, energy, IoT"  
  * "Not looking for a job—hunting impact & autonomy"
- CTAs:
  * Primary: "Zobacz Projekty" → #projects (smooth scroll)
  * Secondary: "Pobierz CV" → /cv.pdf

Background:
- Animated grid pattern with CSS
- Mouse-tracking highlights (use mouse position)
- Subtle particles (Framer Motion)
- Gradient overlay (teal → cyan)
````

### 3. STATS SECTION (animated counters)
````typescript
Layout: Grid 2x3 (mobile) → 6 columns (desktop)

Stats (trigger animation on scroll):
- "9+" - Lat Doświadczenia / Years of Experience
- "30+" - Dostarczonych Projektów / Delivered Projects  
- "1M+" - Użytkowników Skalowanych / Users Scaled
- "99.99%" - SLA Uptime
- "45%" - Redukcja Kosztów / Cost Reduction
- "12+" - Mentorowanych Inżynierów / Engineers Mentored

Styling:
- Number: Geist Mono, text-4xl md:text-6xl, gradient text
- Label: text-sm md:text-base, muted
- Card: glass morphism, hover glow
````

### 4. ABOUT
````typescript
Layout: Text (60%) + Visual (40%)

Text (PL/EN):
"Senior Software Engineer & Tech Leader z 9+ letnim doświadczeniem w dostarczaniu 
produktów od 0 do milionów użytkowników w sektorach: enterprise, fintech, energia, 
retail, IoT. Uznaję się za architekta i skalowatora systemów produkcyjnych używając 
najnowocześniejszych technologii full-stack.

Posiadam MBA w Zarządzaniu Strategicznym i Przywództwie z silnym zrozumieniem 
zarówno technologii jak i wzrostu biznesowego. Jestem force multiplierem i system 
thinkerem - wnoszę technical firepower, DevOps maturity i business intuition do 
każdego projektu.

Jeśli budujesz coś odważnego — wnoszę architekturę, kod, kulturę i przywództwo, 
by uczynić to nieuniknionym."

Visual:
- Highlight badges:
  * MBA in Strategic Management
  * 1st Place HackYeah 2023  
  * 15+ Fullstack Products
  * Blockchain & AI Expert
- Animated on scroll
````

### 5. SKILLS (interactive grid)
````typescript
Categories (tabs or accordion):

1. Languages:
   JavaScript, TypeScript, C#, C++, Python

2. Frontend:
   React, Angular, Vue, Next.js, HTML5, CSS3

3. Backend:
   Node.js, NestJS, Express, .NET

4. Databases:
   MongoDB, PostgreSQL, MariaDB, SQL

5. Cloud & DevOps:
   AWS, Azure, Kubernetes, Docker, CI/CD, Jenkins, GitHub Actions

6. Game Development:
   Unity, WebGL, Custom Engines, 5D Mathematics

7. Other:
   Blockchain, IoT, Microservices, Event-Driven Architecture

Design:
- Grid layout (3-4 columns)
- Each skill = card with icon (Lucide or custom SVG)
- Hover: glow, scale(1.05)
- Animated entrance (stagger)
````

### 6. EXPERIENCE (vertical timeline)
````typescript
Design: Line on left with dots, cards on right
Animate: Slide from right on scroll

Companies (extract from CV):

1. **Coursedog** (Nov 2025 - Present)
   Senior Software Engineer
   [Full description from CV]

2. **Devire** (Apr 2025 - Oct 2025)
   Senior Software Engineering
   Focus: Digital payments & checkout
   Key: OTC management, service fees, payment integrations
   Tech: TypeScript, Node.js, React, AWS, Kubernetes, IaC

3. **ALDI Tech Hub** (Nov 2023 - Apr 2025)
   Senior Technology Consultant
   Role: Product Ownership, DevOps, Architecture, Leadership
   Tech: TypeScript, React, Node.js, AWS, Kubernetes, Microservices

4. **Avenga** (Oct 2022 - Nov 2023)
   Senior Software Engineer
   Tech: TypeScript, React, Node.js, AWS, Jenkins

5. **Euvic** (May 2022 - Oct 2022)
   Backend Developer (Aviation industry)
   Achievement: Rebuilt entire API system in 2 months
   Tech: TypeScript, Angular, NodeJS, Azure, NestJS

6. **Asroom** (Aug 2018 - May 2022)
   Full Stack Developer & Team Lead
   Built in-house tools, managed IT team
   Tech: TypeScript, Angular, React, Vue, Node.js, AWS

7. **Financeroom** (Aug 2015 - Aug 2018)
   Frontend Developer (First role)
   Tech: HTML5, CSS3, JavaScript, WordPress

Each card:
- Company + role (bold, large)
- Duration + location
- Description (2-3 lines)
- Key achievements (bullets)
- Tech stack badges
````

### 7. PROJECTS (LARGEST SECTION - 30+ projects)
````typescript
Header:
- Title: "Projekty" / "Projects"
- Filter: All | Commercial | Competition | University | Private

Layout: Masonry or Grid (3 cols desktop, 1 mobile)

Each card:
- Year badge (top-right)
- Title (Geist Mono)
- Category badge
- Short desc (2-3 lines)
- Tech stack pills
- "Rozwiń" / "Expand" button

On expand (modal or accordion):
- Full description (from CV, both PL/EN)
- Complete tech stack
- Outcomes/Impact
- Links (if any)
- Role & responsibilities

EXTRACT ALL PROJECTS FROM CV:

**COMMERCIAL (11):**
1. 2022 - Bank Pipeline Blockchain (React, Node, TS, Python)
2. 2020 - Machine Registry (React, Node, C++)
3. 2020 - Tourist Vacation Finder (React, Node, TS) - ACQUIRED
4. 2019 - Teaching Programming (JS, C++)
5. 2018 - Online Bakery (React, Node)
6. 2017 - Pizzeria App (Xamarin C#)
7. 2021 - Furniture Platform (Node, React, Unity)
8. 2021 - Electricity Management (Node, React, C++)
9. 2021 - Logistics System (Node, React, C++)
10. 2020 - Hotel Booking Fixes (Node)
11. 2019 - Job Platform (React, Node)

**COMPETITION (10):**
1. 2023 - CIRCLE EDGE - 1st Place HackYeah 2023
2. 2022 - ISS LOOKOUT - NASA Space Apps
3. 2021 - Bank Pipeline - 3rd Asseco
4. 2021 - Air Pollution App
5. 2019 - Website - Distinction "Webmaster"
6. 2019 - Digital Olympics
7. 2019 - Accessibility App - Distinction (AI sign language)
8. 2017 - Diabetes App - 1st Place Comarch
9. 2017 - Diabetes v2 - 2nd + Audience Award
10. 2017 - Family Notifications - 2nd Place

**UNIVERSITY (1):**
1. 2022 - 5D Sci-Fi Game (Unity, C#) - Thesis

**PRIVATE (2):**
1. 2022 - Custom Game Engine (TS, WebGL)
2. 2019 - Doctor Finder (React, Node)

**WITH COMPANIES:**
- 2018 - EU Funding Website (React)
- 2018 - Financial Platform (React)
- 2018 - Women's Travel (React, WP) - ACQUIRED

Animation:
- Stagger entrance
- Hover: lift + glow shadow
- Filter: smooth transition
````

### 8. ACHIEVEMENTS
````typescript
Title: "Osiągnięcia" / "Achievements"

Layout: Highlight cards or timeline

Content (from CV):
- 🏆 1st HackYeah 2023 (Europe's largest)
- 🚀 Scaled 10k → 1M+ users, <2s response, 99.99% uptime
- 🧠 3 microservice ecosystems (4+ teams)
- 💸 Blockchain payment engine (fintech accelerator)
- 🛠 15+ fullstack products
- 📈 45% infrastructure cost reduction
- 🔐 Zero-downtime CI/CD org-wide
- 🎯 Aviation backend rewrite (2mo, 95% bugs gone, 300% faster)
- 💬 12+ engineers mentored
- ⚙️ Custom game engine (TS + WebGL)
- 🧬 AI accessibility app (WSEI award)
- 🌐 Travel marketplace (acquired)
- 💾 50+ APIs built/refactored
- 🔬 5D game simulation (custom math)

Competition results:
- 🥇 1st: HackYeah 2023
- 🥇 1st: Diabetes App (Comarch)
- 🥉 3rd: Bank Pipeline (Asseco)
- 🥈 2nd: Diabetes v2 + Audience
- 🥈 2nd: Family App
- 🏅 Distinctions: Accessibility, Webmaster
- 🎖️ NASA Space Apps, Digital Olympics

Design: Cards with icons, gradient bg, hover animation
````

### 9. EDUCATION & CERTIFICATIONS
````typescript
Title: "Edukacja" / "Education"

EDUCATION:
1. **MBA** - Master of Business Administration (2025)
   Warsaw Business School
   - 180h program
   - Focus: Leadership, Strategy, PM, HR
   - ID: AK/12268/25

2. **Computer Science & Econometrics** (2019-2023)
   WSEI Kraków (not finished)
   - Thesis: "5th dimension in games"
   - Focus: C#, Math, Game Dev

3. **IT Technician** (2015-2019)
   Technical Institute, Myślenice
   - Qualifications: E12, E13, E14

CERTIFICATIONS:
- 98-364: MTA Database (Microsoft) - wL8uY-FMLX
- 98-375: MTA HTML5 (Microsoft) - e3MX-4Tkj
- 98-361: MTA Software Dev (Microsoft) - wy54W-4Smb
- 98-367: MTA Security (Microsoft) - J26m-FVpD
- Front-End Developer (Academy 108, 2017)

Design: Timeline or cards
````

### 10. CONFERENCES
````typescript
Title: "Konferencje" / "Conferences"

List:
- Code Europe 2024 - Kraków
- Code Europe 2023 - Kraków
- Code Europe 2022 - Kraków
- Tech OpenX 2022 - Kraków
- RevDev 2022 - Kraków

Design: Simple list with icons, years
````

### 11. CONTACT (CTA)
````typescript
Title: "Kontakt" / "Contact"

Content:
- Big: "Gotowy na następny przełom?" / "Ready for the next breakthrough?"
- Sub: "Skontaktuj się, aby omówić technologię." / 
       "Let's discuss how technology drives success."

Methods:
- Email: kmusial40@gmail.com (mailto:)
- LinkedIn: linkedin.com/in/kamio90 (new tab)
- Phone: 607771007 (clickable on mobile)

Downloads:
- CV PL (button → /cv.pdf)
- LinkedIn PDF (button → /linkedin.pdf)

CTA: "Wyślij Wiadomość" / "Send Message" (mailto)

Design: Dark card, gradient border, glow hover
````

### 12. FOOTER
````typescript
Content:
- Copyright: © 2024 Kamil Musiał Engineering Studio
- Built with: Next.js, TypeScript, TailwindCSS, Framer Motion
- Social links: LinkedIn, GitHub, Email
- Language indicator

Design: Minimal, py-8, text-sm
````

---

## 🎬 ANIMATIONS (Framer Motion)

### Page Load
````typescript
1. Logo fade in (0.3s delay)
2. Nav items stagger (0.1s between)
3. Hero cascade (heading → subtitle → CTA, 0.2s stagger)
4. Background animate (0.8s)
Total: ~2s fully interactive
````

### Scroll Animations
````typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

Apply to: sections, cards, timeline entries
Use IntersectionObserver for trigger
````

### Hover Effects
````typescript
// Cards
hover: scale(1.03), shadow-2xl, border glow (cyan)

// Buttons  
hover: scale(1.05), brightness(1.1), shadow pulse

// Skills
hover: rotate(2deg), glow, scale(1.1)
````

### Number Counters (Stats)
````typescript
// Trigger on scroll into view
// Animate 0 → target (2s, easeOut)
// Use Framer Motion useSpring or custom hook
````

### Background Animation
````typescript
// Animated grid with CSS
.grid-bg {
  background-image: 
    linear-gradient(rgba(59,159,181,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59,159,181,0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
}

// Mouse tracking (JS)
- Track cursor position
- Highlight grid intersection near cursor
- Parallax effect on scroll
````

---

## 🌍 INTERNATIONALIZATION (next-intl)

### Setup
````typescript
// app/[locale]/layout.tsx structure
// Locales: ['pl', 'en']
// Default: 'pl'

// URL structure:
/ → redirects to /pl
/pl → Polish
/en → English

// Language switcher in header
// Preserves current section (#hash)
````

### Translation Files
````typescript
// messages/pl.json
{
  "nav": {
    "about": "O mnie",
    "experience": "Doświadczenie",
    "projects": "Projekty",
    // ... all labels
  },
  "hero": {
    "greeting": "Witaj",
    "title": "ENGINEERING STUDIO",
    // ... all content
  }
  // ... full translations
}

// messages/en.json
// Complete English translations
````

**IMPORTANT**: Provide FULL translations, not placeholders.

---

## 📱 RESPONSIVE DESIGN

### Breakpoints (Tailwind)
````
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
````

### Key Behaviors
- Header: Hamburger < 768px
- Hero: Stack vertically mobile
- Stats: 2x3 mobile → 6 cols desktop
- Skills: 2 cols mobile → 4-6 desktop
- Timeline: Simplified mobile (no line)
- Projects: 1 col mobile → 2 md → 3 lg
- Footer: Stack mobile

---

## ♿ ACCESSIBILITY

### Requirements
- Semantic HTML (header, nav, main, section, footer)
- ARIA labels on interactive elements
- Keyboard navigation (proper tab order)
- Focus visible: `focus-visible:ring-2 ring-cyan-500`
- Alt text for images
- Color contrast WCAG AA
- Skip to content link
- Heading hierarchy (h1 → h2 → h3)

---

## ⚡ PERFORMANCE

### Targets
- Lighthouse: 95+ all categories
- FCP: <1.5s
- TTI: <3s
- CLS: <0.1

### Optimizations
- Next.js Image (with unoptimized: true)
- Font optimization (next/font)
- Code splitting (dynamic imports)
- Lazy loading (below fold)
- Tree-shaking
- Static export (no server)

---

## 📦 FILES TO CREATE

### Must Create
1. `next.config.js` - GitHub Pages config
2. `tailwind.config.ts` - Colors + fonts
3. `package.json` - Dependencies
4. `.eslintrc.json` - ESLint
5. `.prettierrc` - Prettier
6. `tsconfig.json` - TypeScript
7. `README.md` - Setup + deployment guide
8. `messages/pl.json` - Polish translations
9. `messages/en.json` - English translations
10. `lib/data/*.ts` - All CV data extracted
11. `app/globals.css` - Global styles
12. `.github/workflows/deploy.yml` - CI/CD
13. `public/.nojekyll` - GitHub Pages fix
14. All components (as per structure)

### Assets
- `public/logo.png` - from uploads
- `public/cv.pdf` - from uploads
- `public/linkedin.pdf` - from uploads
- `public/favicon.ico` - generate from logo
- `public/og-image.png` - generate for social

---

## 📝 DATA EXTRACTION (TypeScript)
````typescript
// lib/data/experience.ts
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: {
    pl: string;
    en: string;
  };
  achievements: string[];
  techStack: string[];
  link?: string;
}

export const experiences: Experience[] = [
  // Extract all 6 companies from CV
];

// lib/data/projects.ts
export interface Project {
  id: string;
  title: string;
  year: number;
  category: 'commercial' | 'competition' | 'university' | 'private';
  shortDescription: {
    pl: string;
    en: string;
  };
  fullDescription: {
    pl: string;
    en: string;
  };
  techStack: string[];
  outcome?: string;
  links?: string[];
}

export const projects: Project[] = [
  // Extract all 30+ projects from CV with FULL descriptions
];

// Similar for:
// - lib/data/achievements.ts
// - lib/data/skills.ts
// - lib/data/education.ts
// - lib/data/certifications.ts
// - lib/data/conferences.ts
````

---

## 🎨 DESIGN DETAILS

### Glass Morphism
````css
backdrop-filter: blur(12px);
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.18);
````

### Gradient Text
````css
background: linear-gradient(135deg, #3B9FB5 0%, #00D9FF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
````

### Cards
````css
background: var(--card);
border-radius: 16px;
border: 1px solid var(--border);
padding: 24px;
transition: all 0.3s ease;

hover:
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2);
  border-color: var(--primary-bright);
````

### Buttons
````css
/* Primary */
background: linear-gradient(135deg, #3B9FB5, #00D9FF);
color: white;
padding: 12px 32px;
border-radius: 8px;
font-family: Geist Mono;

hover:
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 217, 255, 0.4);
````

---

## ✅ QUALITY CHECKLIST

Before completion:
- [ ] All 30+ projects with full descriptions
- [ ] All 6 companies with achievements
- [ ] All certs + education
- [ ] Both languages (PL/EN) complete
- [ ] Dark/light mode working
- [ ] All animations smooth (60fps)
- [ ] Mobile responsive (375px, 768px, 1440px)
- [ ] Lighthouse 95+
- [ ] No console errors
- [ ] Logo displayed
- [ ] CV/LinkedIn PDFs downloadable
- [ ] All links functional
- [ ] Keyboard navigation
- [ ] Focus states visible
- [ ] GitHub Pages config correct
- [ ] README with instructions
- [ ] Build successful (`npm run build`)
- [ ] Static export works (`/out` folder generated)

---

## 📋 FINAL README INSTRUCTIONS

Include in README.md:
````markdown
# Kamil Musiał Engineering Studio - Portfolio

## 🚀 Deployment to GitHub Pages

### Setup
1. Create GitHub repository: `kamil-musial-engineering-studio`
2. Push code to `main` branch
3. Go to Settings → Pages
4. Source: **GitHub Actions** (not branch)
5. GitHub Actions will auto-deploy

### Important Configuration
Update `basePath` in `next.config.js`:
```js
basePath: '/kamil-musial-engineering-studio'  // Match your repo name
```

### Access
- Production: `https://[username].github.io/kamil-musial-engineering-studio`
- Dev: `npm run dev` → `http://localhost:3000`

### Build Locally
```bash
npm install
npm run build  # Generates /out folder
npx serve@latest out  # Test static export
```

## 🛠 Tech Stack
- Next.js 14 (Static Export)
- TypeScript
- TailwindCSS
- Framer Motion
- next-intl
- Geist Fonts

## 📝 Content Updates
Edit data files in `lib/data/*.ts` to update:
- Experience
- Projects  
- Achievements
- Skills
- Education
````

### Assets (already in project)
- `assets/logo.svg` → Use directly in components (Next.js handles SVG)
- `data/cv.pdf` → Copy to `public/cv.pdf` for downloads
- `data/linkedin.pdf` → Copy to `public/linkedin.pdf` for downloads
- Generate: `public/favicon.ico` from logo
- Generate: `public/og-image.png` for social sharing (Open Graph)


---

## 🎯 EXECUTION NOTES

This is a **TOP QUALITY** portfolio for a Principal Engineer with MBA. Every detail matters:

- **Typography**: Perfect hierarchy (Geist fonts)
- **Animations**: Smooth, purposeful (60fps)
- **Code**: Clean, typed, documented
- **Performance**: Excellent (Lighthouse 95+)
- **UX**: "Wow effect with class" through execution excellence

The website itself is **proof of technical mastery**.

---

## 🚀 START BUILDING

**Phase order:**
1. Research & read files
2. Setup Next.js + dependencies
3. Configure GitHub Pages
4. Extract all CV data
5. Build components
6. Add animations
7. Test responsive
8. Deploy

**Use your tools strategically:**
- `view` for reading files
- `web_search` for best practices
- `bash_tool` for commands
- `create_file` for code
- `str_replace` for edits

Make it **exceptional**. 🔥

---

END OF PROMPT