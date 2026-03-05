import { Router } from 'express';

export const itemsRouter = Router();

itemsRouter.get('/', async (_req, res, next) => {
  try {
    // Replace with real service call
    res.json([{ id: 1, name: 'Hello Copilot! Follow SKILL.md rules.' }]);
  } catch (err) {
    next(err);
  }
});
