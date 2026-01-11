import jwt from 'jsonwebtoken';
import { ENV } from '../config/env';

const ACCESS_TOKEN_EXPIRES_IN = '1h';

export const signAccessToken = (userId: string): string => {
  return jwt.sign({ sub: userId }, ENV.JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRES_IN });
};

export const verifyAccessToken = (token: string): { sub: string } => {
  return jwt.verify(token, ENV.JWT_SECRET) as { sub: string };
};
