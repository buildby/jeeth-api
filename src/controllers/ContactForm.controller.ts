import { RequestHandler } from "express";
import * as ContactFormService from "../services/ContactForm.service";
import { Prisma } from "@prisma/client";

export const getContactForms: RequestHandler = async (req, res, next) => {
  try {
    const contactForms = await ContactFormService.getContactForms();

    return res.status(200).json({
      result: "success",
      data: contactForms,
    });
  }
  catch (err) {
    next(err);
  }
}

export const getContactForm: RequestHandler = async (req, res, next) => {
  try {
    const contactForm = await ContactFormService.getContactForm(+req.params.id);

    return res.status(200).json({
      result: "success",
      data: contactForm,
    });
  }
  catch (err) {
    next(err);
  }
}

export const createContactForm: RequestHandler = async (req, res, next) => {
  try {
    const contactFormData: Prisma.ContactFormCreateInput = req.body;

    const contactForm = await ContactFormService.createContactForm(contactFormData);

    return res.status(201).json({
      result: "success",
      data: contactForm,
    });
  }
  catch (error) {
    next(error);
  }
}

export const updateContactForm: RequestHandler = async (req, res, next) => {
  try {
    const contactFormData: Prisma.ContactFormUpdateInput = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    };

    const contactForm = await ContactFormService.updateContactForm(+req.params.id, contactFormData);

    return res.status(200).json({
      result: "success",
      data: contactForm,
    });
  }
  catch (error) {
    next(error);
  }
}

export const deleteContactForm: RequestHandler = async (req, res, next) => {
  try {
    await ContactFormService.deleteContactForm(+req.params.id);
    return res.status(204).json({
      result: "success",
      data: null,
    });
  }
  catch (error) {
    next(error);
  }
}