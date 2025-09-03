# Claude Development Notes

## Project Overview
DLB Solutions INC - Professional packaging, labeling, and fulfillment services website built with React + Vite.

## Development Commands
```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment
- **GitHub:** https://github.com/filenamedotexe/dlb-solutions-inc-cole
- **Production:** https://dlb-solutions-inc-cole.vercel.app
- **Deploy:** `vercel --prod`

## Key Contact Information
- **Phone:** (888) 280-9352 (clickable tel: links)
- **Email:** cole@dlbsolutionsinc.com (clickable mailto: links)
- **Address:** 24121 W Theodore Street, Unit 2A, Plainfield, IL 60586

## Architecture
- **Framework:** React 18 with Vite
- **Styling:** Vanilla CSS with modern responsive design
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Deployment:** Vercel with GitHub integration

## Key Features
- ✅ Responsive mobile-first design
- ✅ Working hamburger mobile menu
- ✅ Custom favicon with company box icon
- ✅ Professional contact cards (address, email, call)
- ✅ Services sections (Packaging, Labeling, Fulfillment)
- ✅ About section with company warehouse image
- ✅ Functional mailto: and tel: links

## File Structure
```
src/
├── assets/
│   ├── 1.png (company logo)
│   └── Warehouse-worker-clothing.png (about section image)
├── App.jsx (main application)
├── App.css (all styling)
├── main.jsx (React entry point)
└── index.css (global styles)
```

## Color Scheme
- **Primary:** Black (#000000, #1a1a1a)
- **Text:** Gray scale (#333, #666, #999)
- **Backgrounds:** White, light gray (#f8f9fa)
- **Hover accents:** Blue (#2563eb) for email, Green (#16a34a) for call

## Mobile Optimization
- Hamburger menu with React state management
- Touch-friendly 44px minimum button heights
- Responsive typography and spacing
- Single-column stacked layouts on mobile

## Development Notes
- No TypeScript - using vanilla JavaScript
- CSS uses flexbox and grid for layouts
- All external links use proper attributes
- Images optimized and properly imported
- Clean, semantic HTML structure

## Common Tasks
- Logo updates: Replace `src/assets/1.png`
- Contact info: Update in App.jsx (multiple locations)
- Styling: All CSS in `src/App.css`
- Deploy: `git push` → auto-deploys to Vercel