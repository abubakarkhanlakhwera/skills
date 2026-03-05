import express from 'express';
import { itemsRouter } from './routes/items.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/items', itemsRouter);

// Global error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: err.message } });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}. Follow SKILL.md rules.`));
