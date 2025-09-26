import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  uuid,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  nickname: text('nickname').notNull(),
  tokenVersion: integer('token_version').notNull().default(0),
  emailVerified: boolean('email_verified').notNull().default(false),

  // Ranked play
  adventureRank: integer('adventure_rank').notNull().default(1),
  exp: integer('exp').notNull().default(0),

  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});
