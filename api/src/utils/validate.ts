import { ZodSchema, ZodIssue } from 'zod';
import { HttpError } from '../errors/http-error';
import { HTTP_STATUS } from '../config/constants';

const formatIssues = (issues: ZodIssue[]): string => {
  return issues.map((issue) => issue.message).join(', ');
};

export const validate = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    const message = formatIssues(parsed.error.issues);
    throw new HttpError(HTTP_STATUS.BAD_REQUEST, message);
  }

  return parsed.data;
};
