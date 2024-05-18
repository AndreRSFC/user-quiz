import nextJest from 'next/jest';

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
};

const createJestConfig = nextJest({
  dir: './',
});

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  return {
    ...nextJestConfig,
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',

    moduleNameMapper: {
      '\\.svg$': '<rootDir>/jest-svg.ts',
      ...nextJestConfig.moduleNameMapper,
    },
  };
};

module.exports = jestConfig;
