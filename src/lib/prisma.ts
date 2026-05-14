import { PrismaClient } from '@prisma/client'
import { existsSync, copyFileSync } from 'node:fs'
import { join } from 'node:path'

if (process.env.VERCEL === '1') {
  const tmpDb = '/tmp/dev.db'
  if (!existsSync(tmpDb)) {
    copyFileSync(join(process.cwd(), 'prisma/dev.db'), tmpDb)
  }
}

export const prisma = new PrismaClient({
  log: ['query'],
})
