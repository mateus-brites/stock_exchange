import { Router } from "express";
import { companyRoutes } from "./company.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/company", companyRoutes);


export { router };