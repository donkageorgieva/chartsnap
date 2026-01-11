export const APP_NAME = 'ChartSnap API';
export const DEFAULT_PORT = 4000;
export const JSON_BODY_LIMIT = '2mb';
export const URLENCODED_EXTENDED = true;
export const DOCS_ROUTE = '/docs';
export const HEALTH_ROUTE = '/health';
export const AUTH_ROUTE_BASE = '/auth';
export const USERS_ROUTE_BASE = '/users';
export const REGISTER_ROUTE = '/register';
export const LOGIN_ROUTE = '/login';
export const ME_ROUTE = '/me';
export const ACCESS_TOKEN_EXPIRES_IN = '1h';
export const BCRYPT_SALT_ROUNDS = 12;
export const AUTH_HEADER_PREFIX = 'Bearer ';

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const ERROR_MESSAGES = {
  AUTH_HEADER_MISSING: 'Authorization header missing or malformed',
  TOKEN_MISSING: 'Token missing from authorization header',
  TOKEN_INVALID: 'Invalid or expired authentication token',
  USER_NOT_FOUND: 'User associated with token not found',
  USER_ALREADY_EXISTS: 'User with this email already exists',
  INVALID_CREDENTIALS: 'Invalid credentials',
  UNAUTHORIZED: 'Unauthorized',
  SERVER_ERROR: 'Unexpected server error',
} as const;
