import dotenv from 'dotenv';
import app from './app';
import { DEFAULT_PORT, APP_NAME } from './config/constants';

dotenv.config({ path: process.env.DOTENV_CONFIG_PATH });

const port = process.env.PORT ? Number(process.env.PORT) : DEFAULT_PORT;

app.listen(port, () => {
  console.log(`${APP_NAME} running on port ${port}`);
});
