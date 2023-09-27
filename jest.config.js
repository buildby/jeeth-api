module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/src/singleton.ts'],
  testMatch: ['<rootDir>/src/__tests__/unit/**/*.ts?(x)'],
  bail: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/app.ts',
    '!src/prisma/**/*.ts',
    '!src/__tests__/**/*.ts',
  ]  
};
