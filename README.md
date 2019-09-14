# Code.hub: React Advanced Topics

## Run locally

You need to have node.js installed. For development I used node version `8.11.3` and npm version `6.4.0`, but you can use any node/npm version you want. When you are ready, you can install all dependencies and run the development servers by typing the below commands:

```
npm i
npm start
open http://localhost:3000
```

## Test

Test the app:

```
npm test
```

Test in watch mode:

```
npm run test:watch
```

Generate test coverage:

```
npm run test:coverage
```

## Build app

Build the app:

```
npm run build
```

This command will create a `dist` directory with the generated `index.html` file and the bundled JS file (`bundle.js`).

## Lint files

Lint all js/jsx files:

```
npm run lint
```

Auto-fix linting issues:

```
npm run lint:fix
```

    "test:coverage": "jest --coverage"
