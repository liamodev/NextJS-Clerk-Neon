# Next.js Clerk Neon - Multi-Role Authentication Portal

A modern, secure authentication system built with Next.js, Clerk, and Neon PostgreSQL. Features three-tier role-based access control (Users, Admins, Super Admins) with a beautiful 2025 SAAS-style UI.

## 🚀 Features

### Authentication
- **Email/Password Authentication** - Secure login with Clerk
- **Magic Link** - Passwordless authentication option
- **Password Reset** - Forgot password flow with email verification
- **Session Management** - Secure session handling via Clerk

### Role-Based Access Control
- **Three User Levels**:
  - **Users** - Basic access, can view dashboard
  - **Admins** - Can update passwords for any user
  - **Super Admins** - Full access: create users, delete users, manage roles

### Security
- **Row Level Security (RLS)** - Database-level access control enabled
- **RBAC** - Application-layer role-based access control
- **Webhook Verification** - Secure Clerk webhook signature validation
- **Secure Password Management** - All password operations through Clerk API

### User Management
- **User Creation** - Super admins can create new users with custom roles
- **User Deletion** - Super admins can delete users (prevents self-deletion)
- **Password Updates** - Admins can update passwords for any user
- **Role Management** - Centralized role assignment system

### Modern UI
- **2025 SAAS Design** - Clean, minimalist interface
- **Dark Mode Support** - Full dark/light theme support
- **Responsive Design** - Works seamlessly on all devices
- **shadcn/ui Components** - Beautiful, accessible UI components

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Authentication**: [Clerk](https://clerk.com)
- **Database**: [Neon PostgreSQL](https://neon.tech)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Validation**: [Zod](https://zod.dev)

## 📋 Prerequisites

- Node.js 18+ installed
- A Clerk account (free tier available)
- Neon database (project: "NextJS Clerk Neon Base")

## 🚦 Getting Started

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-clerk-neon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   CLERK_WEBHOOK_SECRET=whsec_...
   DATABASE_URL=postgresql://...
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Detailed Setup

For detailed setup instructions including Clerk configuration, webhook setup, and database configuration, see [SETUP.md](./SETUP.md).

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── users/              # User management API routes
│   │   └── webhooks/
│   │       └── clerk/          # Clerk webhook handler
│   ├── admin/                  # Admin portal
│   ├── dashboard/              # User dashboard
│   ├── super-admin/            # Super admin portal
│   ├── sign-in/                # Sign in page
│   ├── sign-up/                # Sign up page
│   └── reset-password/         # Password reset page
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── create-user-form.tsx
│   ├── password-update-form.tsx
│   ├── user-management-table.tsx
│   └── role-badge.tsx
├── db/
│   ├── schema.ts               # Drizzle schema definitions
│   └── index.ts                # Database connection
├── lib/
│   ├── auth.ts                 # Authentication utilities
│   ├── rbac.ts                 # Role-based access control
│   └── utils.ts
└── middleware.ts               # Clerk middleware configuration
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Drizzle Studio

## 🔐 Authentication Flow

1. User signs up/signs in through Clerk
2. Clerk webhook automatically creates user record in database with default "user" role
3. User is redirected to dashboard based on their role
4. Protected routes check user authentication and role before allowing access

## 🗄️ Database Schema

### Users Table
- `clerk_id` (Primary Key) - Clerk user ID
- `email` (Unique) - User email address
- `role` (Enum) - User role: 'user', 'admin', or 'super_admin'
- `created_at` - Account creation timestamp
- `updated_at` - Last update timestamp

## 🔒 Security Features

- **Row Level Security (RLS)** - Database policies enforce access control
- **Role-Based Routes** - Middleware protects routes based on user roles
- **API Authorization** - All API routes verify user authentication and roles
- **Webhook Security** - Clerk webhooks verified with signature validation
- **Input Validation** - Zod schemas validate all user inputs

## 📚 Documentation

- [Setup Guide](./SETUP.md) - Detailed setup and configuration instructions
- [Clerk Documentation](https://clerk.com/docs) - Clerk authentication docs
- [Next.js Documentation](https://nextjs.org/docs) - Next.js framework docs
- [Drizzle ORM Documentation](https://orm.drizzle.team) - Database ORM docs

## 🚢 Deployment

This application can be deployed on [Vercel](https://vercel.com) with minimal configuration:

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy!

Make sure to update your Clerk webhook URL to point to your production domain.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [Clerk](https://clerk.com) for authentication
- [Neon](https://neon.tech) for serverless Postgres
- [shadcn](https://ui.shadcn.com) for beautiful UI components
- [Vercel](https://vercel.com) for Next.js and hosting
