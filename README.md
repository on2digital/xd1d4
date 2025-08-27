# বাংলা LegalTech - Digital Chamber Management System

A comprehensive multi-tenant SaaS platform for Bangladesh legal practices to manage cases, automate cause-list tracking, conduct AI-assisted legal research, and streamline chamber operations.

## Features

### Core Platform
- **Multi-tenant Architecture**: Secure tenant isolation with role-based access control
- **Authentication & Authorization**: JWT-based auth with 2FA support and comprehensive RBAC
- **Case Management**: Complete case lifecycle management with timeline tracking
- **Document Management**: Upload, OCR processing, and intelligent document organization
- **Client Portal**: Self-service portal for clients to track cases and communicate

### Legal-Specific Features
- **Cause-List Automation**: Automated scraping and matching of HC/SC cause lists
- **Legal Research (RAG)**: AI-powered research with bilingual support and citation tracking
- **Time & Billing**: Comprehensive time tracking with automated invoicing
- **Bengali Language Support**: Full localization with Bengali font optimization

### Advanced Capabilities
- **Real-time Notifications**: Multi-channel alerts (Email/SMS/Telegram/App)
- **Payment Integration**: Support for local gateways (bKash/Nagad/Rocket)
- **Analytics Dashboard**: Comprehensive reporting and insights
- **OCR Processing**: Automated text extraction from legal documents

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Supabase (PostgreSQL + Real-time + Auth + Storage)
- **UI Components**: Custom components with Lucide React icons
- **State Management**: React Context + Hooks
- **Routing**: React Router v6
- **Styling**: Tailwind CSS with custom design system

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Supabase account and project

### Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

3. Configure Supabase:
   - Create a new Supabase project
   - Update `.env` with your Supabase URL and anon key
   - Click "Connect to Supabase" in the top right to complete setup

4. Start development server:
```bash
npm run dev
```

## Database Setup

The platform requires the following database tables (set up automatically via Supabase):

- `tenants` - Chamber/firm information
- `users` - User accounts with roles
- `clients` - Client information
- `cases` - Legal cases and matters
- `documents` - Document storage and metadata
- `tasks` - Task management
- `time_entries` - Time tracking
- `invoices` - Billing and invoicing
- `notifications` - System notifications
- `audit_logs` - Comprehensive audit trail

## User Roles

- **Super Admin**: Platform administration and tenant management
- **Chamber Admin**: Chamber-wide administration and user management
- **Senior Lawyer**: Full case and client management
- **Junior Lawyer**: Case work and research
- **Clerk**: Administrative support and document management
- **Client**: Self-service portal access

## Development Guidelines

### Code Organization
- Modular component architecture
- TypeScript for type safety
- Custom hooks for state management
- Utility functions for common operations
- Consistent file naming and structure

### Design System
- Professional legal industry aesthetics
- Bengali typography optimization
- Responsive design (mobile-first)
- Accessibility compliance (WCAG 2.1 AA)
- Dark/light mode support

### Security
- Row-Level Security (RLS) for multi-tenancy
- Role-based access control
- Input validation and sanitization
- Audit logging for compliance

## Deployment

The application is designed for production deployment with:

- Docker containerization
- Kubernetes orchestration
- CI/CD pipeline support
- Environment-specific configuration
- Monitoring and observability

## Support

For technical support or feature requests, contact the development team.

## License

Proprietary - Bangla LegalTech Platform