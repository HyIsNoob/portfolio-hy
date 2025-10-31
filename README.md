# Portfolio Website - HyIsNoob

Modern portfolio website built with Next.js 14, featuring glassmorphism design and neon cyberpunk aesthetics with 3D particle effects.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS with custom cyberpunk theme
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes (dark/light mode)
- **Language**: TypeScript

## Features

- Glassmorphism UI with neon cyberpunk aesthetics
- Dark/Light mode toggle
- 3D particle background animation
- Fully responsive design
- Optimized performance
- Smooth animations with Framer Motion
- Component-based architecture
- Project showcase with category filtering
- Social media integration

## Project Structure

```
portfolio-hy/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main homepage
│   └── globals.css        # Global styles & custom CSS
├── components/
│   ├── 3d/                # Three.js components
│   │   └── ParticlesBackground.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Social.tsx
│   │   └── Contact.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── SectionTitle.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
└── lib/
    └── data.ts            # Structured personal data
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/HyIsNoob/portfolio-hy.git
cd portfolio-hy
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm run start
```

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import `HyIsNoob/portfolio-hy` repository
5. Configure project:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts to deploy.

## Customization

### Update Personal Information

Edit `lib/data.ts` to update:
- Personal info
- Skills
- Projects
- Social links
- Achievements
- Goals

### Customize Theme Colors

Edit `app/globals.css` to modify:
- Neon colors (cyan, magenta, purple, etc.)
- Glass effect styling
- Custom utilities

### Add/Remove Sections

Edit `app/page.tsx` to add or remove sections from the homepage.

## License

This project is open source and available under the MIT License.

## Author

**Nguyễn Khang Hy (HyIsNoob)**

- GitHub: [@HyIsNoob](https://github.com/HyIsNoob)
- YouTube: [@hyisnoob1102](https://youtube.com/@hyisnoob1102)
- Email: khanghyomni@gmail.com

---

Built with Next.js, TailwindCSS, and Three.js
