import { Router } from "express";
import {
  checkout,
  paymentVerfication,
  sendKey,
} from "../controllers/payment.controller.js";

const router = Router();

// Handle POST requests to /checkout
router.post("/checkout", checkout);
router.post("/verify", paymentVerfication);
router.get("/key", sendKey);

export default router;
