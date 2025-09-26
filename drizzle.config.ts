// drizzle.config.ts
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/lib/db/schema.ts', // <-- must include the real path + .ts
  out: './drizzle', // where migrations will be written
  dialect: 'postgresql', // supabase/postgres
  dbCredentials: {
    url: process.env.DATABASE_URL!, // ensure this is set
  },
  verbose: true,
  strict: true,
});
