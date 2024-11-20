import { instance } from "../index.js";

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount) * 100000, // amount in the smallest currency unit
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  res.status(200).json(order);
};

export const paymentVerfication = async (req, res) => {
  res.status(200).json({ message: "Payment Successfull" });
};

export const sendKey = (req, res) => {
  console.log(req.body);
  res.status(200).json({ key: process.env.RAYZORPAY_KEY_ID });
};
