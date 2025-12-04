# Setup Instructions

## Prerequisites

- Node.js 18+ installed
- A Clerk account (free tier available)
- Neon database connection string

## Step 1: Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk Webhook
CLERK_WEBHOOK_SECRET=whsec_...

# Neon Database
DATABASE_URL=postgresql://...
```

### Getting Clerk Keys

1. Sign up at [clerk.com](https://clerk.com)
2. Create a new application
3. Go to API Keys section
4. Copy the Publishable Key and Secret Key
5. Enable Magic Link authentication in Authentication → Email, Phone, Username → Email → Magic Link

### Setting up Clerk Webhook

1. In Clerk Dashboard, go to Webhooks
2. Add a new endpoint: `https://your-domain.com/api/webhooks/clerk`
3. Select events: `user.created`, `user.updated`, `user.deleted`
4. Copy the signing secret to `CLERK_WEBHOOK_SECRET`

### Getting Neon Database URL

1. Go to your Neon project: NextJS Clerk Neon Base
2. Copy the connection string from the dashboard
3. Add it to `DATABASE_URL`

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Database Setup

The database schema has already been created. If you need to regenerate migrations:

```bash
npm run db:generate
```

## Step 4: Run the Application

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Step 5: Create Your First Super Admin

1. Sign up through the sign-up page
2. Manually update the user role in the database to `super_admin`:

```sql
UPDATE users SET role = 'super_admin' WHERE email = 'your-email@example.com';
```

## Features

### User Roles

- **User**: Basic access, can view dashboard
- **Admin**: Can update passwords for any user
- **Super Admin**: Can create users, delete users, and manage roles

### Authentication Features

- Email/password authentication
- Magic link authentication (configured in Clerk dashboard)
- Password reset functionality
- Forgot password flow

### Security

- Row Level Security (RLS) enabled on all database tables
- Role-based access control (RBAC) in application layer
- Clerk webhook signature verification
- Secure password updates through Clerk API

## Troubleshooting

### Webhook Not Working

- Ensure your webhook URL is publicly accessible (use ngrok for local development)
- Verify the webhook secret matches in Clerk dashboard and `.env.local`
- Check the webhook logs in Clerk dashboard

### Database Connection Issues

- Verify your `DATABASE_URL` is correct
- Ensure your Neon project is active
- Check that the database has the required tables and RLS policies

### Role Not Working

- Verify the user exists in the `users` table
- Check that the webhook successfully created the user entry
- Ensure the role is one of: `user`, `admin`, `super_admin`

