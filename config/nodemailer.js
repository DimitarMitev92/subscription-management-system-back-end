import nodemailer from "nodemailer";
import { EMAIL_USERNAME, EMAIL_PASSWORD } from "./env.js";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USERNAME,
    pass: EMAIL_PASSWORD,
  },
});
