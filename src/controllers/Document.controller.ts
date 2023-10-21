import { RequestHandler } from "express";
import * as DocumentService from "../services/Document.service";

export const getDocuments: RequestHandler = async (req, res, next) => {
  try {
    const documents = await DocumentService.getDocuments();

    return res.status(200).json({
      result: 'success',
      data: documents,
    });
  } catch (error) {
    next(error);
  }
}

export const getDocument: RequestHandler = async (req, res, next) => {
  try {
    const document = await DocumentService.getDocument(+req.params.id);

    return res.status(200).json({
      result: 'success',
      data: document,
    });
  } catch (error) {
    next(error);
  }
}

export const getDocumentByDriverId: RequestHandler = async (req, res, next) => {
  try {

    const documents = await DocumentService.getDocumentByDriverId(+req.params.driver_id);

    return res.status(200).json({
      result: 'success',
      data: documents,
    });
  } catch (error) {
    next(error);
  }
}

export const getDocumentByVendorId: RequestHandler = async (req, res, next) => {
  try {

    const documents = await DocumentService.getDocumentByVendorId(+req.params.vendor_id);

    return res.status(200).json({
      result: 'success',
      data: documents,
    });
  } catch (error) {
    next(error);
  }
}

export const createDocument: RequestHandler = async (req, res, next) => {
  try {
    const document = await DocumentService.createDocument(req.body);

    return res.status(201).json({
      result: 'success',
      data: document,
    });
  } catch (error) {
    next(error);
  }
}

export const updateDocument: RequestHandler = async (req, res, next) => {
  try {
    const document = await DocumentService.updateDocument(+req.params.id, req.body);

    return res.status(200).json({
      result: 'success',
      data: document,
    });
  } catch (error) {
    next(error);
  }
}

export const deleteDocument: RequestHandler = async (req, res, next) => {
  try {
    await DocumentService.deleteDocument(+req.params.id);
    return res.status(204);
  } catch (error) {
    next(error);
  }
}


