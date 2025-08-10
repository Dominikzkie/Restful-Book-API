<p align="center" width="100%">
  <img width="33%" src="https://logowik.com/content/uploads/images/cypress8748.logowik.com.webp">
</p>
<p align="center">
  <a href="https://docs.cypress.io/app/get-started/why-cypress">Documentation</a> |
  <a href="https://docs.cypress.io/guides/overview/why-cypress">Cypress Overview</a>
</p>

```bash
npm install cypress --save-dev
```
or
```bash
yarn add cypress --dev
```
![installing-cli e1693232](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)
![](https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/59c46/cypress-logo.webp)

## How to run scripts in GUI Mode??

1. To open Cypress GUI Runner, run command line:
```bash
  npx cypress open
```

2. Once the **'Welcome to Cypress!'** modal is opened, select **E2E Testing**

<p align="center" width="100%">
  <img width="33%" src="https://applitools.com/wp-content/uploads/2022/12/cypress-welcome.jpg">
</p>

3. Select a browser you prefer

<p align="center" width="100%">
  <img width="33%" src="https://hackernoon.imgix.net/images/ZDJHykwZkQfIhJ9EECVNIMCWBIU2-dza34uj.jpeg">
</p>

4. Select a spec file you want to execte. For this exam, select automateSteps.cy.js
```bash
  automateSteps.cy.js
```

## How to run scripts in Headless Mode??

1. To open Cypress Headless Runner, run comand line:
```bash
  npx cypress run
```
2. To run specific test case and browser:
```bash
  npx cypress run --headless --browser edge --spec 'cypress/e2e/automateSteps.cy.js'
```

## 📁 Project Structure

📁 cypress
├── 📁 e2e # Main test specs
│ ├── 📁 specs.cy.js
├── 📁 Fixtures
│ ├── 📁 Images, videos, json files, etc
├── 📁 Page Objects
│ ├── 📁 common-elements.js
│ ├── 📁 different areas.js
├── 📁 Support
│ ├── 📁 custom commands
├── 📁 Videos
├── 📁 Screenshots

## 📚 References
[Cypress Best Practices](https://docs.cypress.io/app/core-concepts/best-practices)

## 🧰 Useful Commands
| Command             | Description                     |
|---------------------|---------------------------------|
| `npx cypress open`  | Launch Cypress Test Runner      |
| `npx cypress run`   | Run tests in headless mode      |
| `npm run test`      | Run tests with custom script    |
