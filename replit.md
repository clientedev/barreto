# Love Story Website

## Overview

This is a romantic anniversary celebration website that displays a love story timeline and photo gallery. The application showcases the relationship journey of Joel and Sandra since September 20, 1975, featuring real-time counters showing years, months, days together, and an interactive photo slideshow with their memories.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming, configured with "new-york" style variant
- **State Management**: React Query (TanStack Query) for server state management and data fetching
- **Forms**: React Hook Form with Zod resolvers for type-safe form validation

### Backend Architecture
- **Runtime**: Node.js with Express.js REST API framework
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development
- **Build System**: ESBuild for production bundling with external package handling
- **Middleware**: Custom logging middleware for API request tracking

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Session Storage**: PostgreSQL-based session store using connect-pg-simple
- **Development Storage**: In-memory storage implementation for development/testing

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL backing store
- **User Schema**: Basic user model with username/password authentication
- **Type Safety**: Zod schemas for runtime validation of user input
- **CRUD Interface**: Abstracted storage interface for user operations

### External Dependencies

#### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for PostgreSQL operations
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation

#### UI and Styling Dependencies
- **@radix-ui/***: Complete set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant management for components
- **clsx**: Conditional CSS class utility
- **cmdk**: Command palette component

#### Development and Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React integration for Vite
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript/TypeScript bundler

#### Data and Form Handling
- **@tanstack/react-query**: Powerful data synchronization for React
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: TypeScript-first schema validation

#### Additional UI Enhancements
- **embla-carousel-react**: Touch-friendly carousel component
- **date-fns**: Modern JavaScript date utility library
- **lucide-react**: Beautiful and consistent icon library
- **wouter**: Minimalist routing for React