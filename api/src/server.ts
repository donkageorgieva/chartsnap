import dotenv from 'dotenv';
import app from './app';

dotenv.config({ path: process.env.DOTENV_CONFIG_PATH });

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.listen(PORT, () => {
  console.log(`ChartSnap API running on port ${PORT}`);
});
