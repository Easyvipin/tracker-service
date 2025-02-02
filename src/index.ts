import express, { Express } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import passport, { Profile } from "passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import cookieSession from "cookie-session";
import router from "./routes";
import AppDataSource from "./db";
import swaggerUi from "swagger-ui-express";
import specs from "./config/swaggerConfig";
import { AUTH_OPTIONS, config } from "./config/auth";

dotenv.config();

function verifyCallback(
  accessToken: string,
  refreshToken: string,
  profile: Express.User,
  done: VerifyCallback
) {
  
  done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

passport.serializeUser((user: Express.User, done) => {
  done(null, user.id);
});

passport.deserializeUser((obj: Express.User, done) => {
  done(null, obj);
});

const app: Express = express();
const port = process.env.PORT || 6000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((error) => {
    console.error(error.message);
  });

app.use(helmet());

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1!, config.COOKIE_KEY_2!],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/", router);

app.listen(port, () => {
  console.log("Server up and running");
});
