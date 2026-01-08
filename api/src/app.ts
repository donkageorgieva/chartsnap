import express from 'express';
import cors from 'cors';
import path from 'path';
import YAML from 'yaml';
import swaggerUi from 'swagger-ui-express';

import { readFileSync } from 'fs';

const app = express();
const specPath = path.join(__dirname, '..', '..', 'spec', 'chartsnap.yaml');
const openApiDoc = YAML.parse(readFileSync(specPath, 'utf8'));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDoc));
app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

// Placeholder for future routers (auth, entries, uploads, analytics)
// app.use('/api/entries', entriesRouter);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
