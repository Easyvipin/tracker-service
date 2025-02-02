import express, { Request } from "express";
import passport from "passport";

const authRouter = express.Router();

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email"],
  })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
  })
);

authRouter.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    console.log(err);
    if (err) {
      return next(err);
    }
  });
  res.redirect("/");
});

export default authRouter;

/* authRouter.get */
