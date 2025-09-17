# AI Fraud Detection System

## Overview

This is a comprehensive AI-powered fraud detection application built as a full-stack web platform. The system demonstrates advanced machine learning capabilities for real-time transaction analysis, featuring a React-based frontend that showcases the fraud detection algorithms and a Node.js Express backend that handles API operations and database interactions. The application presents a professional marketing website with interactive demos, live dashboards, and detailed explanations of the fraud detection technology stack.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, built using Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom styling for accessibility and consistency
- **Design System**: Dark theme with comprehensive color palette and consistent spacing/typography

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for type safety and modern JavaScript features
- **API Design**: RESTful API endpoints with structured error handling and request/response logging
- **Data Validation**: Zod schemas for runtime type checking and data validation
- **Session Management**: Express session handling with PostgreSQL session store
- **Development**: Hot reload with Vite integration for seamless full-stack development

### Data Storage Solutions
- **Database**: PostgreSQL configured via Neon serverless platform
- **ORM**: Drizzle ORM with type-safe queries and schema migrations
- **Schema Management**: Version-controlled database migrations with Drizzle Kit
- **Data Models**: 
  - Users table for authentication
  - Demo requests table for lead capture
  - Transactions table with fraud analysis metadata
- **Storage Interface**: Abstracted storage layer supporting both in-memory (development) and PostgreSQL (production) implementations

### API Structure
- **Demo Requests**: POST `/api/demo-requests` for lead capture, GET for admin retrieval
- **Transaction Analysis**: POST `/api/analyze-transaction` for fraud scoring simulation
- **Metrics**: GET `/api/metrics` for dashboard fraud statistics
- **Error Handling**: Centralized error middleware with proper HTTP status codes and structured error responses
- **Request Logging**: Comprehensive logging of API requests with performance metrics

### UI/UX Design Patterns
- **Component Architecture**: Modular, reusable components with clear separation of concerns
- **Form Handling**: React Hook Form with Zod resolver integration for robust form validation
- **Loading States**: Optimistic updates and loading indicators using TanStack Query
- **Error Boundaries**: Graceful error handling with user-friendly error messages
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support through Radix UI

### Development Workflow
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Type Safety**: Shared TypeScript types between frontend and backend via shared schema
- **Path Aliases**: Configured import aliases for clean module resolution
- **Hot Reload**: Full-stack development with instant feedback and error overlay

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling and automatic scaling
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support

### UI/Component Libraries  
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives including dialogs, dropdowns, navigation menus, and form controls
- **Lucide React**: Modern icon library with consistent styling and extensive icon coverage
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens and responsive utilities

### Development Tools
- **Vite**: Next-generation frontend tooling with optimized builds and development server
- **TypeScript**: Static type checking across the entire application stack
- **TanStack Query**: Powerful data synchronization for React with caching, background updates, and optimistic updates

### Form and Validation
- **React Hook Form**: Performant forms with minimal re-renders and comprehensive validation
- **Zod**: TypeScript-first schema validation with runtime type checking

### Authentication & Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions with automatic cleanup

### Styling and Design
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Conditional className utility for dynamic styling
- **date-fns**: Modern date utility library for transaction timestamp formatting

### Development Environment
- **Replit Integration**: Specialized Vite plugins for Replit development environment including error modals, cartographer, and development banners