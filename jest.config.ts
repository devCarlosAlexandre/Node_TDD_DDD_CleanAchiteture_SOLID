import type { Config } from 'jest';

const config: Config = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  roots: [
    "<rootDir>/src"
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
};

export default config;
