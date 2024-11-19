import { app } from "./app.js";
import Razorpay from "razorpay";
import cron from "node-cron";
import fetch from "node-fetch";

export const instance = new Razorpay({
  key_id: process.env.RAYZORPAY_KEY_ID,
  key_secret: process.env.RAYZORPAY_KEY_SECRET,
});

// Ping the server every 20 seconds to prevent idling
cron.schedule("*/20 * * * * *", async () => {
  try {
    const res = await fetch(
      `https://rayzor-pay-learning.onrender.com/api/v1/payment/key`
    );
    console.log(
      `Ping successful: ${res.status} - ${new Date().toLocaleTimeString()}`
    );
  } catch (error) {
    console.error("Ping failed:", error.message);
  }
});

// Start the server
app.listen(process.env.PORT, () =>
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
);
