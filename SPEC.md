# Portfolio VTK - Personal Portfolio Website Specification

## 1. Project Overview

**Project Name**: Portfolio VTK
**Type**: Personal Portfolio Website
**Core Functionality**: Showcase skills, projects, experience with premium animations and modern aesthetics
**Target Users**: Recruiters, potential clients, collaborators in tech industry

## 2. Tech Stack
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS
- shadcn/ui components
- Framer Motion (animations)
- Lucide React (icons)

## 3. Design Direction

### Aesthetic: "Refined Dark" - Premium Developer Portfolio
- **Theme**: Dark-first, with light mode option
- **Concept**: Editorial luxury meets developer portfolio - think high-end tech blog meets boutique agency
- **Typography**:
  - Display: "Playfair Display" (elegant serif for headings - distinctive choice)
  - Body: "DM Sans" (modern, geometric but refined)
- **Color Palette**:
  - Background: `#0A0A0B` (rich black)
  - Surface: `#141416` (elevated surfaces)
  - Surface Hover: `#1C1C1F`
  - Border: `#27272A` (subtle zinc)
  - Primary Accent: `#F5F5F4` (warm white)
  - Secondary Text: `#A1A1AA` (muted zinc)
  - Accent: `#22C55E` (vibrant green for CTAs - unexpected choice)
  - Gradient: Subtle warm gradient overlays

### Visual Effects
- Glassmorphism on navbar and cards (backdrop-blur)
- Subtle noise texture overlay on backgrounds
- Elegant borders (1px with low opacity)
- Soft shadows with colored glow on hover
- Staggered reveal animations

## 4. UI/UX Specification

### Layout Structure
- Max-width container: 1280px
- Section padding: 120px vertical (desktop), 80px (tablet), 60px (mobile)
- Grid: 12-column system
- Gutter: 24px (desktop), 16px (mobile)

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 5. Component Specifications

### 5.1 Navigation
- Sticky navbar with backdrop blur
- Logo/Name on left
- Nav links center: About, Skills, Projects, Experience, Contact
- Theme toggle + CTA button on right
- Mobile: Sheet/Drawer menu
- Active section indicator with smooth scroll

### 5.2 Hero Section
- Split layout: Text left (60%), Visual right (40%)
- Large display name with gradient text accent
- Role subtitle with typewriter or fade effect
- Brief bio paragraph (2-3 lines)
- CTA buttons: "View Projects" (primary), "Contact Me" (outline)
- Animated geometric shapes or gradient orb in background
- Floating profile image with subtle parallax

### 5.3 About Section
- Section title with decorative line
- Two-column: Bio text + Stats cards
- Stats: Years Experience (5+), Projects Completed (30+), Technologies (20+), Happy Clients (15+)
- Each stat has counting animation

### 5.4 Skills Section
- Section title centered
- Grid of skill cards (4 columns desktop, 2 mobile)
- Each card: Icon, skill name, brief description
- Hover: Lift + border glow effect
- Categories: Frontend, Backend, Tools, Design

### 5.5 Projects Section
- Section title with subtitle
- Filter tabs: All, Web App, Mobile, Open Source
- Grid: 3 columns desktop, 2 tablet, 1 mobile
- Project Card:
  - Image with aspect-ratio 16/10
  - Overlay on hover with "View Project" button
  - Title, description, tech tags
  - Links: Demo, GitHub (icon buttons)
- Featured project: Larger card with full-width on mobile

### 5.6 Experience Section
- Vertical timeline layout
- Alternating left/right on desktop
- Single column on mobile
- Timeline item: Date range, Company, Role, Description
- Animated line draws as you scroll
- Dot markers with pulse effect

### 5.7 Testimonials Section
- Carousel with 3 visible cards (desktop)
- Auto-play with pause on hover
- Quote icon, testimonial text, author name, role, company
- Avatar thumbnail

### 5.8 Contact Section
- Split: Form (60%) + Info (40%)
- Form fields: Name, Email, Subject, Message
- Input styling with floating labels
- Submit button with loading state
- Contact info: Email, Location, Availability status
- Social links with hover animations

### 5.9 Footer
- Minimal design
- Copyright text
- Social links
- Back to top button with smooth scroll
- Subtle top border

## 6. Animation Specifications

### Global
- Page load: Staggered fade-in from bottom
- Scroll reveal: Elements fade + translate up (20px)
- Duration: 0.5s - 0.8s
- Easing: [0.25, 0.1, 0.25, 1] (custom bezier)

### Specific Animations
- Hero text: Letter-by-letter or word-by-word reveal
- Navbar: Slide down on load, blur increase on scroll
- Cards: Scale(1.02) + shadow on hover
- Buttons: Subtle scale(0.98) on press
- Stats: Count up animation on viewport entry
- Timeline: Line draws + items fade in sequentially

## 7. Data Structure

All data in separate files under `/data`:
- `personal.ts` - name, role, bio, avatar, contact
- `projects.ts` - array of project objects
- `skills.ts` - categorized skills
- `experience.ts` - work history
- `testimonials.ts` - client reviews

## 8. File Structure

```
src/
├── components/
│   ├── ui/           # shadcn components
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── shared/
│       ├── SectionHeading.tsx
│       ├── ThemeToggle.tsx
│       ├── AnimatedContainer.tsx
│       └── SocialLinks.tsx
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Testimonials.tsx
│   └── Contact.tsx
├── data/
│   ├── personal.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── testimonials.ts
├── hooks/
│   └── useScrollAnimation.ts
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 9. Acceptance Criteria

1. ✅ All 8 sections rendered correctly
2. ✅ Dark/Light mode toggle works smoothly
3. ✅ Responsive on all breakpoints
4. ✅ Animations play smoothly (60fps)
5. ✅ Navigation scrolls to correct sections
6. ✅ Contact form has basic validation
7. ✅ All external links work
8. ✅ No console errors
9. ✅ Accessible (keyboard nav, proper ARIA)
10. ✅ Build succeeds without errors
