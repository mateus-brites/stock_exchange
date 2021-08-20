import { ensureAdmin } from "@/middleware/ensureAdmin";
import { ensureAuthenticate } from "@/middleware/ensureAuthenticate";
import { ChangeValueController } from "@modules/company/useCases/ChangeValue/ChangeValueController";
import { CreateCompanyController } from "@modules/company/useCases/CreateCompany/CreateCOmpanyController";
import { Router } from "express";

const companyRoutes = Router()

const createCompanyController = new CreateCompanyController()
const changeValueController = new ChangeValueController()

companyRoutes.post("/",ensureAuthenticate, ensureAdmin ,createCompanyController.handle);
companyRoutes.patch("/value/:id", ensureAuthenticate, ensureAdmin, changeValueController.handle);


export { companyRoutes };