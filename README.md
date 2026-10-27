# Mario Seelam — Developer Portfolio

A single-page personal portfolio for a Computer Science student and software developer. It brings together certifications, projects, an interactive skills graph, a learning timeline, and contact details in one responsive, dark-mode-friendly interface.

Built with React, TypeScript, Vite, and Tailwind CSS. All content lives in a single data file, so the site can be updated without touching component code.

## Features

- **Hero** — animated editorial headline with parallax technical artwork.
- **About** — background, focus areas, current goals, and a downloadable PDF résumé.
- **Certifications** — cards for the Cisco, Infosys, freeCodeCamp, AWS Academy, Red Hat, and cloud internship credentials, with public verification links where available.
- **Projects** — showcase for the Crime Reporting web app, the Rice Yield Predictor, and this portfolio itself.
- **Knowledge Map** — draggable, zoomable SVG graph of skills (languages, systems, algorithms) with an inspector panel for each node.
- **Timeline** — academic and professional milestones from 2022 onward.
- **Contact** — email, phone, GitHub, LinkedIn, and coding-profile links, plus a contact form that opens a prefilled email draft.
- **Command palette** — press `Ctrl+K` (or `⌘K`) to search certifications and projects, then jump to the matching section.
- **Theme toggle** — dark by default, with a light mode and reduced-motion support.

## Tech Stack

| Area | Tools |
| --- | --- |
| UI | React 19, TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS 4, custom CSS animations |
| Icons | lucide-react |
| Fonts | Inter, Space Grotesk, JetBrains Mono |

## Getting Started

**Prerequisite:** Node.js 18+ and npm.

```bash
# install dependencies
npm install

# start the dev server on http://localhost:3000
npm run dev
```

No API keys or environment variables are required to run the site.

### Other scripts

```bash
npm run build     # production build into dist/
npm run preview   # preview the production build locally
npm run lint      # type-check with tsc --noEmit
npm run clean     # remove dist/
```

## Project Structure

```
MyPortfolio/
├── index.html
├── vite.config.ts          # Vite + React + Tailwind plugins
├── netlify.toml            # static build + SPA redirect
├── public/
│   └── resume.pdf          # downloadable résumé
├── src/
│   ├── main.tsx            # app entry
│   ├── App.tsx             # layout, theme, scroll tracking, Ctrl+K shortcut
│   ├── index.css           # Tailwind theme, fonts, animations
│   ├── data.ts             # all portfolio content
│   ├── types.ts            # content model interfaces
│   └── components/
│       ├── Navbar.tsx
│       ├── CommandPalette.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── ResearchCard.tsx      # certifications section
│       ├── ProjectShowcase.tsx
│       ├── KnowledgeMap.tsx
│       ├── Timeline.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
```

## Editing Content

Nearly everything shown on the page is driven by `src/data.ts`:

| Export | Used by |
| --- | --- |
| `RESEARCH_PAPERS` | Certifications section |
| `PROJECTS` | Project showcase |
| `MILESTONES` | Timeline |
| `KNOWLEDGE_NODES` / `KNOWLEDGE_LINKS` | Knowledge map nodes and edges |

Add an entry to the relevant array and the matching section updates automatically. The shape of each entry is defined in `src/types.ts`.

The résumé download is served from `public/resume.pdf`; replace that file to update the downloadable CV.

## Deployment

The output in `dist/` is a static site. `netlify.toml` is already configured:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Netlify picks this up automatically. For other static hosts (Vercel, GitHub Pages, Cloudflare Pages), use `npm run build` as the build command and `dist` as the publish directory, with SPA fallback to `index.html`.

## Author

**Mario Seelam**

- GitHub: [github.com/mariognan13-lab](https://github.com/mariognan13-lab)
- LinkedIn: [mario-gnan-seelam](https://www.linkedin.com/in/mario-gnan-seelam-959412385)
- LeetCode: [6P39JTz2xd](https://leetcode.com/u/6P39JTz2xd/)
- Email: [mariognan13@gmail.com](mailto:mariognan13@gmail.com)
