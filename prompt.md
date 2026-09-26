You are an expert Front-End Engineer and UI/UX Designer. Build a complete, responsive, dark-mode portfolio web application in React (Next.js App Router) and Tailwind CSS, utilizing Framer Motion for animations and Lucide React for icons.

Replicate the layout, visual design system, components, and animations described below:

---

### 1. DESIGN SYSTEM & THEME
- Background: Deep slate/dark charcoal (`#0B0F17` to `#0F172A` radial background gradient).
- Glassmorphism: Cards must use backdrop blur (`backdrop-blur-md`), subtle translucent backgrounds (`bg-white/[0.03]`), and a soft border (`border border-white/10`).
- Color Accents: 
  - Primary Glow / Accent: Electric Cyan (`#38BDF8`) and Soft Blue (`#60A5FA`).
  - Text Primary: `#FFFFFF`.
  - Text Muted/Secondary: Slate Gray (`#94A3B8`).
- Typography: Inter or Plus Jakarta Sans for body and headings; JetBrains Mono or Fira Code for technical tags and code logos like `<Rensith />`.

---

### 2. COMPONENT ARCHITECTURE & LAYOUT

1. STICKY HEADER / NAVIGATION:
   - Fixed header with a frosted glass background (`backdrop-blur-lg bg-slate-950/70 border-b border-white/10`).
   - Left: Code-styled logo `<Rensith />` in accent cyan.
   - Middle: Navigation links with smooth scroll jump tags (`#about`, `#projects`, `#research`, `#journey`, `#skills`, `#articles`, `#contact`).
   - Right: "Download CV" CTA button with a glowing cyan outline and hover lift.

2. HERO SECTION:
   - Status Pill: Top badge with a green pulsing LED dot: "Open to collaborate".
   - Headline: Large gradient text (`bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-400`).
   - Subtitle: "Mobile App Developer | Full Stack & AI Enthusiast".
   - CTA Buttons: 
     - Primary: "View Projects" (Solid cyan gradient background, cyan box-shadow glow on hover).
     - Secondary: "Contact Me" (Glass button with subtle border).
   - Stat Counters Grid (3-column layout):
     - `200+` GitHub Repositories
     - `15+` Mobile Apps
     - `12+` Tech Stacks
   - Scroll Indicator: Animated vertical bouncing icon at the bottom.

3. ABOUT ME GRID:
   - Section header with a small tag (`// ABOUT ME`).
   - 2x3 Grid of Feature Cards: Mobile App Dev, Web App Dev, UI/UX Design, Full-Stack Engineering, AI & Automation, Creative Digital.
   - Each card contains an SVG icon with a subtle cyan glow container, a title, and a brief description.

4. FEATURED PROJECTS GRID:
   - 3-column responsive card grid (9 items total).
   - Project Card Anatomy:
     - Aspect ratio 16:9 image thumbnail wrapper with a dark overlay that lightens on hover.
     - Tech Stack Pills: Small horizontal row of rounded badges (`Python`, `Flutter`, `Firebase`, `OpenCV`, `Next.js`).
     - Content: Bold title, 2-line description, and links for `View Code` (GitHub icon) and `Live Demo` (External link icon).

5. RESEARCH & ACADEMIC HIGHLIGHTS:
   - High-contrast featured research cards with tags like "Published Research" or "Final-Year Research".
   - Includes conference badges (e.g., "FETSAC 2026") and research domain pill buttons (Computer Vision, Embedded AI, Biometrics).

6. EXPERIENCE & JOURNEY (TIMELINE):
   - Vertical timeline component with a cyan-tinted central line.
   - Node points that light up on scroll.
   - Cards split by time range, role title, organization, and bullet points of technical achievements.
   - Sub-sections for Work Experience, Education, and Certifications.

7. SKILLS CATEGORY CLOUD:
   - Categorized tabbed grid (Languages, Frontend/Mobile, Backend/DB, AI & Research, UX & Tools).
   - Each skill rendered as a small interactive pill card featuring the tech icon + skill name.

8. ARTICLES / BLOG GRID:
   - Cards showing technical posts (e.g., LinkedIn articles) with topic tags (`Security`, `Mobile`), estimated read time, title, short preview, and an arrow link CTA ("Read on LinkedIn").

9. CONTACT SECTION & FOOTER:
   - Left Side: Contact info (Location: Hikkaduwa, Sri Lanka; Email; Phone; Social icons).
   - Right Side: Interactive glass form with inputs for Name, Email, Message, and a glowing "Send Message" button.
   - Footer: Copyright notice and quick navigation links.

---

### 3. ANIMATIONS & MICRO-INTERACTIONS (FRAMER MOTION SPECIFICATION)

Implement the following Framer Motion properties across the app:

- Page / Section Entrance:
  - Scroll-triggered reveal: `initial={{ opacity: 0, y: 30 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `transition={{ duration: 0.6, ease: "easeOut" }}`, `viewport={{ once: true }}`.

- Staggered Children (Grid Cards & Tech Pills):
  - Parent container variant: `staggerChildren: 0.1`.
  - Child cards animate upward with smooth opacity fade-in.

- Interactive Hover Effects:
  - Cards: `whileHover={{ y: -6, transition: { duration: 0.2 } }}`.
  - Glass Border Glow: Subtle border color change to cyan (`border-cyan-500/50`) on hover.
  - Project Card Image: `whileHover={{ scale: 1.05 }}` image zoom inside an overflow-hidden wrapper.
  - Buttons: `whileHover={{ scale: 1.02 }}` and `whileTap={{ scale: 0.98 }}`.

- Pulsing LED Dot:
  - Continuous pulsing opacity animation on the "Open to collaborate" status dot (`animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }}`).

- Floating Background Ambient Glows:
  - 2 or 3 blurred background circles with subtle movement (`animate={{ x: [0, 30, 0], y: [0, -30, 0] }}`).

---

### INSTRUCTIONS:
Provide a fully written, modular, and functional React component structure using Tailwind CSS and Framer Motion that implements this design faithfully.