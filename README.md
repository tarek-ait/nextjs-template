# Next.js Template Project

This is a [Next.js](https://nextjs.org) project that can be used as a template for building full-stack applications. It is bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and includes additional configurations and features to help you get started quickly.

## Features

- **Prisma Integration**: Pre-configured with Prisma for database management.
- **TypeScript Support**: Fully typed with TypeScript for better developer experience.
- **Prettier and ESLint**: Code formatting and linting tools included.
- **PostCSS**: Configured for advanced CSS processing.

- (we might add shadcn)
## Getting Started

To use this template, clone the repository and install dependencies:

```bash
git clone <repository-url>
cd nextjs-template
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

- **Database**: Update the `prisma/schema.prisma` file to define your database schema. Run `npx prisma migrate dev` to apply changes.
- **Pages**: Modify the files in the `app/` directory to customize the application.
- **Styling**: Update `globals.css` or add new CSS files as needed.

## Learn More

To learn more about the tools and frameworks used in this template, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [PostCSS Documentation](https://postcss.org/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Additional Notes

- **ESLint and Prettier**: This template includes ESLint for linting and Prettier for code formatting. Ensure your code adheres to the defined standards by running `npm run lint` and `npm run format`.
- **Pre-commit Hooks**: This template uses Husky to enforce code quality by running ESLint and Prettier checks on pre-commit. Ensure your code passes these checks before committing.
- **Environment Variables**: Update the `DATABASE_URL` in the `.env` file to point to your database instance. This is required for Prisma to connect to your database.


- or you can use it as a template for another repo.