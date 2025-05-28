const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://front.serverest.dev",
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      username: 'admin@hotmail.com',
      password: 'admin@mouts'
    },
    setupNodeEvents(on, config) {
      // Implementar event listeners aqui, se necessário
    },
  },
});
