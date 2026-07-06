import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client.js'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export default prisma
// // import 'dotenv/config'
// // import { PrismaConfig } from '@prisma/client'

// // const connectionString = process.env.DATABASE_URL
// // if (!connectionString) {
// //   throw new Error('Missing DATABASE_URL environment variable')
// // }

// // const prisma = new PrismaConfig({
// //   datasources: {
// //     db: { url: connectionString },
// //   },
// // })

// // export default prisma

// import 'dotenv/config'
// import { PrismaPg } from '@prisma/adapter-pg'
// import { PrismaClient } from '../generated/prisma/client.js'

// const connectionString = process.env.DATABASE_URL

// if (!connectionString) {
//   throw new Error('Missing DATABASE_URL environment variable')
// }

// const adapter = new PrismaPg({ connectionString })

// const prisma = new PrismaClient({
//   adapter,
// })

// export default prisma