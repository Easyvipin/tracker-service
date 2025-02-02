import { NextFunction, Request, Response } from "express";
import { Profile } from "passport-google-oauth20";

export function checkLoggedIn(req: Request, res: Response, next: NextFunction) {
  console.log("current User is :", req.user);
  const isLoggedIn = req.isAuthenticated();
  if (!isLoggedIn) {
    res.status(401).json({
      error: "You must log in!",
    });
    return;
  }
  next();
}
