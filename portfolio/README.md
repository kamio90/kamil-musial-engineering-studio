# Kamil Musiał Engineering Studio - Portfolio

Personal portfolio website showcasing 9+ years of software engineering experience.

## 🚀 Deployment to GitHub Pages

### Setup
1. Create GitHub repository: `kamil-musial-engineering-studio`
2. Push code to `main` branch
3. Go to Settings → Pages
4. Source: **GitHub Actions** (not branch)
5. GitHub Actions will auto-deploy

### Important Configuration
Update `basePath` in `next.config.ts` if using different repo name:
```typescript
basePath: '/your-repo-name'  // Match your repo name
```

### Access
- **Production**: https://kamio90.github.io/kamil-musial-engineering-studio
- **Dev**: `npm run dev` → http://localhost:3000

### Build Locally
```bash
npm install
npm run build  # Generates /out folder
npx serve@latest out  # Test static export
```

## 🛠 Tech Stack

- **Framework**: Next.js 16 (Static Export)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion
- **i18n**: next-intl (PL/EN)
- **Fonts**: Geist Sans + Geist Mono
- **Icons**: Lucide React

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── [locale]/        # i18n routing
│   │   ├── layout.tsx   # Locale layout
│   │   └── page.tsx     # Main page
│   ├── globals.css      # Global styles
│   └── layout.tsx       # Root layout
├── components/
│   ├── providers/       # Theme provider
│   └── sections/        # Page sections
├── lib/data/            # CV data as TypeScript
├── messages/            # Translations (pl.json, en.json)
├── i18n/                # next-intl config
└── public/              # Static assets
```

## 📝 Content Updates

Edit data files in `lib/data/*.ts` to update:
- `experience.ts` - Work history (7 companies)
- `projects.ts` - Portfolio projects (30+)
- `achievements.ts` - Key accomplishments
- `skills.ts` - Technical skills
- `education.ts` - Degrees & certifications
- `conferences.ts` - Events & hackathons

## 🎨 Features

- ✅ Dark/Light theme toggle
- ✅ PL/EN language switch
- ✅ Responsive design (mobile-first)
- ✅ Animated sections (Framer Motion)
- ✅ Counter animations for stats
- ✅ Filterable project grid
- ✅ Timeline experience view
- ✅ Glass morphism UI
- ✅ Downloadable CV

## 🏆 Highlights

- **1st Place** - HackYeah 2023 (Europe's largest hackathon)
- **9+ years** - Full-stack development
- **30+ projects** - Commercial, competition, private
- **1M+ users** - Scaled systems
- **MBA** - Business Administration

## 📜 License

© 2024 Kamil Musiał. All rights reserved.
