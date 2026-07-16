# MoneyGone

![GitHub last commit](https://img.shields.io/github/last-commit/Jimmy-02/MoneyGone)  ![GitHub Repo stars](https://img.shields.io/github/stars/Jimmy-02/MoneyGone)  ![GitHub Issues](https://img.shields.io/github/issues/Jimmy-02/MoneyGone)  ![GitHub repo size](https://img.shields.io/github/repo-size/Jimmy-02/MoneyGone)  ![GitHub top language](https://img.shields.io/github/languages/top/Jimmy-02/MoneyGone)

MoneyGone is a full-stack e-commerce application built with a modern JavaScript and TypeScript ecosystem. The project follows a monorepo architecture powered by Turborepo, separating the frontend and backend into independent applications while sharing a single repository.

The application provides a complete shopping experience, including authentication, product browsing, shopping cart management, checkout, order history, and an administration dashboard for managing products.

---

## Tech Stack

### Frontend

- React
- TypeScript
- React Router
- TanStack Query
- Zustand
- Tailwind CSS
- DaisyUI
- Clerk Authentication
- Sentry

### Backend

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Drizzle ORM
- Zod
- Clerk Backend SDK
- ImageKit
- Sentry

### DevOps & Tools

- Turborepo
- Docker
- GitHub Actions
- ESLint
- Prettier

---

## Features

### Customer

- User authentication
- Browse products
- Product categories
- Product details
- Shopping cart
- Checkout
- Order history
- Responsive user interface

### Administration

- Admin authentication
- Create products
- Update products
- Delete products
- Image upload with ImageKit
- Product activation management

### System

- RESTful API
- Role-based authorization
- Type-safe validation
- Optimized image delivery
- Error monitoring with Sentry

---

## Architecture

The project follows a monorepo architecture powered by Turborepo.

```text
MoneyGone
├── apps
│   ├── api          # Express REST API
│   └── web          # React frontend
├── package.json
├── turbo.json
└── docker-compose.yml
```

The frontend communicates with the backend through REST APIs. User authentication is handled by Clerk, product images are uploaded and optimized using ImageKit, and PostgreSQL is used as the primary database with Drizzle ORM.

---

## Folder Structure

```text
apps
├── api
│   ├── src
│   │   ├── db
│   │   ├── lib
│   │   ├── middleware
│   │   ├── routes
│   │   ├── services
│   │   └── server.ts
│   └── package.json
│
└── web
    ├── src
    │   ├── components
    │   ├── hooks
    │   ├── lib
    │   ├── pages
    │   ├── types
    │   ├── utils
    │   └── main.tsx
    └── package.json
```

---

## Installation

Clone the repository.

```bash
git clone https://github.com/Jimmy-02/MoneyGone.git
```

Move into the project directory.

```bash
cd MoneyGone
```

Install dependencies.

```bash
npm install
```

Create the required environment files.

```text
apps/api/.env
apps/web/.env
```

Start the development server.

```bash
npm run dev
```

---

## Available Scripts

Run the development server.

```bash
npm run dev
```

Build the project.

```bash
npm run build
```

Run ESLint.

```bash
npm run lint
```

Run TypeScript type checking.

```bash
npm run type-check
```

---

## Environment Variables

The project requires environment variables for the following services:

### Backend

- PostgreSQL
- Clerk
- ImageKit
- Sentry

### Frontend

- Clerk
- API URL
- Sentry

---

## License

This project is licensed under the MIT License.
