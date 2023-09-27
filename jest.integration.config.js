module.exports = {
  verbose: true,
  clearMocks: true,
  testTimeout: 30000,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/__tests__/integration/**/*.ts?(x)'],
  bail: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/app.ts',
    '!src/prisma/**/*.ts',
  ]
};
