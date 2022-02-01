const nextJest = require('next/jest');
const dir = './';

const createJestConfig = nextJest({ dir });

const customJestConfig = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleNameMapper: {
    '^@/assets/(.*)$': '<rootDir>/public/assets/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['coverage', 'public'],
};

module.exports = createJestConfig(customJestConfig);
