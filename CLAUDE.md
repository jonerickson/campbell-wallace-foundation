# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Campbell-Wallace Foundation website - a Next.js 15 application with TypeScript and Tailwind CSS for a 501(c)(3) non-profit organization established in 1997.

## Development Commands

```bash
# Development
pnpm dev          # Start development server (http://localhost:3000)
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
```

## Architecture & Key Technologies

- **Framework**: Next.js 15.2.4 with App Router
- **UI System**: shadcn/ui components with Radix UI primitives  
- **Styling**: Tailwind CSS with custom red theme (#9F3433)
- **Package Manager**: pnpm (not npm/yarn)
- **Security**: Cloudflare Turnstile integration for contact form

## Code Structure

- **Single Page Application**: All content lives in `app/page.tsx` with anchor navigation
- **Components**: Located in `components/` - mix of shadcn/ui components and custom ones
- **Styling**: `app/globals.css` contains CSS variables and theme definitions
- **Static Assets**: All images and PDFs in `public/` directory
- **Utilities**: `lib/utils.ts` contains the `cn()` function for className merging

## Important Implementation Details

### Contact Form
The contact form (`components/contact-form.tsx`) uses Resend for email delivery and Cloudflare Turnstile for security:
- **Email Service**: Resend API for sending contact form submissions
- **Security**: Cloudflare Turnstile for bot protection
- **Required Environment Variables**:
  - `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Cloudflare Turnstile public key
  - `TURNSTILE_SECRET_KEY` - Cloudflare Turnstile secret key
  - `RESEND_API_KEY` - Resend API key for sending emails
  - `CONTACT_EMAIL` - Email address to receive contact form submissions (defaults to info@campbellwallacefoundation.org)
- **API Endpoint**: `/api/contact` handles form submissions and email delivery

### Theming
- Built-in dark/light mode support via `next-themes`
- Custom CSS variables defined in `globals.css`
- Primary brand color: `--foundation-red: #9F3433`

### Accessibility
- Maintains ARIA labels, semantic HTML, and skip navigation links
- Screen reader support and reduced motion preferences
- Focus management for mobile menu

## Foundation Information

**Mission**: Supporting religious, charitable, scientific, literary, and educational purposes

**Current Beneficiaries**:
- ReFit Portland (Health & Wellness)
- Casey Eye Institute (Medical) 
- Oregon Lions Sight & Hearing Foundation
- In Our Backyard (Child Protection)
- W.A.G. – SNAX (Nutrition)

**Foundation Officers** (as of current site):
- President: Wiley Leigh Campbell Jr.
- Secretary: Mary Erickson  
- Treasurer: Tracy (Campbell) Parks
- 1st Vice President: Ragan Borzick