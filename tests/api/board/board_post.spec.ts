import { test, expect, request } from '@playwright/test';

// test.only('Capturar cookies de autenticação', async ({ request }) => {
//     const response = await request.post('https://nest-erp.qacoders.dev.br/api/auth/login', {
//       data: {
//           email: process.env.EMAIL,
//         password: process.env.PASSWORD,
//        }
//     });
//     expect(response.ok()).toBeTruthy();
//     // Obter os cookies após a autenticação
//     const cookies = await request.storageState();
//   });

  test.only('Capturar cookies de autenticação', async ({ request }) => {
    const response = await request.get(process.env.BASE_URL+'/user');
    expect(response.ok()).toBeTruthy();
  });