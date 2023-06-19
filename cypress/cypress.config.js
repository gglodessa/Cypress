const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
module.exports = (on, config) => {
  // Обработчик для задачи connectDatabase
  on('task', {
    connectDatabase() {
      // Ваш код для подключения к базе данных
      // ...
      // Верните результат подключения в виде промиса
      return Promise.resolve(/* результат подключения */);
    }
  });

  // Другие настройки и обработчики задач
  // ...

  return config;
};