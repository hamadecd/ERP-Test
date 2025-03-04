import { request } from '@playwright/test';
import { test, expect } from '@playwright/test';

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../config/.env') });

export const login = async ({ request, baseURL }) => {
  const response = await request.post(baseURL+'/auth/login', {
    data: {
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    },
  });

  if (response.ok()) {
    const cookies = await response.allCookies();
    const sessionCookies = cookies.filter(cookie =>
      ['permissions', 'refreshToken', 'sessionToken'].includes(cookie.name)
    );
    console.log(sessionCookies);
    return sessionCookies;  // Retorna os cookies necessários para autenticação
  }

  throw new Error('Login falhou');
};


