import { request, FullConfig } from '@playwright/test';

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, './config/.env') });

async function globalSetup(config: FullConfig) {
  const { baseURL } = config.projects[0].use;

  // Criação do contexto de requisição para login
  const context = await request.newContext();
  const response = await context.post(`${baseURL}/auth/login`, {
    data: {
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    },
  });

  if (!response.ok()) {
    throw new Error(`Login falhou: ${response.status()} - ${await response.text()}`);
  }

  // Salvar o estado de autenticação
  await context.storageState({ path: 'auth.json' });
  await context.dispose();
}

export default globalSetup;