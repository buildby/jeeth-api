import { RequestHandler } from "express";
import * as DocumentService from "../services/Document.service";

export const getDocuments: RequestHandler = async (req, res, next) => {

  const documents = await DocumentService.getDocuments();

  return res.status(200).json({
    result: 'success',
    data: documents,
  });
}

export const getDocument: RequestHandler = async (req, res, next) => {

  const document = await DocumentService.getDocument(+req.params.id);

  return res.status(200).json({
    result: 'success',
    data: document,
  });
}

export const getDocumentByUserId: RequestHandler = async (req, res, next) => {

  const documents = await DocumentService.getDocumentByUserId(+req.params.userId);

  return res.status(200).json({
    result: 'success',
    data: documents,
  });
}

export const createDocument: RequestHandler = async (req, res, next) => {

  const document = await DocumentService.createDocument(req.body);

  return res.status(201).json({
    result: 'success',
    data: document,
  });
}

export const updateDocument: RequestHandler = async (req, res, next) => {

  const document = await DocumentService.updateDocument(+req.params.id, req.body);

  return res.status(200).json({
    result: 'success',
    data: document,
  });
}

export const deleteDocument: RequestHandler = async (req, res, next) => {

  await DocumentService.deleteDocument(+req.params.id);

  return res.status(204);
}


