import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

// Placeholder for future routers (auth, entries, uploads, analytics)
// app.use('/api/entries', entriesRouter);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
