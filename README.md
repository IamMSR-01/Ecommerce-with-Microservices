# E-Commerce Microservices Platform

A scalable, modern e-commerce platform built with microservices architecture using TypeScript, Next.js, and various backend frameworks. This monorepo leverages Turborepo for efficient build orchestration and pnpm for package management.

## 🚀 Features

- **Microservices Architecture**: Modular services for products, orders, and payments
- **Modern Frontend**: Next.js 16 with React 19 for the web application
- **Database Layer**: PostgreSQL with Prisma ORM for type-safe database operations
- **Shared UI Components**: Reusable React components across applications
- **Type-Safe Development**: Full TypeScript coverage with strict linting
- **Fast Builds**: Turborepo-powered build pipeline with caching
- **Development Tools**: Hot reloading, type checking, and code formatting

## 🛠 Tech Stack

### Frontend
- **Next.js 16** - React framework for the web app
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript

### Backend Services
- **Product Service**: Express.js with TypeScript
- **Order Service**: Fastify with TypeScript
- **Payment Service**: Hono with TypeScript

### Database & ORM
- **PostgreSQL** - Primary database
- **Prisma** - ORM with type generation

### Development & Build Tools
- **Turborepo** - Build system and task orchestration
- **pnpm** - Package manager with workspaces
- **ESLint** - Code linting
- **Prettier** - Code formatting

### Shared Packages
- **@repo/ui** - Shared React components
- **@repo/db** - Database client and schemas
- **@repo/eslint-config** - Shared ESLint configuration
- **@repo/typescript-config** - Shared TypeScript configuration

## 📋 Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** >= 9.0.0
- **PostgreSQL** database
- **Git** for version control

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create `.env` files in the following directories with required variables:

   - `apps/product-service/.env`
   - `apps/order-service/.env`
   - `apps/payment-service/.env`
   - `packages/productsDatabase/.env`

   Example `.env` for product service:
   ```env
   PORT=3001
   DATABASE_URL="postgresql://username:password@localhost:5432/ecommerce"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   pnpm run db:generate

   # Run migrations
   pnpm run db:migrate
   ```

## 🏃 Usage

### Development

Start all services in development mode:
```bash
pnpm run dev
```

This will start:
- Web app on http://localhost:3000
- Product service on http://localhost:3001
- Order service on http://localhost:8001
- Payment service on http://localhost:8002

### Individual Services

Start specific services:
```bash
# Web app only
cd apps/web && pnpm run dev

# Product service only
cd apps/product-service && pnpm run dev

# Order service only
cd apps/order-service && pnpm run dev

# Payment service only
cd apps/payment-service && pnpm run dev
```

### Build

Build all applications and packages:
```bash
pnpm run build
```

### Linting & Type Checking

```bash
# Lint all code
pnpm run lint

# Check types
pnpm run check-types

# Format code
pnpm run format
```

## 🏗 Architecture Overview

### Services

#### Product Service (Port 3001)
- **Framework**: Express.js
- **Purpose**: Manages product catalog and categories
- **Endpoints**:
  - `GET /products` - List products
  - `GET /categories` - List categories
- **Database**: PostgreSQL via Prisma

#### Order Service (Port 8001)
- **Framework**: Fastify
- **Purpose**: Handles order processing and management
- **Status**: Basic setup (expand as needed)

#### Payment Service (Port 8002)
- **Framework**: Hono
- **Purpose**: Manages payment processing
- **Status**: Basic setup (expand as needed)

#### Web Application (Port 3000)
- **Framework**: Next.js
- **Purpose**: Customer-facing e-commerce website
- **Features**: Product browsing, shopping cart, checkout

### Database Schema

#### Product Model
- `id`: Primary key
- `name`: Product name
- `shortDescription`: Brief description
- `description`: Full description
- `price`: Price in cents
- `sizes`: Array of available sizes
- `colors`: Array of available colors
- `images`: JSON array of image URLs
- `categorySlug`: Foreign key to Category
- `createdAt`/`updatedAt`: Timestamps

#### Category Model
- `id`: Primary key
- `name`: Category name
- `slug`: Unique URL-friendly identifier
- `products`: Related products

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `PORT` | Service port (defaults vary by service) | No |

### Database Setup

1. Create a PostgreSQL database
2. Update `DATABASE_URL` in environment files
3. Run migrations: `pnpm run db:migrate`
4. Generate client: `pnpm run db:generate`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run tests and linting: `pnpm run lint && pnpm run check-types`
5. Commit your changes: `git commit -am 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature`
7. Submit a pull request

### Development Guidelines

- Use TypeScript for all new code
- Follow ESLint rules
- Write meaningful commit messages
- Test your changes before submitting
- Update documentation as needed

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or issues:
- Create an issue in the repository
- Check the documentation in `apps/docs`
- Review the code comments for implementation details

---

Built with ❤️ using Turborepo and modern web technologies.
pnpm dlx turbo build
pnpm exec turbo build
```

You can build a specific package by using a [filter](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters):

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed:

```sh
turbo build --filter=docs
```

Without global `turbo`:

```sh
npx turbo build --filter=docs
pnpm exec turbo build --filter=docs
pnpm exec turbo build --filter=docs
```

### Develop

To develop all apps and packages, run the following command:

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed (recommended):

```sh
cd my-turborepo
turbo dev
```

Without global `turbo`, use your package manager:

```sh
cd my-turborepo
npx turbo dev
pnpm exec turbo dev
pnpm exec turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters):

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed:

```sh
turbo dev --filter=web
```

Without global `turbo`:

```sh
npx turbo dev --filter=web
pnpm exec turbo dev --filter=web
pnpm exec turbo dev --filter=web
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.dev/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed (recommended):

```sh
cd my-turborepo
turbo login
```

Without global `turbo`, use your package manager:

```sh
cd my-turborepo
npx turbo login
pnpm exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed:

```sh
turbo link
```

Without global `turbo`:

```sh
npx turbo link
pnpm exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.dev/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.dev/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.dev/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.dev/docs/reference/configuration)
- [CLI Usage](https://turborepo.dev/docs/reference/command-line-reference)
