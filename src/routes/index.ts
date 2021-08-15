import { Router } from "express";
import { companyRoutes } from "./company.routes";
import { exchangesRoutes } from "./exchange.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/company", companyRoutes);
router.use("/exchange", exchangesRoutes);


export { router };