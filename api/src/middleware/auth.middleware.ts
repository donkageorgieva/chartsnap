import { NextFunction, Request, Response } from 'express';

import { AUTH_HEADER_PREFIX } from '../config/constants';
import { HttpError } from '../errors/http-error';
import { verifyAccessToken } from '../lib/jwt';
import prisma from '../lib/prisma';
import { ERROR_MESSAGES, HTTP_STATUS } from '../config/constants';

export const requireAuth = async (req: Request, _res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith(AUTH_HEADER_PREFIX)) {
      throw new HttpError(HTTP_STATUS.UNAUTHORIZED, ERROR_MESSAGES.AUTH_HEADER_MISSING);
    }

    const token = authorization.replace(AUTH_HEADER_PREFIX, '').trim();
    if (!token) {
      throw new HttpError(HTTP_STATUS.UNAUTHORIZED, ERROR_MESSAGES.TOKEN_MISSING);
    }

    const payload = verifyAccessToken(token);
    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
    });

    if (!user) {
      throw new HttpError(HTTP_STATUS.UNAUTHORIZED, ERROR_MESSAGES.USER_NOT_FOUND);
    }

    req.user = user;
    next();
  } catch (error) {
    next(
      error instanceof HttpError
        ? error
        : new HttpError(HTTP_STATUS.UNAUTHORIZED, ERROR_MESSAGES.TOKEN_INVALID)
    );
  }
};
