import express from 'express';
import cors from 'cors';
import path from 'path';
import YAML from 'yaml';
import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';

import authRouter from './routes/auth.routes';
import usersRouter from './routes/users.routes';
import {
  DOCS_ROUTE,
  JSON_BODY_LIMIT,
  URLENCODED_EXTENDED,
  HEALTH_ROUTE,
  AUTH_ROUTE_BASE,
  USERS_ROUTE_BASE,
} from './config/constants';
import { errorHandler } from './middleware/error-handler.middleware';

const app = express();
const specPath = path.join(__dirname, '..', '..', 'spec', 'chartsnap.yaml');
const openApiDoc = YAML.parse(readFileSync(specPath, 'utf8'));

app.use(DOCS_ROUTE, swaggerUi.serve, swaggerUi.setup(openApiDoc));
app.use(cors());
app.use(express.json({ limit: JSON_BODY_LIMIT }));
app.use(express.urlencoded({ extended: URLENCODED_EXTENDED }));

app.use(AUTH_ROUTE_BASE, authRouter);
app.use(USERS_ROUTE_BASE, usersRouter);

app.get(HEALTH_ROUTE, (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use(errorHandler);

export default app;
