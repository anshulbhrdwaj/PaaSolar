import { config } from 'dotenv';
import path from 'path';
import { defineConfig } from 'prisma/config';

// Load .env.local first, then .env as fallback
config({ path: path.resolve(process.cwd(), '.env.local') });
config({ path: path.resolve(process.cwd(), '.env') });

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL || '',
  },
});
