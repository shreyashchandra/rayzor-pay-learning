import { Router } from "express";
import paymentRoutes from "./payment.routes.js";

const router = Router();

router.use("/payment", paymentRoutes);

export default router;
