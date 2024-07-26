# neoway-test

This is a test project developed by Marcos Demétrio for Neoway. The instructions below will guide you through the process of setting up and running the project.

## API Key Setup

To use the News API, you need to create an API key. Follow these steps:

1. Go to [News API](https://newsapi.org/docs/get-started);
2. Sign up;
3. Generate a new API key;
4. Create `.env` file on root;
5. Add the API key to your `.env` file:

   ```plaintext
   API_KEY=your-api-key-here
   ```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Run Project with Docker

To run the project with Docker, follow these steps:

1. **Build the Docker image:**

   ```sh
   docker build -t neoway-test .
   ```

2. **Run the Docker container:**

   ```sh
   docker run -it -p 8080:80 --rm --name neoway-test-container neoway-test
   ```

You should be able to access the application at [http://localhost:8080](http://localhost:8080).
