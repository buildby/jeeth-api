import { Router } from "express";
import * as ContactFormController from "../controllers/ContactForm.controller";

export const ContactFormRoutes: Router = Router();

ContactFormRoutes.get('/', ContactFormController.getContactForms);
ContactFormRoutes.get('/:id', ContactFormController.getContactForm);
ContactFormRoutes.post('/', ContactFormController.createContactForm);
ContactFormRoutes.put('/:id', ContactFormController.updateContactForm);
ContactFormRoutes.delete('/:id', ContactFormController.deleteContactForm);