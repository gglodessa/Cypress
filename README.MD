Руководство к запуску тестов:

nmp init для инициализации нового проекта Node.js.

npm install cypress --save-dev для установки Cypress в качестве зависимости разработки в вашем проекте Node.js.

npm run cypress:open для запуска интерфейса Cypress Test 

npm run cypress:run для запуска тестов Cypress в режиме командной строки (headless mode).

npx cypress run --spec "C:\Users\Alekseii\js\Cypress\cypress\e2e\myTest\firstTest.cy.js"  для запуска конкретного тестового файла firstTest.cy.js в Cypress.


Allure:


npm i -D @shelex/cypress-allure-plugin для установки плагина Allure для Cypress.

npm run allure:report  чтобы сгенерировать отчет Allure на основе результатов тестовых запусков и просмотреть результаты в браузере.

npx cypress run --env allure=true для запуска тестов Cypress с включенным плагином Allure.

npx cypress run --spec "C:\Users\Alekseii\js\Cypress\cypress\e2e\myTest\firstTest.cy.js" --env allure=true для запуска конкретного тестового файла c Allure.

allure generate allure-results --clean -o allure-report для генерации отчета Allure на основе результатов тестовых запусков, которые находятся в папке allure-results.

allure open для открытия отчета Allure в браузере. 












