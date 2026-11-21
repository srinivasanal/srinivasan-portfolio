# SRINIVASAN — 3D Cloud & DevOps Engineer Portfolio

A futuristic **Blue Cloud Infrastructure** personal portfolio built with **React, Vite, Tailwind CSS, Framer Motion, Three.js, React Three Fiber, Drei, and Lucide React**.

## Features

- **Interactive 3D Cloud Infrastructure Hero**: Floating AWS VPC core, connected EC2/RDS/ALB/CI-CD/Docker-K8s server nodes, glowing network links, particle field, mouse-reactive tilt, and an automatic static fallback when WebGL is unavailable.
- **Blue Cloud Infrastructure Theme**: Dark Navy (`#071426`), Deep Blue (`#102C50`), Electric Blue (`#2563EB`), and Cyan (`#22D3EE`) glassmorphism surfaces.
- **Complete Resume-Grounded Content**: Career objective, verified statistics, 7 technical skill categories, 4 prominent Cloud & DevOps projects, 1 separate Featured AI/ML Final-Year project with architecture modals, animated vertical internship timeline, certifications, education, and validated contact form.
- **Built-In Resume Download**: Includes `public/resume.pdf` ready for one-click downloads.

## Local Installation & Development

```bash
# 1. Unzip and enter the project directory
cd srinivasan-portfolio

# 2. Install dependencies
npm install

# 3. Start the local Vite development server
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploying to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard
1. Push the `srinivasan-portfolio` directory to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Vercel automatically detects **Vite** (`npm run build` / output directory `dist`) via `vercel.json`.
4. Click **Deploy**.

## Customizing Project Data

All portfolio data (profile, skills, projects, internships, certifications, and education) is centralized in `src/data/portfolioData.js`.
