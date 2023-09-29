import { Router } from "express";
import * as DocumentController from "../controllers/Document.controller";

export const DocumentRoutes: Router = Router();

DocumentRoutes.get('/', DocumentController.getDocuments); 
DocumentRoutes.get('/:id', DocumentController.getDocument);
DocumentRoutes.get('/user/:userId', DocumentController.getDocumentByUserId);
DocumentRoutes.post('/', DocumentController.createDocument);
DocumentRoutes.patch('/:id', DocumentController.updateDocument);
DocumentRoutes.delete('/:id', DocumentController.deleteDocument);

