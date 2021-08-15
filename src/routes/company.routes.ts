import { CreateCompanyController } from "@modules/compani/useCases/CreateCompany/CreateCOmpanyController";
import { Router } from "express";

const companyRoutes = Router()


const createCompanyController = new CreateCompanyController()

companyRoutes.post("/", createCompanyController.handle);


export { companyRoutes };