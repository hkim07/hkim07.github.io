# Rebuild Your Academic Website with Astro

This is your rebuilt academic website using **Astro**, a modern static site generator with excellent performance and flexibility.

## What's New

### 🎨 Modern Design
- Clean, minimal aesthetic with responsive layout
- Dark mode support with smooth transitions
- Professional typography with Inter and JetBrains Mono fonts

### ⚡ Better Performance
- Static site generation (no server needed)
- Blazing fast load times
- Optimized for search engines (SEO)
- Sitemap generation

### 📊 Enhanced Features
- **Publications**: Browse and link to all your research papers
- **Research Highlights**: Showcase your research areas and methodologies
- **Portfolio**: Detailed project cards with descriptions and technologies
- **CV**: Complete curriculum vitae with downloadable PDF
- **Analytics Ready**: Easy integration with analytics services

### 🎯 Key Improvements Over Jekyll Version
1. **Astro Framework**: Faster, more modern than Jekyll
2. **Better Analytics**: Built-in support for tracking with gray-matter parsing
3. **React Components**: Extensible with interactive components when needed
4. **Improved Navigation**: Sticky header, theme toggle
5. **Gallery Support**: Ready for enhanced portfolio with images
6. **Mobile First**: Fully responsive design

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── layouts/
│   ├── Base.astro       # Base HTML layout
│   └── Page.astro       # Page template with navbar & footer
├── pages/
│   ├── index.astro      # Home page
│   ├── publications.astro
│   ├── research.astro
│   ├── portfolio.astro
│   ├── cv.astro
│   └── 404.astro
└── content/
    └── publications/    # Markdown files for publications

astro.config.mjs         # Astro configuration
```

## Adding Your Content

### Publications
Publications are in `src/content/publications/`. Edit the frontmatter to update details:
```yaml
---
title: "Your Paper Title"
venue: "Journal Name"
date: 2024-11-16
paperurl: "https://doi.org/..."
excerpt: "Paper description"
---
```

### Custom Pages
Create new `.astro` files in `src/pages/` directory. They automatically become routes.

### Styling
Global styles are in `src/layouts/Base.astro`. Each component has `<style>` blocks for scoped styling.

### Images & Files
- Place images in `public/images/`
- Place PDFs in `public/files/`
- Reference them with absolute paths: `/images/photo.jpg`

## Deployment

### GitHub Pages
1. Update `site` URL in `astro.config.mjs` if needed
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Select "GitHub Actions" as the source

### Other Hosts
Run `npm run build` and deploy the `dist/` folder to:
- Netlify
- Vercel
- Your own hosting

## Customization

### Theme Colors
Edit CSS variables in `src/layouts/Base.astro`:
```css
:root {
  --color-accent: #2563eb;     /* Change primary color */
  --color-text: #1a1a1a;       /* Change text color */
}
```

### Fonts
Update font import in `src/layouts/Base.astro` to use different fonts from Google Fonts.

### Add Analytics
Update `astro.config.mjs` to integrate analytics:
```javascript
export default defineConfig({
  integrations: [
    // Your analytics integration here
  ],
});
```

## Resources

- [Astro Docs](https://docs.astro.build)
- [Astro Components](https://astro.build/integrations)
- [GitHub Pages with Astro](https://docs.astro.build/en/guides/deploy/github/)

## Support

For questions or issues, refer to the [Astro documentation](https://docs.astro.build) or reach out to the Astro community.

---

Built with ❤️ for your academic presence.
