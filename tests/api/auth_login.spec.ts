// import { test, expect } from '@playwright/test';

// import dotenv from 'dotenv';
// import path from 'path';

// dotenv.config({ path: path.resolve(__dirname, '../../config/.env') });

// test('should be able to login with success', async ({ request, baseURL }) => {
//   const response = await request.post(`${baseURL}/auth/login`, {
//     data: {
//       email: process.env.EMAIL,
//       password: process.env.PASSWORD,
//     }
//   });
//   expect(response.ok()).toBeTruthy();
//   let result = await response.json();
//   expect(result.message).toContain('Login realizado com sucesso.');
// });