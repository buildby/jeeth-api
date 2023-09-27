# Axioned-Node Starter Repo

## Getting Started

The node-starter repo comes bundled with an express server, swagger documentation, file/folder structure, file watcher (nodemon) jest testing suite, dotenv, husky, zod.

## Learn More About Folder Structure

```tree
└── src
    ├── app.ts (Main entry file)
    ├── index.ts (Express server file)
    ├── prisma
    │   └── schema.prisma (Prisma schema)
    │   └── client.ts (Prisma client)
    │   └── seed.ts - (Seed data)
    ├── controllers (Only Business logic)
    │   └── [Model].controller.ts
    ├── services (Only Database operations)
    │   └── [Model].service.ts 
    ├── routes
    │   └── route.ts
    │   └── [Model].route.ts
    ├── helpers
    │    └── [HelperFunctionName].ts
    ├── middleware
    │   └── [MiddlewareName].middleware.ts
    ├── tools
    │   └── swagger.yml
    ├── __tests__
    │   └── unit
    │       └── controller/[model].test.ts
    │       └── route/[model].test.ts
    │       └── helpers/[helper].test.ts
    │   └── integration
    │       └── services/[model].test.ts
    ├── types
    │   └── [Type].ts
    
```

* Change node & npm version with require version of the project.
* Run npm install to install project dependencies.
* Add require vs code extensions as below.
  * SonarLint
  * GitLens — Git supercharged

## Installation Guide

**Nodejs:** [Download](https://nodejs.org/en/download/)
_version:-_ `>=16.x.x`

## Develpment Setup

1. Clone the repository and install dependencies

   ```bash
   git clone https://github.com/axioned/axioned-node-starter.git
   ```

2. Install node dependencies

   ```bash
   npm ci
   ```

3. Create a _.env_ file which can be referenced from _.env.example_ and provide environment variables.

   ```bash
   cp .env.example .env
   ```

4. Start the application in development mode

   ```bash
   npm run dev
   ```

5. Run tests

   ```bash
   npm run test
   ```

6. Build the application

   ```bash
   npm run build
   ```

7. Start the application in production mode

   ```bash
    npm run start
    ```
