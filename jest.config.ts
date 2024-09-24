import type { Config } from 'jest';

const config: Config = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
  ],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  preset: '@shelf/jest-mongodb',
  roots: [
    "<rootDir>/src"
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
};

export default config;
