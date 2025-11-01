# Torch Landing Page

A modern, responsive landing page for Torch Analytics Platform built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 15** with App Router
- ⚛️ **React 19** for optimal performance
- 🎨 **Tailwind CSS v4** for styling
- 🌙 **Dark mode** support with theme provider
- 📱 **Fully responsive** design
- ♿ **Accessible** components (Radix UI)
- 🔍 **SEO optimized** with metadata management
- 📄 **Multiple pages**: Home, Features, Pricing, About, Contact

## Tech Stack

- **Framework**: Next.js 15.2.2
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Font**: Switzer Variable
- **Type Safety**: TypeScript 5

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Package manager: npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd torch
```

2. Install dependencies:

```bash
npm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
torch/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   ├── features/     # Features page
│   │   ├── pricing/      # Pricing page
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...          # Feature components
│   └── lib/             # Utility functions & constants
│       ├── constants.ts # Site configuration & metadata helpers
│       └── utils.ts     # Utility functions
├── public/              # Static assets
└── ...
```

## Configuration

### Site Configuration

Edit `src/lib/constants.ts` to customize:

- Site name and description
- Social media links
- Image assets URLs
- Metadata defaults

### Styling

The project uses Tailwind CSS v4 with custom utilities defined in `src/app/globals.css`. Theme colors and design tokens can be modified in the CSS custom properties.

## Build

Build the production version:

```bash
npm run build
# or
bun run build
```

Start the production server:

```bash
npm start
# or
bun start
```

## Code Quality

- **ESLint**: Configured with Next.js and TypeScript rules
- **TypeScript**: Strict mode enabled
- **Prettier**: Integrated with ESLint

Run linting:

```bash
npm run lint
# or
bun run lint
```

## Deployment

This project can be deployed on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any platform** supporting Next.js

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is private and proprietary.

## Credits

Design inspired by modern SaaS landing pages. Built with love using Next.js and React.

