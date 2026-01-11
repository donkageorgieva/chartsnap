import bcrypt from 'bcrypt';
import { BCRYPT_SALT_ROUNDS } from '../config/constants';

export const hashPassword = async (plain: string): Promise<string> => {
  return bcrypt.hash(plain, BCRYPT_SALT_ROUNDS);
};

export const verifyPassword = (plain: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(plain, hash);
};
