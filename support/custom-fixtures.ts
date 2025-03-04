// import { test as base } from '@playwright/test';
// import { login } from './login'; // Função de login que retorna os cookies

// // Definindo a fixture personalizada para passar os cookies
// export const test = base.extend({
//   authCookies: async ({}, use) => {
//     // Faz o login e pega os cookies
//     const cookies = await login();
//     // Antes de rodar os testes, usamos a fixture para injetar os cookies
//     await use(cookies);
//   },
// });