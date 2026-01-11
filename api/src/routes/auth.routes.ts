import { Router } from 'express';

import { ERROR_MESSAGES, HTTP_STATUS, LOGIN_ROUTE, REGISTER_ROUTE } from '../config/constants';
import { HttpError } from '../errors/http-error';
import { hashPassword, verifyPassword } from '../lib/hash';
import { signAccessToken } from '../lib/jwt';
import prisma from '../lib/prisma';
import { toPublicUser } from '../utils/user';
import { validate } from '../utils/validate';
import { asyncHandler } from '../utils/async-handler';
import { AuthLoginSchema, AuthRegisterSchema } from '../validation/auth.schema';

const router = Router();

router.post(
  REGISTER_ROUTE,
  asyncHandler(async (req, res) => {
    const { email, password } = validate(AuthRegisterSchema, req.body);

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new HttpError(HTTP_STATUS.BAD_REQUEST, ERROR_MESSAGES.USER_ALREADY_EXISTS);
    }

    const passwordHash = await hashPassword(password);
    const user = await prisma.user.create({
      data: { email, passwordHash },
    });

    const token = signAccessToken(user.id);
    res.status(HTTP_STATUS.CREATED).json({ token, user: toPublicUser(user) });
  })
);

router.post(
  LOGIN_ROUTE,
  asyncHandler(async (req, res) => {
    const { email, password } = validate(AuthLoginSchema, req.body);

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new HttpError(HTTP_STATUS.UNAUTHORIZED, ERROR_MESSAGES.INVALID_CREDENTIALS);
    }

    const isValidPassword = await verifyPassword(password, user.passwordHash);
    if (!isValidPassword) {
      throw new HttpError(HTTP_STATUS.UNAUTHORIZED, ERROR_MESSAGES.INVALID_CREDENTIALS);
    }

    const token = signAccessToken(user.id);
    res.status(HTTP_STATUS.OK).json({ token, user: toPublicUser(user) });
  })
);

export default router;
