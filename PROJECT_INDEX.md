# Project Structure & Deployment Index

## Project Overview

**maiebeauty** is a TanStack Start full-stack application built with:
- **Frontend**: React 19, TypeScript, Tailwind CSS, Radix UI
- **Routing**: TanStack Router with file-based routing
- **State Management**: TanStack Query (React Query)
- **Build Tool**: Vite with TanStack configuration
- **Runtime**: Node.js with Nitro
- **Deployment**: Vercel

## Directory Structure

```
maiebeauty/
├── src/
│   ├── routes/                 # File-based routing
│   │   ├── __root.tsx          # Root layout (app shell)
│   │   ├── index.tsx           # Home page (/)
│   │   ├── about.tsx           # About page (/about)
│   │   ├── services.tsx        # Services page (/services)
│   │   ├── prices.tsx          # Pricing page (/prices)
│   │   ├── reservar.tsx        # Reservations page (/reservar)
│   │   ├── contact.tsx         # Contact page (/contact)
│   │   └── README.md           # Routing conventions
│   │
│   ├── components/             # React components
│   │   ├── Navigation.tsx       # Main navigation
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Luxe.tsx            # Luxury component
│   │   ├── WhatsAppFloat.tsx    # WhatsApp floating button
│   │   └── ui/                 # Shadcn UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       └── ... (30+ UI components)
│   │
│   ├── assets/                 # Images and static assets
│   │   ├── logo-*.png.asset.json
│   │   ├── *-portrait*.jpg.asset.json
│   │   ├── lashes-*.jpg.asset.json
│   │   ├── nails-*.jpg.asset.json
│   │   └── ... (30+ image assets)
│   │
│   ├── lib/                    # Utility libraries
│   │   ├── config.server.ts    # Server configuration
│   │   ├── error-capture.ts    # Error handling
│   │   ├── error-page.ts       # Error page rendering
│   │   ├── i18n.tsx            # Internationalization
│   │   ├── lovable-error-reporting.ts  # Error reporting
│   │   ├── services.ts         # API services
│   │   ├── utils.ts            # Utility functions
│   │   └── api/                # API integration
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── use-mobile.tsx      # Mobile detection hook
│   │
│   ├── router.tsx              # Router setup
│   ├── routeTree.gen.ts        # Generated route tree (auto-generated)
│   ├── server.ts               # Server entry point
│   ├── start.ts                # App startup
│   └── styles.css              # Global styles
│
├── public/                     # Static files served directly
├── dist/                       # Build output (generated)
├── .output/                    # Nitro server output (generated)
│
├── Configuration Files:
│   ├── package.json            # Dependencies and scripts
│   ├── tsconfig.json           # TypeScript configuration
│   ├── vite.config.ts          # Vite + TanStack configuration
│   ├── vercel.json             # Vercel deployment configuration ✓
│   ├── .vercelignore           # Vercel ignore patterns ✓
│   ├── .npmrc                  # npm configuration ✓
│   ├── .env.example            # Environment variables template ✓
│   ├── .gitignore              # Git ignore patterns
│   ├── components.json         # Shadcn UI config
│   ├── bunfig.toml             # Bun configuration
│   └── eslint.config.js        # ESLint configuration
│
└── Documentation:
    ├── VERCEL_DEPLOYMENT.md    # Deployment guide ✓
    └── PROJECT_INDEX.md        # This file ✓
```

## Route Mapping

| File | URL | Description |
|------|-----|-------------|
| `index.tsx` | `/` | Home page |
| `about.tsx` | `/about` | About Magda/Maie |
| `services.tsx` | `/services` | Beauty services |
| `prices.tsx` | `/prices` | Service pricing |
| `reservar.tsx` | `/reservar` | Booking/Reservations |
| `contact.tsx` | `/contact` | Contact form |

## Component Hierarchy

```
App (__root.tsx)
├── Navigation
├── Outlet (page content)
└── Footer
└── WhatsAppFloat (floating button)
```

## Key Features

✅ **Responsive Design** - Mobile-optimized with Tailwind CSS  
✅ **Server-Side Rendering** - TanStack Start + Nitro for SSR  
✅ **Image Optimization** - Using `.asset.json` loader  
✅ **Form Handling** - React Hook Form + Zod validation  
✅ **UI Components** - Shadcn UI based on Radix UI  
✅ **Error Handling** - Global error capture and reporting  
✅ **Internationalization** - i18n support (Spanish by default)  
✅ **Analytics Ready** - Error reporting integration  

## Build Process

### Development
```bash
npm install
npm run dev
# Runs on http://localhost:5173
```

### Production Build
```bash
npm run build
# Outputs to:
# - dist/ (client assets)
# - .output/ (server bundle)
```

### Preview
```bash
npm run preview
# Preview production build locally
```

## Deployment Status

### ✅ Vercel Configuration Complete

- [x] `vercel.json` - Build and runtime configuration
- [x] `.vercelignore` - Deploy exclusions
- [x] `.npmrc` - npm optimization
- [x] `.env.example` - Environment template
- [x] `VERCEL_DEPLOYMENT.md` - Deployment guide

### Build Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `.output`
- **Node Version**: 20.x
- **Install Command**: `npm install`

## Environment Variables

Configure these in Vercel Dashboard (Settings → Environment Variables):

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `VITE_API_URL` | No | `http://localhost:3000` | API endpoint |
| `VITE_ENV` | No | `production` | Environment mode |
| `VITE_ENABLE_ANALYTICS` | No | `false` | Analytics enabled |

## Performance Optimization

### Caching Strategy (configured in `vercel.json`)

```json
Assets (1 year cache):
  /assets/* → max-age=31536000, immutable

API Routes (1 hour cache):
  /api/* → max-age=3600
```

### Function Configuration

- **Memory**: 1024 MB
- **Max Duration**: 60 seconds
- **Runtime**: Node.js 20.x

## Dependencies

### Core
- `@tanstack/react-router@^1.168` - Routing
- `@tanstack/react-start@^1.167` - Framework
- `@tanstack/react-query@^5.83` - State management
- `react@^19.2` - UI framework
- `tailwindcss@^4.2` - Styling

### UI Components
- `@radix-ui/*` - Accessible UI primitives
- `shadcn-ui` - Component library
- `lucide-react` - Icons
- `recharts` - Charts

### Utilities
- `react-hook-form@^7.71` - Form handling
- `zod@^3.24` - Schema validation
- `date-fns@^4.1` - Date utilities
- `framer-motion@^12.40` - Animations
- `sonner@^2.0` - Notifications

### Dev Dependencies
- `@lovable.dev/vite-tanstack-config` - Build config
- `typescript@^5.8` - Type checking
- `eslint` - Linting
- `prettier` - Formatting
- `vite@^7.3` - Build tool
- `nitro@3.0` - Server

## Deployment Checklist

Before deploying:

- [ ] All code committed to Git
- [ ] Environment variables configured
- [ ] Build passes locally (`npm run build`)
- [ ] No console errors in dev
- [ ] Routes tested locally
- [ ] Images optimized
- [ ] SEO metadata verified
- [ ] 404 page displays correctly
- [ ] Error boundaries working
- [ ] API connections configured

## Next Steps

1. **Push to Git**
   ```bash
   git add .
   git commit -m "Configure Vercel deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import this Git repository
   - Configuration auto-detects from `vercel.json`
   - Deploy!

3. **Post-Deployment**
   - Test all routes
   - Verify environment variables
   - Check error reporting
   - Monitor performance
   - Set up custom domain

## Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run lint            # Run ESLint
npm run format          # Format with Prettier

# Build
npm run build           # Production build
npm run build:dev       # Development build
npm run preview         # Preview build output

# Vercel
vercel                  # Deploy to staging
vercel --prod           # Deploy to production
vercel env              # Manage environment variables
```

## File Structure Quick Reference

| Path | Purpose | Example |
|------|---------|---------|
| `src/routes/*.tsx` | Pages (auto-routed) | `/services` → `services.tsx` |
| `src/components/` | React components | Navigation, Footer, UI components |
| `src/lib/` | Shared utilities | API calls, error handling, i18n |
| `src/assets/` | Images with metadata | Optimized image loader |
| `src/hooks/` | Custom hooks | `useIsMobile()` |
| `public/` | Static files | Direct file serving |
| `.output/` | Server bundle | Generated by build |
| `dist/` | Client assets | Generated by build |

## Troubleshooting Links

- [Vercel Documentation](https://vercel.com/docs)
- [TanStack Router Docs](https://tanstack.com/router/latest)
- [TanStack Start Docs](https://tanstack.com/start/latest)
- [Nitro Documentation](https://nitro.unjs.io/)
- [Vite Documentation](https://vitejs.dev/)

---

**Last Updated**: June 15, 2026  
**Version**: 1.0  
**Status**: ✅ Ready for Vercel Deployment
