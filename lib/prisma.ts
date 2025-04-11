import { PrismaClient } from '../src/app/generated/prisma';
import { withAccelerate } from '@prisma/extension-accelerate';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
