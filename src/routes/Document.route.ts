import { Router } from "express";
import * as DocumentController from "../controllers/Document.controller";

export const DocumentRoutes: Router = Router();

DocumentRoutes.get('/', DocumentController.getDocuments);
DocumentRoutes.get('/:id', DocumentController.getDocument);
DocumentRoutes.get('/driver/:driver_id', DocumentController.getDocumentByDriverId);
DocumentRoutes.get('/vendor/:vendor_id', DocumentController.getDocumentByVendorId);
DocumentRoutes.post('/', DocumentController.createDocument);
DocumentRoutes.patch('/:id', DocumentController.updateDocument);
DocumentRoutes.patch('/:doc_id/:driver_id', DocumentController.updateDriverDocument);
DocumentRoutes.delete('/:id', DocumentController.deleteDocument);

