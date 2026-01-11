import { Router } from 'express';

import { ME_ROUTE } from '../config/constants';
import { requireAuth } from '../middleware/auth.middleware';
import { asyncHandler } from '../utils/async-handler';
import { toPublicUser } from '../utils/user';

const router = Router();

router.get(
  ME_ROUTE,
  requireAuth,
  asyncHandler(async (req, res) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    res.json(toPublicUser(req.user));
  })
);

export default router;
