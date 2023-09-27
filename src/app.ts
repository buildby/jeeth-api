import 'dotenv/config';
import express, { NextFunction, Request, Response } from "express";
import { Routes } from './routes/routes';
import Error from './types/Error';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load('src/tools/swagger.yml');

const app = express()

// middlewares
app.use(express.json())
app.use(cors());

// health check route
app.get('/', (_req: Request, res: Response) => res.status(200).send('OK'));

// all routes
app.use('/', Routes);

// Swagger documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// error handling
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  return res.status(err.status || 500).json({
    result: 'failure',
    message: err.message,
  });
});

export default app;
