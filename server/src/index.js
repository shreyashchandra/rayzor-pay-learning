import { app } from "./app.js";
import Razorpay from "razorpay";

export const instance = new Razorpay({
  key_id: process.env.RAYZORPAY_KEY_ID,
  key_secret: process.env.RAYZORPAY_KEY_SECRET,
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
);
