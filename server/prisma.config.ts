// import 'dotenv/config'
// import type { PrismaConfig } from '../generated/prisma/client'

// const connectionString = process.env.DATABASE_URL
// if (!connectionString) {
//   throw new Error('Missing DATABASE_URL environment variable')
// }

// const prismaConfig: PrismaConfig = {
//   datasources: {
//     db: {
//       provider: 'postgresql',
//       url: connectionString,
//     },
//   },
// }

// export default prismaConfig

import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
});