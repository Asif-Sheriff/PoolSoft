import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/db/schema.ts",
  driver: "turso",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  },
  dialect: "sqlite",
  tablesFilter: ["pool_*"],
} satisfies Config;