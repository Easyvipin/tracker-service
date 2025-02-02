import dotenv from "dotenv";
import { StrategyOptions } from "passport-google-oauth20";

dotenv.config();

export const config = {
  CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
  CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};

export const AUTH_OPTIONS: StrategyOptions = {
  callbackURL: "/auth/google/callback",
  clientID: config.CLIENT_ID!,
  clientSecret: config.CLIENT_SECRET!,
};
