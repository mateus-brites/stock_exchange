import { ensureAdmin } from "@/middleware/ensureAdmin";
import { ensureAuthenticate } from "@/middleware/ensureAuthenticate";
import { CreateCompanyController } from "@modules/company/useCases/CreateCompany/CreateCOmpanyController";
import { Router } from "express";

const companyRoutes = Router()

const createCompanyController = new CreateCompanyController()

companyRoutes.post("/",ensureAuthenticate, ensureAdmin ,createCompanyController.handle);


export { companyRoutes };