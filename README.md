# Ashok Dhas — Full-Stack Software Developer Portfolio

A modern, high-performance developer portfolio built with **React 18**, **Vite**, and a bespoke **Vanilla CSS design system**. Designed for optimal recruiter engagement, visual clarity, and fluid mobile responsiveness.

![Portfolio Banner](public/profile.jpg)

---

## 🚀 Live Demo & Repository

- **Live URL**: [Ashok Dhas Portfolio](https://dhasashok.github.io/portofolioFrontend/) https://portofolio-frontend-ten.vercel.app/
- **GitHub Repository**: [https://github.com/Dhasashok/portofolioFrontend](https://github.com/Dhasashok/portofolioFrontend)

---

## ✨ Key Features

- **Centered Executive Hero**:
  - Centerpiece profile headshot with dual animated rotating rings and active availability beacon.
  - Interactive typewriter cycling between core developer specializations.
  - Quick-access call-to-actions (Featured Projects, Resume, Contact) and social links.
- **Full-Screen Mobile Navigation**:
  - Dedicated mobile drawer that covers 100% of the screen (`100dvh`).
  - Strict background scroll-locking to prevent touch bleed-through.
  - Smooth glide navigation with accurate sticky navbar height offsets.
- **Production Systems Showcase**:
  - **PG Operations Management Platform**: Multi-tenant accommodation software saving 15+ admin hours/week with automated billing and occupancy analytics.
  - **Live Hospital Queue Management System**: Real-time patient triage and queueing platform built with TiDB distributed SQL and WebSockets.
- **Verified Engineering Credentials**:
  - SPPU Computer Engineering Degree (8.50 CGPA Distinction).
  - Categorized technical competencies: Frontend, Backend, Databases, Real-Time Systems, Cloud, and Core CS.
- **Zero Heavy Framework Bloat**:
  - Engineered with modular Vanilla CSS tokens instead of bloated utility frameworks for maximum runtime performance and 100% styling control.

---

## 🛠️ Tech Stack

| Domain | Technologies |
|---|---|
| **Frontend Core** | React 18, JavaScript (ESNext), HTML5 Semantic Elements |
| **Styling & Design** | Modern Vanilla CSS3, CSS Custom Properties, Glassmorphism, Responsive Media Queries |
| **Icons & Media** | [Lucide React](https://lucide.dev/), Custom SVGs |
| **Build & Tooling** | [Vite 8](https://vitejs.dev/), PostCSS, Rolldown |
| **Deployment** | Vercel / GitHub Pages |

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── Ashok_Rohidas_Dhas_Resume.pdf  # Verified downloadable resume
│   ├── profile.jpg                     # High-resolution headshot
│   ├── favicon.svg                     # Brand mark favicon
│   └── projects/                       # Production project preview assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                  # Sticky header & full-screen mobile drawer
│   │   ├── Hero.jsx                    # Centered executive identity & typewriter
│   │   ├── Projects.jsx                # Featured full-stack applications
│   │   ├── Experience.jsx              # Industry internships & technical roles
│   │   ├── Skills.jsx                  # Categorized skill badges
│   │   ├── About.jsx                   # Academic background & key highlights
│   │   ├── Education.jsx               # University & Polytechnic qualifications
│   │   ├── Certifications.jsx          # Technical specializations
│   │   ├── Contact.jsx                 # Direct communication channels
│   │   ├── Footer.jsx                  # Footer with back-to-top shortcut
│   │   └── Icons.jsx                   # Custom SVG brand icons
│   ├── data/
│   │   └── portfolioData.js            # Centralized content and project metadata
│   ├── App.jsx                         # Main application orchestrator
│   ├── main.jsx                        # React root entrypoint
│   └── index.css                       # Design tokens, keyframes, and responsive rules
├── package.json
└── vite.config.js
```

---

## 💻 Local Development Setup

To run this portfolio locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Dhasashok/portofolioFrontend.git
   cd portofolioFrontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled assets will be output to the `dist/` directory.

---

## 👤 Author

**Ashok Rohidas Dhas**  
*Full-Stack Software Developer | React.js, Node.js, Cloud Databases*

- **LinkedIn**: [linkedin.com/in/ashok-dhas](https://linkedin.com/in/ashok-dhas)
- **Email**: [ashokdhas6566@gmail.com](mailto:ashokdhas6566@gmail.com)
- **Phone**: +91 90667 76566
- **Location**: Pune, Maharashtra, India
